import { Schema } from "mongoose";


export const SpeciesSchema = new Schema({
    name: { type: String, maxLength: 100 }
}, { timestamps: true, toJSON: { virtuals: true } })