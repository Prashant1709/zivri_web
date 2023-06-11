import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import PoloCustomizer from './pages/PoloCustomizer';
import FullsleeveCustomizer from './pages/FullsleeveCustomizer';
import ExploreZivri from './pages/ExploreZivri';


function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
      <PoloCustomizer/>
      <FullsleeveCustomizer/>
      <ExploreZivri/>
      
    

    </main>
  )
}

export default App
