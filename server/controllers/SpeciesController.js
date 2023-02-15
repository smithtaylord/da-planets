import { speciesService } from "../services/SpeciesService.js";
import BaseController from "../utils/BaseController.js";

export class SpeciesController extends BaseController {
    constructor() {
        super('api/species')
        this.router
            .get('', this.getSpecies)
            .post('', this.createSpecies)
            .delete('/:speciesId', this.deleteSpecies)
    }
    async getSpecies(req, res, next) {
        try {
            let species = await speciesService.getSpecies()
            return res.send(species)
        } catch (error) {
            next(error)
        }
    }
    async createSpecies(req, res, next) {
        try {
            let speciesData = req.body
            let species = await speciesService.createSpecies(speciesData)
            return res.send(species)
        } catch (error) {
            next(error)
        }
    }
    async deleteSpecies(req, res, next) {
        try {
            const speciesId = req.params.speciesId
            const speciesData = await speciesService.deleteSpecies(speciesId)
            return res.send(speciesData)
        } catch (error) {
            next(error)
        }
    }
}