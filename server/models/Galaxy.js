import { Schema } from "mongoose";

export const GalaxySchema = new Schema({
    name: { type: String, required: true },
    stars: { type: Number, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

GalaxySchema.virtual('planetCount', {
    localField: '_id',
    foreignField: 'galaxyId',
    ref: 'Planet',
    count: true
})