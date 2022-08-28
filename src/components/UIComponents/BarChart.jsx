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
import ChartDataLabels from 'chartjs-plugin-datalabels';
const { faker } = require('@faker-js/faker');


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export const barOptions = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
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
    datalabels: {
      formatter: (val, context) => (`${val}%`),
      anchor: 'end',
      align: 'end',
      labels: {
        value: {
          color: 'blue'
        }
      }

    }
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
      barPercentage: 0.1,
      datalabels: {
        color: '#FFCE56'
      }
    },

  ],
};