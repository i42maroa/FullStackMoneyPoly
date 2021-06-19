export class CreateTransactionWalletDto{
    amount: number;
    receiver:string;
    description:string;
    type: boolean;
    paid:boolean;
    createdAt: Date; 
}