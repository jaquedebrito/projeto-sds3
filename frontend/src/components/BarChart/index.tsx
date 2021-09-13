import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

type SeriesData = {
    name: string;
    data: number[];
}

type ChartData = {
    labels: {
        categories: string[];
    }
    series: SeriesData[];
}

const BarChart = () => {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]

    });
<<<<<<< HEAD

=======
>>>>>>> d083155cd1fa8488ad8927d16f9e223e60b277e7
    useEffect(() => {
        axios.get(`${BASE_URL}/sales/success-by-seller`)
            .then(response => {
                const data = response.data as SaleSuccess[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => round(100.0 * x.deals / x.visited, 1));
<<<<<<< HEAD
=======

>>>>>>> d083155cd1fa8488ad8927d16f9e223e60b277e7
                setChartData({
                    labels: {
                        categories: myLabels
                    },
                    series: [
                        {
                            name: "% Success",
                            data: mySeries
                        }
                    ]
                });
            });
    }, []);

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
<<<<<<< HEAD

    return (
        <Chart

=======
    
    return (
        <Chart

>>>>>>> d083155cd1fa8488ad8927d16f9e223e60b277e7
            options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type="bar"
            height="240"

        />
    );
}

export default BarChart;