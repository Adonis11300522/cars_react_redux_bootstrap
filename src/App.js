
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Cars from './components/layouts/main_content/cars/Cars';
import Exterio from './components/layouts/main_content/exterio/Exterio';
import Summary from './components/layouts/main_content/sammary/Sammary';
import Layout from './components/Layout' ;
import { Switch , Route, Redirect } from 'react-router';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/cars" component={Cars}  />
          <Route path="/exterio" component={Exterio} />
          <Route path="/summary" component={Summary} />
          <Redirect from="/" to="/cars" />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
