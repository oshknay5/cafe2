import Dishes from './Component/DishesComponent/Dishes';
import AllCategories from './Component/FilterComponent/AllCategories';
import Cart from './Component/Cart/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
       <div className="block">
      <AllCategories/>
      <Cart/>
      </div>
 
      <div className="block">
      <Dishes/>
      </div>
   </div>
      );
}

export default App;