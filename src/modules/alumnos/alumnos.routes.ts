import { Router } from 'express'
import * as Controller from './alumnos.controller'
import { storeValidators, updateValidators } from './alumnos.validator'

const router = Router()

router.get('/', Controller.index)
//
router.get('/:id', Controller.show)
//
router.post('/', storeValidators, Controller.store)
//
router.put('/:id', updateValidators, Controller.update)
//
router.delete('/:id', Controller.destroy)

export default router
