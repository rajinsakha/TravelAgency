import { Navbar, Footer } from './components';
import './App.css';
import { Hero, Services, Destinations, Bookings, Testimonials, Logos, Newsletter } from './containers';


function App() {

  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Services />
     <Destinations />
     <Bookings />
     <Testimonials/>
     <Logos />
     <Newsletter />
     <Footer /> 
    </div>
  );
}  

export default App;
