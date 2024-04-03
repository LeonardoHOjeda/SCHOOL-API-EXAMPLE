import { executeSeeder } from '@src/helpers/helpers'
import { seedAlumnos } from './seeds/alumnos.seeder';

async function main () {
  await executeSeeder('alumnosSeeder', seedAlumnos)
}

main()