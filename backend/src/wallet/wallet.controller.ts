import { Controller, Get, NotFoundException, Post, HttpStatus, Res, Body, Delete, Query, Put } from '@nestjs/common';


import {CreateTransactionWalletDto} from './dto/create-transactionWallet.dto'
import { WalletService} from "./wallet.service";

@Controller('wallet')
export class WalletController {

    constructor(private walletService: WalletService){}

    @Get()
    async amountWallet(@Res() res){
        const amount = await this.walletService.amountWallet();
        if(!amount) throw new NotFoundException('There are issues to calculate transactions');
        return res.status(HttpStatus.OK).json({
            amount
        });
    }

    @Get('/transactions')
    async getTransactions(@Res() res){
        const transactions = await this.walletService.getListTransactions();
        if(!transactions) throw new NotFoundException('There are issues to show transactions');
        return res.status(HttpStatus.OK).json({
            transactions
        });
    }

    @Get('/transaction')
    async getTransaction(@Res() res, @Query('id') id){
        const transaction = await this.walletService.getTransaction(id);
        if(!transaction) throw new NotFoundException('The transaction does not exit');
        return res.status(HttpStatus.OK).json({
            transaction
        });
    }

    @Get('/transactions-pos')
    async getTransactionsPos(@Res() res){
        const transactions = await this.walletService.getListTransactionsPos();
        if(!transactions) throw new NotFoundException('There are issues to show transactions positives');
        return res.status(HttpStatus.OK).json({
            transactions
        });
    }

    @Get('/transactions-neg')
    async getTransactionsNeg(@Res() res){
        const transactions = await this.walletService.getListTransactionsNeg();
        if(!transactions) throw new NotFoundException('There are issues to show transactions negatives');
        return res.status(HttpStatus.OK).json({
            transactions
        });
    }

    @Post()
    async createTransaction(@Res() res, @Body() createTransactionWalletDto: CreateTransactionWalletDto){
        const transaction = await this.walletService.create(createTransactionWalletDto);
        return res.status(HttpStatus.OK).json({
            message: 'Transaction Successfully Created',
            transaction
        });
    }

    @Delete('transaction/delete')
    async deleteTransaction(@Res() res, @Query('id') transactionID){
        const transDel = await this.walletService.deleteTransaction(transactionID);
        if(!transDel) throw new NotFoundException('transaction does not exist');
        return res.status(HttpStatus.OK).json({
            message: "Transaction deleted Succesfull",
            transDel
        });
    }

    @Put('/transaction/update')
    async updateNote(@Res() res,  @Query('id') transactionID, @Body() createTransactionWalletDto: CreateTransactionWalletDto){
       const upTransa= await this.walletService.updateTransaction(transactionID, createTransactionWalletDto);
       if(!upTransa) throw new NotFoundException('Transaction does not update');
       return res.status(HttpStatus.OK).json({
        message: "Transaction Updated Succesfull",
        upTransa
    });
}

}
