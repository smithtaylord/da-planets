import { dbContext } from "../db/DbContext.js"

class ColoniesService {
    async getColonies() {
        const colonies = await dbContext.Colonies.find().populate('planet', 'name').populate('species', 'name')
        return colonies
    }
    async createColony(colonyData) {
        const colony = await dbContext.Colonies.create(colonyData)
        return colony
    }

}

export const coloniesService = new ColoniesService