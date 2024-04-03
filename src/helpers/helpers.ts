import { prisma } from '@/prisma/index'

export async function executeSeeder (seederName: string, seederFunction: Function) {
  const seederAlreadyExecuted = await prisma.seed.findFirst({where: {id: seederName}})

  if (seederAlreadyExecuted == null) {
    await seederFunction()

    await prisma.seed.create({data: {id: seederName}})
    console.log(`Seeder ${seederName} executed and registered`);
  } else {
    console.log(`Seeder ${seederName} already executed, skipping...`);
  }
}