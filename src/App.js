import { Navbar } from './components';
import './App.css';
import { Hero, Services, Destinations, Bookings } from './containers';


function App() {

  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Services />
     <Destinations />
     <Bookings />
    </div>
  );
}  

export default App;
