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

const data = [
  {
    "id": "1",
    "debit": 25000,
    "credit": 0,
    "month": "Aug"
  },
  {
    "id": "2",
    "debit": 65000,
    "credit": 0,
    "month": "Sep"
  },
  
  {
    "id": "3",
    "credit": 52000,
    "debit": 0,
    "month": "Sep"
  }
];

function ChartSales() {

 
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
  const DataTable = () => {
    return (
      <Table data={data} caption="Sales " columns={["month", "debit", "credit"]}></Table>
    );
  };

    return (
        <div>
          <div>
            <h1>Sales</h1>
            <Bar data={chartData} options={options} />
            <DataTable  data={data}/>
          </div>
        </div>
    );
}
 
export default ChartSales;