/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint sonarjs/no-duplicate-string: 0 */
/* eslint @typescript-eslint/no-shadow: 0 */

import { CourseData } from "../test_data/courses";

const courseModuleContainer = 'div[class="wrap main--grid"]';
const welcomeText = 'ul.header--signedin';
const headerLogo = 'h1.header--logo';
const addCourseBttn = 'span.course--add--title';
const courseTitleInput = '#courseTitle';
const courseDescriptionInput = '#courseDescription';
const estimatedTimeInput = '#estimatedTime';
const createCourseText = 'Create Course';
const courseDetailText =  'Course Detail';
const updateCourseText = 'Update Course';
const deleteCourseText = 'Delete Course';


const Courses = {
  verifySignedInUser(course: CourseData) {
    cy.get(headerLogo)
      .should('be.visible')
      .and('contain.html', course.headerLogoText);
    cy.get(welcomeText)
      .should('be.visible')
      .and('contain', course.welcomeText);
  },
  verifyCoursePageElements(courseTitleCards: string[]) {
    Cypress._.forEach(courseTitleCards, (courseTitleCard) => {
      cy.get(courseModuleContainer)
        .find('h3')
        .contains(courseTitleCard)
        .should('be.visible');
    });
  },
  verifyPageHeaderTextIsDisplayed(text: string) {
    cy.get('h2')
      .contains(text)
      .should('be.visible');
  },
  clickAddCourse() {
    cy.get(addCourseBttn).should('be.visible').click();
    this.verifyPageHeaderTextIsDisplayed(createCourseText);
  },
  clickExistingCourse(courseTitle: string) {
    cy.get(courseModuleContainer)
      .find('h3')
      .contains(courseTitle)
      .should('be.visible').click();
    this.verifyPageHeaderTextIsDisplayed(courseDetailText);
  },
  clickUpdateCourseBttn() {
    cy.get('a').contains(updateCourseText)
      .should('be.visible').click();
    this.verifyPageHeaderTextIsDisplayed(updateCourseText);
  },
  clickDeleteCourseBttn() {
    cy.get('button').contains(deleteCourseText)
      .should('be.visible').click();
    cy.get(courseModuleContainer).should('be.visible');
  },
  createCourse(courseDetails: string) {
    cy.get(courseTitleInput).type(courseDetails[0]);
    cy.get(courseDescriptionInput).type(courseDetails[1]);
    cy.get(estimatedTimeInput).type(courseDetails[2]);
    cy.get('button').contains(createCourseText).click();
  },
  updateCourse(courseDetails: string) {
    cy.get(courseTitleInput).clear().type(courseDetails[0]);
    cy.get(courseDescriptionInput).clear().type(courseDetails[1]);
    cy.get(estimatedTimeInput).clear().type(courseDetails[2]);
    cy.get('button').contains(updateCourseText).click();
  },
  verifyCourseIsDisplayed(courseTitle: string) {
    cy.get(courseModuleContainer)
      .find('h3')
      .contains(courseTitle)
      .should('be.visible');
  },
  verifyCourseIsNotDisplayed(courseTitle: string) {
    cy.get(courseModuleContainer)
      .find('h3')
      .contains(courseTitle)
      .should('not.exist');
  },
};

export default Courses;
