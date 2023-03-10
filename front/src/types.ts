export type Room = {
  no: string;
  name: string;
};

export type Message = {
  roomNo: string;
  userName: string;
  userNo: string;
  msg: string;
  dateTime: string;
  type: string;
};

export type User = {
  isLogin: boolean;
  no: number;
  name: string;
  phone: string;
  username: string;
  roles: string;
};
