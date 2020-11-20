import React,{useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2'
import '../component.css'
import axios from 'axios'
function HomeTav() {
    /* const [data1, setdata1] = useState([]) */
    const [chartData, setChartData] = useState([])

    const chart = () => {
        let mon = []
        let stat = []
        axios.get('https://demo5636362.mockable.io/stats')
        .then(res => {
            console.log(res)
            for(const dataObj of res.data.data){
                mon.push(dataObj.month)
                stat.push(parseInt(dataObj.stat))
            }
            setChartData({
        
                labels: mon,
                datasets: [{
                    label: 'Stats for 2020(m)',
                    data:stat,
                    fill:false,
                    borderColor: "#FF9F1C",
                    pointBorderColor: "#FF9F1C",
                    pointHoverBackgroundColor: "#FF9F1C",
                    pointHoverBorderColor: "#FF9F1C",
                }]
            })
        })
        .catch(err => {
            console.log(err)
        })
       /*  console.log(mon,stat) */
    }

    

    useEffect(() => {
        chart()
    }, [])

    return (
        <div style={{width: '720px', height: '600px',marginLeft:'auto',marginRight: 'auto',marginTop:'30px'}}>
            <Line data={chartData}  />
        </div>
    )
}

export default HomeTav
