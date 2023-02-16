import { dbContext } from "../db/DbContext.js"

class GalaxiesService {
    async getGalaxies() {
        const galaxies = await dbContext.Galaxies.find().populate('planetCount')
        return galaxies
    }

    async createGalaxy(galaxyData) {
        const galaxy = await dbContext.Galaxies.create(galaxyData)
        return galaxy
    }
}

export const galaxiesService = new GalaxiesService()