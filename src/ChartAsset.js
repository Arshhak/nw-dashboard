import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import React from 'react';
import { Table } from './Table';



// Registering necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const dataAsset = [
  {
    "id": "7",
    "debit": 1000,
    "credit": 0,
    "month": "Dec"
  }

];

function ChartAsset() {



  const chartData = {
    labels: dataAsset?.map(item => item.month),
    datasets: [
      {
        label: 'Debit',
        data: dataAsset?.map(item => item.debit),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Credit',
        data: dataAsset?.map(item => item.credit),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Debit and Credit per Month'
      }
    }
  };

  const DataTable = () => {
    return (
      <Table data={dataAsset} caption="Asset " columns={["month", "debit", "credit"]}></Table>
    );
  };

  return (
    <div >
      <div>
        <h2>Asset</h2>
        <Bar data={chartData} options={options} />
        <DataTable  data={dataAsset}/>
      </div>
    </div>
  );
}

export default ChartAsset;