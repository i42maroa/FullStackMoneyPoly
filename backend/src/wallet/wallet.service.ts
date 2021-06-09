
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Wallet, WalletDocument } from './schemas/wallet.schema';
import { WalletTransaction, WalletTransactionDocument} from './schemas/WalletTransaction.schema';

import {CreateTransactionWalletDto} from './dto/create-transactionWallet.dto'

@Injectable()
export class WalletService {
    constructor(@InjectModel(WalletTransaction.name) private transactionModel: Model<WalletTransactionDocument>) {}

    async amountWallet(){
        const transactions = await this.transactionModel.find();
        let amount = 0;
        for(let transaction of transactions){
            (transaction.type)? amount+=transaction.amount:amount-=transaction.amount;
        }
        return amount;
    }

    async getListTransactions(): Promise<WalletTransactionDocument[]>{
        return await this.transactionModel.find();
    }

    async getTransaction(id:string): Promise<WalletTransactionDocument>{
        return await this.transactionModel.findById(id);
    }

    async getListTransactionsPos(): Promise<WalletTransactionDocument[]>{
        return await this.transactionModel.find({"type":false});
    }

    async getListTransactionsNeg(): Promise<WalletTransactionDocument[]>{
        return await this.transactionModel.find({"type":true});
    }

    async create(createTransactionWalletDto:CreateTransactionWalletDto): Promise<WalletTransactionDocument>{
        return await this.transactionModel.create(createTransactionWalletDto);
    }

    async updateTransaction(id:string, createTransactionWalletDto:CreateTransactionWalletDto) : Promise<WalletTransactionDocument> {

        return await this.transactionModel.findByIdAndUpdate(id,createTransactionWalletDto); 
    }

    async deleteTransaction(id:string) : Promise<WalletTransactionDocument> {
        return await this.transactionModel.findByIdAndDelete(id);      
    }
}
