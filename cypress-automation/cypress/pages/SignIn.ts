/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint sonarjs/no-duplicate-string: 0 */
/* eslint @typescript-eslint/no-shadow: 0 */

import { UserData } from "../test_data/users";
import { CourseData } from "../test_data/courses";

const signInText = 'Sign In';
const signUpText = 'Sign Up';
const signOutText = 'Sign Out';
const userEmailInput = '#emailAddress';
const userPasswordInput = '#password';
const validationErrorTitle = 'div.validation--errors h3'

const validateUserSession = () => {
  cy.request({
    method: 'GET',
    url: '/api/courses',
    headers: {
      referer: Cypress.config('baseUrl'),
    },
  })
    .its('status')
    .should('eq', 200);
};

const SignIn = {
  initiateUserSession(user: UserData) {
    cy.session(
      user,
      () => {
        cy.intercept({
          method: 'GET',
          url: /\/api\/courses/,
        }).as('userDataRequest');
        cy.visit('/signin');
        cy.get('a').contains(signInText).click();
        cy.get(userEmailInput).type(user.email);
        cy.get(userPasswordInput).type(user.password);
        cy.get('button').contains(signInText).click();
        //check login
        cy.wait('@userDataRequest');
      },
      { cacheAcrossSpecs: true, validate: validateUserSession }
    );
  },

  attemptUserLogin(user: UserData) {
    cy.get('a').contains(signInText).click();
    cy.get(userEmailInput).type(user.email);
    cy.get(userPasswordInput).type(user.password);
    cy.get('button').contains(signInText).click();
  },

  attemptClearUserLogin() {
    cy.get('a').contains(signInText).click();
    cy.get('button').contains(signInText).click();
  },

  verifyInvalidUserLogin(course: CourseData) {
      cy.get(validationErrorTitle)
        .should('be.visible')
        .and('contain', course.validationErrorTitle);
  },

  userSignOut() {
    cy.get('a').contains(signOutText).click();
    cy.get('a').contains(signInText)
      .should('be.visible');
    cy.get('a').contains(signUpText)
      .should('be.visible');
  },
};

export default SignIn;
