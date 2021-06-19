import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WalletTransactionDocument = WalletTransaction & Document;

@Schema()
export class WalletTransaction {
  @Prop({required: true})
  title: string;

  @Prop({required: true})
  amount: number;

  @Prop({required: true})
  description: string;

  @Prop({required: true})
  receiver: string;

  @Prop({required: true, default:true})
  type: boolean;

  @Prop({required: true, default:true})
  paid: boolean;

  @Prop({required: true, default: Date.now})
  createdAt: Date;

  
}

export const WalletTransactionSchema = SchemaFactory.createForClass(WalletTransaction);