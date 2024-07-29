
import './App.css';
import ChartSales from './ChartSales';
import ChartAsset from './ChartAsset';
import ChartPurchase from './ChartPurchase';
import ChartBank from './ChartBank';

function App() {
  return (
    <div>
      
      <div className='inline-grid'>
      <table className='table' >
        <caption>
       Sales
        </caption>
        <tr className='th-bg'>
          <th>
            Month
          </th>
          <th>
           Debit
          </th>
           <th>
          Credit
           </th>
        
        </tr>
        <tr>
        <td>Aug</td>
        <td>25000</td>
        <td>0</td>
       
        </tr>
        <tr>
        <td>Oct</td>
        <td>65000</td>
        <td>0</td>
        
        </tr>
        <tr>
        <td>Sep</td>
        <td>52000</td>
        <td>0</td>
        </tr>
        </table>

        <table className='table'>
        <caption>
       Purchase
        </caption>
        <tr className='th-bg'>
          <th>
            Month
          </th>
          <th>
           Debit
          </th>
           <th>
          Credit
           </th>
           </tr>
           
         <tr>
        <td>Sep</td>
        <td>0</td>
        <td>25000</td>
       
        </tr>
        <tr>
        <td>Dec</td>
        <td>5000</td>
        <td>25000</td>
        
        </tr>
        <tr>
        <td>Nov</td>
        <td>0</td>
        <td>1200</td>
        </tr>

        </table>
        </div>
        
        <div className='inline-grid'>
        <table className='table'>
        <caption>
       Bank
        </caption>
        <tr className='th-bg'>
          <th>
            Month
          </th>
          <th>
           Debit
          </th>
           <th>
          Credit
           </th>
           </tr>
           
        <tr>
        <td>Aug</td>
        <td>0</td>
        <td>25000</td>
        </tr>
           </table>

           <table className='table'>
        <caption>
       Asset
        </caption>
        <tr className='th-bg'>
          <th>
            Month
          </th>
          <th>
           Debit
          </th>
           <th>
          Credit
           </th>
           </tr>

           <tr>
        <td>Dec</td>
        <td>1000</td>
        <td>0</td>
        </tr>
           </table>
           </div>
           <div className='inline-grid'>
           <ChartSales/>
           <ChartAsset/>
           </div>
           <div  className='inline-grid'>
           <ChartPurchase/>
           <ChartBank/>
           </div>
    </div>
  );
}

export default App;
