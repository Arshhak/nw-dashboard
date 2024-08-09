
import './App.css';
import ChartSales from './ChartSales';
import ChartAsset from './ChartAsset';
import ChartPurchase from './ChartPurchase';
import ChartBank from './ChartBank';

function App() {
  return (
    <div>


      <div className='inline-grid'>
        <ChartSales />
        <ChartAsset />
      </div>
      <div className='inline-grid'>
        <ChartPurchase />
        <ChartBank />
        

        </div>
      </div>
      );
}

      export default App;
