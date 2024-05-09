export interface IUserData {
    image: string;
    userName: string;
    mobileNo: string;
    friend: IFriends;
}

export interface IFriends {
    name: string;
    value: string;
    image: string;
    mobileNo: string;
}