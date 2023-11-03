import { Navbar } from './components';
import './App.css';
import { Hero, Services, Destinations, Bookings, Testimonials } from './containers';


function App() {

  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Services />
     <Destinations />
     <Bookings />
     <Testimonials/>
    </div>
  );
}  

export default App;
