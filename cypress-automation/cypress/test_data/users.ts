type Users = 'userWithAccess' | 'userWithoutAccess';

export interface UserData {
  email: string;
  password: string;
}

const users: Record<DataENV, Record<Users, UserData>> = {
  local: {
    userWithAccess: {
      email: 'joe@smith.com',
      password: 'joepassword',
    },
    userWithoutAccess: {
      email: 'oausocials2007@yahoo.com',
      password: 'remwaste001',
    },
  }
};

export default users;
