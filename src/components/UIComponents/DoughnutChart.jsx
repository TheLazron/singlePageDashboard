import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const doughnutData = {
  labels: ['Inactive', 'Patreon', 'Active'],
  datasets: [
    {
      label: '# of Votes',
      data: [55, 35,10],
      backgroundColor: [
          '#2EDE9F',
          '#DFDFDF',
          '#1675F2',
      ],
    //   borderColor: [
    //     'rgba(255, 99, 132, 1)',
    //     'rgba(54, 162, 235, 1)',
    //     'rgba(255, 206, 86, 1)',
    //     'rgba(75, 192, 192, 1)',
    //     'rgba(153, 102, 255, 1)',
    //     'rgba(255, 159, 64, 1)',
    //   ],
      borderWidth: 0,
    },
  ],
};

export const doughnutOptions={
responsive: true,
// borderRadius:10,
borderJoinStyle: 'bevel',
hoverOffset: 2,
plugins:{
legend: {

title:{
    padding: 20
},

position: 'bottom',
display: true,
align: 'center',

labels:{

usePointStyle: true,
pointStyle: 'rectRounded',
pointStyleWidth: 10,
}
}

}}