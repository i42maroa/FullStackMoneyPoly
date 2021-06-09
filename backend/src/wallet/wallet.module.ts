import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { Wallet, WalletSchema } from './schemas/wallet.schema';
import { WalletTransaction, WalletTransactionSchema } from './schemas/WalletTransaction.schema';

@Module({
    imports: [MongooseModule.forFeature([
        { name: Wallet.name, schema: WalletSchema },
        { name: WalletTransaction.name, schema: WalletTransactionSchema }
    ])],
    controllers: [WalletController],
    providers: [WalletService]
})
export class WalletModule {

}
