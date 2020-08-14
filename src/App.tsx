import React, { Suspense, lazy } from 'react';
import './tailwind.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch 
} from "react-router-dom";
import Layout from './components/Layout';
import Loader from './components/Loader';

const Dashboard = lazy(() => import('./pages/dashboard'));
const Movies = lazy(() => import('./pages/movies'));
const Shows = lazy(() => import('./pages/shows'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loader message="Loading" />}>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/movies' component={Movies} />
            <Route path='/shows' component={Shows} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
    
  );
}

export default App;
