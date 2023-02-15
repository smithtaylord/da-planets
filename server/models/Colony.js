import { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId

export const ColonySchema = new Schema({
    name: { type: String, required: true, maxLength: 100 },
    population: { type: Number, required: true, min: 1, max: 1000000000 },
    // Relationships
    planetId: { type: ObjectId, ref: 'Planet', required: true },
    speciesId: { type: ObjectId, ref: 'Species' }

}, { timestamps: true, toJSON: { virtuals: true } })

ColonySchema.virtual('planet', {
    ref: 'Planet',
    justOne: true,
    localField: 'planetId',
    foreignField: "_id"
})
ColonySchema.virtual('species', {
    ref: 'Species',
    justOne: true,
    localField: 'speciesId',
    foreignField: '_id'
})