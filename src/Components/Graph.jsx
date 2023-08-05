import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { useTheme } from '../Context/ThemeContext';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend)

const Graph = ({graphData}) => {
    let {theme} = useTheme();
  return (
    <>
        <Line
        options={{
            responsive: true,
          }}
            data={
                {
                    labels :  graphData.map(i=>i[0]), //x-axis
                    datasets : [                     // y-axis
                                {
                                    data : graphData.map(i=>i[1]),
                                    label : 'WPM',
                                    borderColor : theme.textColor
                                },
                               
                            ]
                }
            }
        />
    </>
  )
}

export default Graph
