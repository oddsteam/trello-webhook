import { startApplication } from "./app";

startApplication()

const generateChart = () => {
    const data = [{ sprint: "2023/01/23 - 2023/01/27", date: "2023/01/23", point: 100 },
    { sprint: "2023/01/23 - 2023/01/27", date: "2023/01/23", point: 50 },
    { sprint: "2023/01/23 - 2023/01/27", date: "2023/01/23", point: 70 },
    { sprint: "2023/01/23 - 2023/01/27", date: "2023/01/23", point: 30 },
    { sprint: "2023/01/23 - 2023/01/27", date: "2023/01/23", point: 0 },
    ]
    const points = data.map(el => el.point).join(",")
    const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].join(",")
    const url = `https://quickchart.io/chart/render/sm-a5acd22b-74e1-4ee8-b291-403011afc5c5?title=Sprint ${data[0].sprint}&labels=${labels}&data1=${points}`
    console.log(url)
}
generateChart()