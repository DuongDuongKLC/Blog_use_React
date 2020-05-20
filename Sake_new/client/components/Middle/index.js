import { Item_menu, Title_main } from './items/index.js';
import Upload_status from './items/upload_status.js';
import { End } from '../End/index.js';
import Status from '../../containers/contents/Status/index.js';

var Route = ReactRouterDOM.Route;
export var Middle_main = function Middle_main(props) {
    var Home = function Home(props) {
        return React.createElement(
            'div',
            null,
            React.createElement(Upload_status, null)
        );
    };
    var S1 = function S1(props) {
        return React.createElement(
            'div',
            null,
            React.createElement(Status, null)
        );
    };
    return React.createElement(
        ReactRouterDOM.HashRouter,
        null,
        React.createElement(
            'div',
            { 'class': 'middle_main h(30ph) container-fluid' },
            React.createElement(Item_menu, null),
            React.createElement(Title_main, null),
            React.createElement(Route, { path: '/', exact: true, component: Home }),
            React.createElement(Route, { path: '/bai-viet/5', component: S1 }),
            React.createElement(End, null)
        )
    );
};