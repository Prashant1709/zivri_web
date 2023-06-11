import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Customizer from './pages/Customizer';
import PoloCustomizer from './pages/PoloCustomizer';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/customizer" component={Customizer} />
        <Route path="/polo-customizer" component={PoloCustomizer} />
      </Switch>
    </Router>
  );
};

export default App;
