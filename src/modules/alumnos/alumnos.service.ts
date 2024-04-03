import { Student } from '@prisma/client'
import { prisma } from '../../../prisma/index'

export class AlumnosService {
  async findOne(id: any): Promise<Object> {
    return {}
  }

  async findAll(): Promise<Student[]> {
    const students = await prisma.student.findMany()

    return students
  }

  async update(id: any, body: any): Promise<Object> {
    return {}
  }

  async store(body: any): Promise<Object> {
    return {}
  }

  async destroy(id: any): Promise<Object> {
    return {}
  }

  async delete(id: any): Promise<Object> {
    return {}
  }
}

export const alumnosService = new AlumnosService()