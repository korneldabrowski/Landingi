import './index.css';
import { Header } from '@UI/layout/header/Header';
import { CartView } from 'domain/cartManager';
import { CartProvider } from 'infrastructure/context/CartContext';
import { PriceChart } from 'domain/graphs/ChartView';
import WelcomeModal from './WelcomeModal';
function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <WelcomeModal />
        <h2 className="text-6xl text-center mt-12 mb-6">
          Welcome to the Dashboard.
        </h2>
        <div className="flex  flex-col-reverse max-w-screen-2xl mx-auto">
          <div className="">
            <CartView />
          </div>
          <div className="mx-auto ">
            <PriceChart />
          </div>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
