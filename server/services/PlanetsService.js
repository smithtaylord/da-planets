import { dbContext } from "../db/DbContext.js"

class PlanetsService {
    async getPlanets() {
        const planets = await dbContext.Planets.find().populate('galaxy', 'name')
        return planets
    }
    async createPlanet(planetData) {
        const planet = await dbContext.Planets.create(planetData)
        return planet
    }

}

export const planetsService = new PlanetsService()