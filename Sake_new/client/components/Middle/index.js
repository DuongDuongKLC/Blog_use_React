import { Header } from '../../components/Header/index.js';
import { Item_menu, Title_main } from './items/index.js';
import Upload_status from './items/upload_status.js';8;
import { End } from '../End/index.js';
import Status from '../../containers/contents/Status/index.js';
import Content from './items/data_content.js';
import Content1 from './items/data_content1.js';
import Content2 from './items/data_content2.js';
import Content3 from './items/data_content3.js';
import Content4 from './items/data_content4.js';
import Content5 from './items/data_content5.js';

var Route = ReactRouterDOM.Route;
export var Middle_main = function Middle_main(props) {
    var Home = function Home(props) {
        return React.createElement(Upload_status, null);
    };
    var Dayly = function Dayly(props) {
        return React.createElement(Content, null);
    };
    var Linux = function Linux(props) {
        return React.createElement(Content1, null);
    };
    var Se = function Se(props) {
        return React.createElement(Content2, null);
    };
    var Nature = function Nature(props) {
        return React.createElement(Content3, null);
    };
    var Story = function Story(props) {
        return React.createElement(Content4, null);
    };
    var Game = function Game(props) {
        return React.createElement(Content5, null);
    };
    return React.createElement(
        ReactRouterDOM.HashRouter,
        null,
        React.createElement(Header, null),
        React.createElement(
            'div',
            { 'class': 'middle_main h(30ph) container-fluid' },
            React.createElement(Item_menu, null),
            React.createElement(Title_main, null),
            React.createElement(Route, { path: '/', exact: true, component: Home }),
            React.createElement(Status, null),
            React.createElement(Route, { path: '/chuyen-hang-ngay', component: Dayly }),
            React.createElement(Route, { path: '/kali-linux', component: Linux }),
            React.createElement(Route, { path: '/khoa-hoc-doi-song', component: Se }),
            React.createElement(Route, { path: '/thien-nhien', component: Nature }),
            React.createElement(Route, { path: '/mau-truyen-ngan', component: Story }),
            React.createElement(Route, { path: '/game-gai', component: Game }),
            React.createElement(End, null)
        )
    );
};