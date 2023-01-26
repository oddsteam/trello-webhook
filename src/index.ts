import { PrismaClient } from '@prisma/client'
import { startExpress } from './app';
import { startCronjob } from './cronjob';
export const prisma = new PrismaClient()


startExpress()
startCronjob()



