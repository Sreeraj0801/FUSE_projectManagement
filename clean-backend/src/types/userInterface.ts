export interface UserInterface {
  _id: string;
  name: string;
  mobile?: string;
  email: string;
  password: string;
}

export interface newUserInterface {
  name: string;
  email: string;
  password?: string;
  mobile?: string;
}
