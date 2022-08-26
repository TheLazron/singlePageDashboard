import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
const { faker } = require('@faker-js/faker');

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const barOptions = {
  indexAxis: 'y',
  scales:{
    x:{
        grid:{
            display: false,
            drawBorder: false
        },
        ticks:{
            display: false
        }
    },
    y:{
        grid:{
            display: false,
            drawBorder: false
        }
    }
  },
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      display: true,
      align: 'start',

      labels:{
       
        usePointStyle: true,
        pointStyle: 'rectRounded',
        pointStyleWidth: 10,
      }
    },
    title: {
      display: false,
      text: 'Chart.js Horizontal Bar Chart',
    },
     },
};

const labels = ['Jan-Feb', 'March-April', 'May-Jun', 'Jul-Aug', 'Sep-1Oct', 'Nov-Dec'];

export const barData = {
  labels,
  datasets: [
    {
      label: 'Magazine',
      data: labels.map(() => faker.datatype.float({ min: 0.0, max: 100.0 })),
      backgroundColor: 'blue',
      borderWidth: 0,
      borderSkipped: false,

      barPercentage: 0.3
    },

  ],
};