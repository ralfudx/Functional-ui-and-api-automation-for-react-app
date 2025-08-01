export interface CourseData {
  welcomeText: string;
  headerLogoText: string;
  courseTitles: string[];
  validationErrorTitle: string;
  validationErrorText: string;
  createCourseText: string;
  courseDetailText: string;
  courseDetails: string[];
  courseUpdateDetails: string[];
}

const courses: Record<DataENV, CourseData> = {
  local: {
    welcomeText: 'Welcome, Joe Smith',
    headerLogoText: 'Courses',
    courseTitles: [
      'Build a Basic Bookcase',
      'Learn How to Program',
      'Learn How to Test Programs',
      'Debugging 101',
    ],
    validationErrorTitle: 'Sign in unsuccessful',
    validationErrorText: 'Please check your email address and password and try again.',
    createCourseText: 'Create Course',
    courseDetailText: 'Course Detail',
    courseDetails: [
      'Learn How to Build a Dancing Robot',
      'This new course will equip you with the necessary skills to build a dancing robot',
      '8 hours',
    ],
    courseUpdateDetails: [
      'Learn How to Bake a Cake',
      'This new course will equip you with the necessary skills to bake a cake',
      '16 hours'
    ]
  }
};

export default courses;
