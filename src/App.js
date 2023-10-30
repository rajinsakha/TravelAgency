import { Navbar } from './components';
import './App.css';
import Hero from './containers/Hero/Hero';
import Services from './containers/Services/Services';
import Destinations from './containers/Destinations/Destinations';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Services />
     <Destinations />
    </div>
  );
}

export default App;
