export interface ICardData {
  image: string;
  description?: string;
  [link: string]: string;
}

export interface IMessage {
  name: string;
  telegram: string;
  phone: string;
  message: string;
}

export interface IForm {
  name: string;
  email: string;
  message: string;
}
