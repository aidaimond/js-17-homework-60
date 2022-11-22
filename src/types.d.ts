export interface MessageMutation {
  _id?: string;
  author: string;
  message: string;
  datetime: string;
}

export interface Message {
  author: string;
  message: string;
}