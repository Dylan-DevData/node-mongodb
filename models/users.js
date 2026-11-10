import { model, Schema } from "mongoose";

export const UserSchema = new Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true },
    telephone: { type: String, required: true, unique: true },
    uid: { type: String, required: true, unique: true }
}, { timestamps: true });

export const UserCollection = model("Users", UserSchema);