import { startApplication } from "./app";

startApplication()

const generateChart = () => {
    const data = [{ team: "BlackCat", sprint: "2023/01/23 - 2023/01/27", date: "2023/01/23", point: 100 },
    { team: "BlackCat", sprint: "2023/01/23 - 2023/01/27", date: "2023/01/23", point: 50 },
    { team: "BlackCat", sprint: "2023/01/23 - 2023/01/27", date: "2023/01/23", point: 70 },
    { team: "BlackCat", sprint: "2023/01/23 - 2023/01/27", date: "2023/01/23", point: 30 },
    { team: "BlackCat", sprint: "2023/01/23 - 2023/01/27", date: "2023/01/23", point: 0 },
    ]
    const points = data.map(el => el.point).join(",")
    const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].join(",")
    const title = `${data[0].team} Sprint ${data[0].date}`
    const url = `https://quickchart.io/chart/render/sm-a5acd22b-74e1-4ee8-b291-403011afc5c5?title=${title}&labels=${labels}&data1=${points}`
    console.log(url)
}
generateChart()