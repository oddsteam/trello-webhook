import { PrismaClient } from '@prisma/client'
import { startApplication } from './app';
import { constructChartData, generateChart } from "./chart";
export const prisma = new PrismaClient()


startApplication()


const getBurndownDataThisSprint = async () => {
    const result = await prisma.burndown.findMany({
        where: {
            sprintStart: {
                lte: new Date(new Date().setHours(0, 0, 0, 0))
            },
            sprintEnd: {
                gt: new Date(new Date().setHours(0, 0, 0, 0))
            }
        }
    })
    return result
}
const notiToDiscord = async () => {
    const burndownDataThisSprint = await getBurndownDataThisSprint()
    if (!burndownDataThisSprint.length) {
        return
    }
    const result = constructChartData(burndownDataThisSprint)
    generateChart(result)
}
notiToDiscord()

