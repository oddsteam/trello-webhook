import { getBurndownDataThisSprint } from "./burndown"
import { constructChartData, generateChart } from "./chart"
import { notiToDiscord } from "./discord"

export const startCronjob = () => {
    cronjobShowBurndownChartTeamBlackCat()
}

const cronjobShowBurndownChartTeamBlackCat = async () => {
    const burndownDataThisSprint = await getBurndownDataThisSprint("BlackCat")
    if (!burndownDataThisSprint.length) {
        return
    }
    const chartData = constructChartData(burndownDataThisSprint)
    const chartImageUrl = generateChart(chartData)
    notiToDiscord(chartImageUrl)
}
