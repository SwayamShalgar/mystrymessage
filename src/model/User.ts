import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document{
    content: String;
    createdAt: Date
}

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required:true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export interface User extends Document{
    username: String;
    email: string;
    password: string;
    verifyCode: string;
    varifyCodeExpiry: Date;
    isAcceptingMessage: boolean;
    message: Message[]
}