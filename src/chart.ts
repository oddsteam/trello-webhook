import { Burndown } from "@prisma/client"
import { format } from 'date-fns'

interface ChartData {
    team: string,
    sprint: string,
    points: string,
}

export const constructChartData = (burndownData: Burndown[]): ChartData => {
    const points = burndownData.map(data => data.point).join(",")
    return {
        team: burndownData[0].team,
        sprint: `${format(burndownData[0].sprintStart, 'MM/dd/yyyy')} - ${format(burndownData[0].sprintEnd, 'MM/dd/yyyy')}`,
        points
    }

}
export const generateChart = (data: ChartData) => {
    const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].join(",")
    const points = data.points
    const title = `${data.team} Sprint ${data.sprint}`
    const url = `https://quickchart.io/chart/render/sm-cda6b60d-1c7b-4155-9917-82730f66e1db?title=${title}&labels=${labels}&data1=${points}`
    console.log(url)
    return url
}