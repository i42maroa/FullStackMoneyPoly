import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletController } from './wallet/wallet.controller';
import { WalletModule } from './wallet/wallet.module';

import { MongooseModule } from '@nestjs/mongoose';
import { WalletService } from './wallet/wallet.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/moneypoly'), WalletModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
