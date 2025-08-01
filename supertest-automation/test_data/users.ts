const numb = Math.floor(Math.random() * 1000);

export interface CreateUser {
    firstName: string;
    lastName: string;
    emailAddress: string
    password: string;
};

export interface AuthUser {
    firstName?: string;
    lastName?: string;
    username: string;
    password: string;
    emailAddress?: string
};

export interface VerifyMessage {
    existingUser: string;
    unAuthUser: string;
    noCourseFound: string;
    notAuthorisedToUpdate: string;
    inSufficientData: string;
    notAuthorisedToDelete: string;
};

export interface Course {
    id?: number;
    title: string;
    description?: string;
    estimatedTime?: string;
    materialsNeeded?: string;
    userId: number;
};

export const newUser: CreateUser = {
    firstName: 'Raphael',
    lastName: 'Edwards',
    emailAddress: `oausocials${numb}@yahoo.com`,
    password: 'remwaste001',
};

export const existingUser: CreateUser = {
    firstName: 'Joe',
    lastName: 'Smith',
    emailAddress: 'joe@smith.com',
    password: 'password',
};

export const validUser: AuthUser = {
    username: 'joe@smith.com',
    password: 'joepassword',
};

export const inValidUser: AuthUser = {
    username: 'ralfudx@gmail.com',
    password: 'password',
};

export const message: VerifyMessage = {
    existingUser: 'The email address you entered already exists.',
    unAuthUser: 'Access Denied',
    noCourseFound: 'Sorry, we couldn\'t find the course you were looking for.',
    notAuthorisedToUpdate: 'You are not authorised to update this course.',
    inSufficientData: 'Please provide a course description.',
    notAuthorisedToDelete: 'You are not authorised to delete this course.',
};

export const newCourse: Course = {
    title: 'New Course',
    description: 'My course description',
    userId: 1,
};

export const existingCourse1: Course = {
    id: 1,
    title: 'Build a Basic Bookcase',
    estimatedTime: '12 hours',
    userId: 1,
};

export const existingCourse2: Course = {
    id: 2,
    title: 'Learn How to Program',
    description: 'In this course, you\'ll learn how to write code like a pro!',
    estimatedTime: '6 hours',
    userId: 2,
};

export const existingCourse3: Course = {
    id: 3,
    title: 'Learn How to Test Programs',
    description: 'In this course, you\'ll learn how to test programs.',
    userId: 2,
};

export const updatedCourse: Course = {
    id: 5,
    title: 'New Course Updated Again Hello',
    description: 'My course description. And again.',
    userId: 1,
};

export const incompleteCourse: Course = {
    title: '',
    description: '',
    userId: 1,
};

