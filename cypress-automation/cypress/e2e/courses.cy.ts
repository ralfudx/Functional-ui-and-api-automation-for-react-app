import CoursePage from '../pages/Courses';
import SignIn from '../pages/SignIn';

describe(
  'Verify Course Module Functionality',
  function () {
    beforeEach(function () {
      cy.viewport('macbook-15');
      SignIn.initiateUserSession(
        Cypress.env('users').userWithAccess
      );
      cy.visit('/');
    });

    it(
      'course page: create a new course',
      function () {
        CoursePage.clickAddCourse();
        CoursePage.createCourse(
          Cypress.env('courses').courseDetails
        );
        CoursePage.verifyCourseIsDisplayed(
          Cypress.env('courses').courseDetails[0]
        );
      }
    );

    it(
      'course page: update an existing course',
      function () {
        CoursePage.clickExistingCourse(
          Cypress.env('courses').courseDetails[0]
        );
        CoursePage.clickUpdateCourseBttn();
        CoursePage.updateCourse(
          Cypress.env('courses').courseUpdateDetails
        );
        CoursePage.verifyCourseIsDisplayed(
          Cypress.env('courses').courseUpdateDetails[0]
        );
      }
    );

    it(
      'course page: delete an existing course',
      function () {
        const course = Cypress.env('courses').courseUpdateDetails[0];
        CoursePage.clickExistingCourse(course);
        CoursePage.clickDeleteCourseBttn();
        CoursePage.verifyCourseIsNotDisplayed(course);
      }
    );

    it(
      'course page: user sign out',
      function () {
        SignIn.userSignOut();
      }
    );
  }
);
