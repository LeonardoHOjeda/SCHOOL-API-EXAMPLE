import { faker } from '@faker-js/faker'
import { Student } from '@prisma/client'
import { prisma } from '../../prisma/index'

/**
 * Function to generate a random alumno
 * @returns {Object} Alumno
 */
const generateRandomAlumno = (): Omit<Student, 'id' | 'createdAt' | 'updatedAt'> => {
  return {
    name: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email().toLowerCase()
  }
}

// Generate an alumno array
export const generateAlumnos = (quantity: number): Omit<Student, 'id' | 'createdAt' | 'updatedAt'>[] => {
  const alumnos: Omit<Student, 'id' | 'createdAt' | 'updatedAt'>[] = []

  for (let i = 0; i < quantity; i++) {
    alumnos.push(generateRandomAlumno())
  }

  return alumnos
}

export const alumnos: Omit<Student, 'id' | 'createdAt' | 'updatedAt'>[] = generateAlumnos(10)

export async function seedAlumnos(): Promise<void> {
  await prisma.student.createMany({
    data: alumnos
  })
}