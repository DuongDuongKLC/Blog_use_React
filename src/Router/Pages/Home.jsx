import {Home_header, Home_menu, Home_title} from '../Blog/Header/Home_header.js';
import {Home_end} from '../Blog/End/Home_end.js';
import Home_middle from '../Blog/Middle/Home_middle.js';
import Dayly_converstations from '../Blog/Middle/Dayly_converstation.js';

const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const Router = ReactRouterDOM.Router;
const Switch = ReactRouterDOM.Switch;

export const Blog = (props) => {
    const Index = props => <Home_middle /> // Interface for Index page .
    const Dayly = props => <Dayly_converstations />// Interface for dayly converstatons


    return(
        <ReactRouterDOM.HashRouter>
                <Home_header />
                <Home_menu />
                <Home_title />
                <Switch>
                    <Route path="/" exact component = {Index}></Route>
                    <Route path="/chuyen-hang-ngay" component = {Dayly}></Route>
                </Switch>
                <Home_end />
        </ReactRouterDOM.HashRouter>
    )
}