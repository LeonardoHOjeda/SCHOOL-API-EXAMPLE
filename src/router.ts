import { Router } from 'express'
import alumnosRouter from '@src/modules/alumnos/alumnos.routes'
const router = Router()

//importing all routes here
router.use('/api/alumnos', alumnosRouter)

export default router
