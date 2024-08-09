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
  

  const dataPurchase = [
    {
      "id": "5",
      "debit": 0,
      "credit": 6500,
      "month": "Sep"
    },
    {
      "id": "6",
      "debit": 5000,
      "credit": 25000,
      "month": "Dec"
    },
    
    {
      "id": "8",
      "credit": 0,
      "debit": 1200,
      "month": "Nov"
    }
  ];

  function ChartPurchase() {
  
  
    const chartData = {
      labels: dataPurchase?.map(item => item.month),
      datasets: [
        {
          label: 'Debit',
          data: dataPurchase?.map(item => item.debit),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        },
        {
          label: 'Credit',
          data: dataPurchase?.map(item => item.credit),
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
        <Table data={dataPurchase} caption="Purchase " columns={["month", "debit", "credit"]}></Table>
      );
    };
  
      return (
          <div>
            <div>
              <h1>Purchase</h1>
              <Bar data={chartData} options={options} />
              <DataTable  data={dataPurchase}/>

            </div>
          </div>
      );
  }
   
  export default ChartPurchase;