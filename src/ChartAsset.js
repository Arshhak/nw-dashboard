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
  
  // Registering necessary components
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  function ChartAsset() {
  
    const data = [
      {
        "id": "7",
        "debit": 1000,
        "credit": 0,
        "month": "Dec"
      }
     
    ];
  
    const chartData = {
      labels: data.map(item => item.month),
      datasets: [
        {
          label: 'Debit',
          data: data.map(item => item.debit),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        },
        {
          label: 'Credit',
          data: data.map(item => item.credit),
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
  
      return (
          <div >
            <div>
              <h1>Asset</h1>
              <Bar data={chartData} options={options} />
            </div>
          </div>
      );
  }
   
  export default ChartAsset;