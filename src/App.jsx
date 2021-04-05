import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading/Loading';

// routes
const Home = lazy(() => import('./routes/Home'));
const Result = lazy(() => import('./routes/Result'));
const PageNotFound = lazy(() => import('./routes/PageNotFound'));

function App() {
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/result" component={Result} />
                    <Route component={PageNotFound} />
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
