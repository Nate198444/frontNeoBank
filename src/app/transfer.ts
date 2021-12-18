export interface Transfer {
  Id?: number;
  Card_Id: number;
  User_Id: number;
  Amount: number;
  Date?: Date;
  CardNumber: string;
  Note: string;
  IsDeleted?: boolean;
}
