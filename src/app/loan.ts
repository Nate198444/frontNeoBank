export interface Loan {
    Id?: number;
    Card_Id: number;
    User_Id: number;
    Amount: number;
    InterestRate: number;
    Mensuality: number;
    StartDate: Date;
    EndDate: Date;
    IsDeleted?: boolean;
  }
