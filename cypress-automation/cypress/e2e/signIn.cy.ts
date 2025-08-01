import CoursePage from '../pages/Courses';
import SignIn from '../pages/SignIn';

describe(
  'Verify User Sign In Functionality',
  function () {
    beforeEach(function () {
      cy.viewport('macbook-15');
      cy.visit('/');
    });

    it(
      'SignIn Page: user sign-in with correct credentials',
      function () {
        SignIn.attemptUserLogin(
          Cypress.env('users').userWithAccess
        );
        CoursePage.verifySignedInUser(
          Cypress.env('courses')
        );
        CoursePage.verifyCoursePageElements(
          Cypress.env('courses').courseTitles
        );
      }
    );

    it(
      'SignIn Page: user sign-in with incorrect credentials',
      function () {
        SignIn.attemptUserLogin(
          Cypress.env('users').userWithoutAccess
        );
        SignIn.verifyInvalidUserLogin(
          Cypress.env('courses')
        );
      }
    );

    it(
      'SignIn Page: user sign-in without credentials',
      function () {
        SignIn.attemptClearUserLogin();
      }
    );
  }
);
