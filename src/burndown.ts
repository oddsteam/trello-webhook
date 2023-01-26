import { prisma } from "."

export const getBurndownDataThisSprint = async (team: string) => {
    const result = await prisma.burndown.findMany({
        where: {
            team,
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