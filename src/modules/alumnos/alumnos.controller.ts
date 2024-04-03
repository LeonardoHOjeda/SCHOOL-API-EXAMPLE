import { NextFunction, Request, Response } from 'express'
import { AlumnosService, alumnosService } from './alumnos.service'

export async function index(_req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const alumnos = alumnosService.findAll()
  
    res.json(alumnos)
  } catch (error) {
    next(error)
  }
}

/**
 * Return one instance of entity
 * @param req
 * @param res
 * @param next
 */
export async function show(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { id } = req.params
  const finder = new AlumnosService()
}

/**
 * Save an entity
 * @param req
 * @param res
 * @param next
 */
export async function store(req: Request, res: Response, next: NextFunction): Promise<void> {
  const saver = new AlumnosService()
}

/**
 * Update an entity
 * @param req
 * @param res
 * @param next
 */
export async function update(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { id } = req.params
  const updater = new AlumnosService()
}

/**
 * Destroy one instance of an entity
 * @param req
 * @param res
 * @param next
 */
export async function destroy(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { id } = req.params
  const destroyer = new AlumnosService()
}
