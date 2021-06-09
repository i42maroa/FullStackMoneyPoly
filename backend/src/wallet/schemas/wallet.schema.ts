import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WalletDocument = Wallet & Document;

@Schema()
export class Wallet {
  @Prop({required: true})
  amount: number;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);