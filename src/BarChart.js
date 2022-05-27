import React from 'react'
import { Bar } from 'react-chartjs-2'

export const BarChart = ({data}) => {
  return (
    <Bar data={data}
       height={3}
       width={10}
       options={{
         plugins: {
          legend:
          {
              display: false
          },
        },
          scales: {
            y:{
               title: {
                color: 'black',
                display: true,
                text: 'Venats'
              }
            },
            x:{
              title: {
               color: 'black',
               display: true,
               text: 'Meses'
             }
           }
          }
  
       }}
       />
  )
}
