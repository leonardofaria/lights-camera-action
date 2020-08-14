import React, { Suspense, lazy } from 'react';
import './tailwind.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch 
} from "react-router-dom";
import { APIContextProvider } from './api/context';
import Layout from './components/Layout';
import Loader from './components/Loader';

const Dashboard = lazy(() => import('./pages/dashboard'));
const Movies = lazy(() => import('./pages/movies'));
const Movie = lazy(() => import('./pages/movies/Movie'));
const Shows = lazy(() => import('./pages/shows/'));
const Show = lazy(() => import('./pages/shows/Show'));

function App() {
  return (
    <APIContextProvider>
      <Router>
        <Layout>
          <Suspense fallback={<Loader message="Loading" />}>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/movies' component={Movies} />
              <Route path='/movies/:id' component={Movie} />
              <Route exact path='/shows' component={Shows} />
              <Route path='/shows/:id' component={Show} />
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    </APIContextProvider>    
  );
}

export default App;
