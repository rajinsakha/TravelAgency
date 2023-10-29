import { Navbar } from './components';
import './App.css';
import Hero from './containers/Hero/Hero';
import Services from './containers/Services/Services';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Services />
    </div>
  );
}

export default App;
