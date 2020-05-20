import { Header } from '../../components/Header/index.js';
import { Middle_main } from '../../components/Middle/index.js';

export var Home = function Home(props) {
    return React.createElement(
        'div',
        { className: 'container-fluid ' },
        React.createElement(Header, null),
        React.createElement(Middle_main, null)
    );
};