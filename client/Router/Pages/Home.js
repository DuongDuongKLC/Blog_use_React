import { Home_header, Home_menu, Home_title } from '../Blog/Header/Home_header.js';
import { Home_end } from '../Blog/End/Home_end.js';
import Home_middle from '../Blog/Middle/Home_middle.js';
import Dayly_converstations from '../Blog/Middle/Dayly_converstation.js';

var Link = ReactRouterDOM.Link;
var Route = ReactRouterDOM.Route;
var Router = ReactRouterDOM.Router;
var Switch = ReactRouterDOM.Switch;

export var Blog = function Blog(props) {
    var Index = function Index(props) {
        return React.createElement(Home_middle, null);
    }; // Interface for Index page .
    var Dayly = function Dayly(props) {
        return React.createElement(Dayly_converstations, null);
    }; // Interface for dayly converstatons


    return React.createElement(
        ReactRouterDOM.HashRouter,
        null,
        React.createElement(Home_header, null),
        React.createElement(Home_menu, null),
        React.createElement(Home_title, null),
        React.createElement(
            Switch,
            null,
            React.createElement(Route, { path: '/', exact: true, component: Index }),
            React.createElement(Route, { path: '/chuyen-hang-ngay', component: Dayly })
        ),
        React.createElement(Home_end, null)
    );
};