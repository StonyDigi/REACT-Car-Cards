
import './App.css';


import Car from './components/Car';
import BMW from './assets/bmw.jpg';
import AUDI from './assets/audi.jpg';
import MERCEDES from './assets/mercedes.jpg';

function App() {
  return (
    <div className="App">

     <Car marka="Bmw" tipus="316" ar="1500000" uzemanyag="Benzin" henger="1600" kep={BMW}/>
     <Car marka="Audi" tipus="A6" ar="2500000" uzemanyag="Benzin" henger="4200" kep={AUDI}/>
     <Car marka="Mercedes" tipus="AMG" ar="5500000" uzemanyag="Benzin" henger="1900" kep={MERCEDES}/>
     
      
    </div>
  );
}

export default App;