import type users from '../test_data/users';
import type courses from '../test_data/courses';


declare global {
  type ENV = 'local' | 'dev';
  type DataENV = Exclude<ENV, 'dev'>;

  interface User {
    email: string;
    password: string;
  }

  type EnvVariables = {
    TEST_ENV: ENV;
    DATA_ENV: DataENV;
    users: (typeof users)[DataENV];
    courses: (typeof courses)[DataENV];
  };

  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Cypress {
      env<T extends keyof EnvVariables>(envVar: T): EnvVariables[T];
    }
  }
}
