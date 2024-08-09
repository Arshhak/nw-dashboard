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
  
  const dataBank = [
    {
      "id": "4",
      "debit": 0,
      "credit": 25000,
      "month": "Aug"
    }
  ];
  function ChartBank() {
  
    
  
    const chartData = {
      labels: dataBank?.map(item => item.month),
      datasets: [
        {
          label: 'Debit',
          data: dataBank?.map(item => item.debit),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        },
        {
          label: 'Credit',
          data: dataBank?.map(item => item.credit),
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
        <Table data={dataBank} caption="Bank " columns={["month", "debit", "credit"]}></Table>
      );
    };
  
      return (
          <div className="App">
            <div>
              <h1>Bank</h1>
              <Bar data={chartData} options={options} />
              <DataTable data={dataBank}/>
            </div>
          </div>
      );
  }
   
  export default ChartBank;