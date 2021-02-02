import Home from './pages/home/Home'
import Bookmark from './pages/bookmark/Bookmark'
import NotFound from './pages/notFound/NotFound'
import Menu from './components/menu/Menu'
import Layout from "./hoc/Layout/Layout";
import {Route, Switch} from 'react-router-dom';
import classes from './App.scss';

function App() {
    return (
        <Layout>
            <Menu />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/bookmark" component={Bookmark}/>
                <Route component={NotFound}/>
            </Switch>
        </Layout>
    );
}

export default App;
