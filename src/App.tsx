import React, { Suspense, lazy } from 'react';
import './tailwind.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch 
} from "react-router-dom";
import Layout from './components/Layout';

const Dashboard = lazy(() => import('./pages/dashboard'));
const Movies = lazy(() => import('./pages/movies'));
const Series = lazy(() => import('./pages/series'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div className="text-white">Loading...</div>}>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
    
  );
}

export default App;
