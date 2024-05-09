export interface IExpenseData {
    billName: string;
    typeOfBill: string;
    amount: number;
    paidBy: string;
    chooseCb: string[];
    createdDate: string;
    amountStatus: boolean;
    billStatus: string;
    friendBilStatus: { [key: string]: boolean };
}

export interface IPaymentModel {
    memberName: string;
    isShowPopUp: boolean;
    handleOnClose: () => void;
    handleOnPaid: () => void;
}