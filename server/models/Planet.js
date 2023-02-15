import { Schema } from "mongoose";

const ObjextId = Schema.Types.ObjectId

export const PlanetSchema = new Schema({
    name: { type: String, required: true, maxLength: 100 },
    atmosphere: { type: Boolean, required: true, default: true },
    biome: { type: String, maxLength: 100 },
    // Relationships
    galaxyId: { type: ObjextId, ref: 'Galaxy', required: true }

}, { timestamps: true, toJSON: { virtuals: true } })

PlanetSchema.virtual('galaxy', {
    ref: 'Galaxy',
    justOne: true,
    localField: 'galaxyId',
    foreignField: '_id'
})