import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class SpeciesService {
    async getSpecies() {
        const species = await dbContext.Species.find()
        return species
    }

    async createSpecies(speciesData) {
        const species = await dbContext.Species.create(speciesData)
        return species
    }
    async deleteSpecies(speciesId) {
        const species = await dbContext.Species.findById(speciesId)
        if (!species) {
            throw new BadRequest('This is a bad species ID')
        }
        await species.remove()
        return species
    }
}

export const speciesService = new SpeciesService