import { getBurndownDataThisSprint } from "./burndown"
import { constructChartData, generateChart } from "./chart"
import { notiToDiscord } from "./discord"

export const startCronjob = () => {
    cronjobShowBurndownChart()
}

const cronjobShowBurndownChart = async () => {
    const burndownDataThisSprint = await getBurndownDataThisSprint()
    if (!burndownDataThisSprint.length) {
        return
    }
    const chartData = constructChartData(burndownDataThisSprint)
    const chartImageUrl = generateChart(chartData)
    notiToDiscord(chartImageUrl)
}
