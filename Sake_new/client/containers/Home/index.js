import { Middle_main } from '../../components/Middle/index.js';

export var Home = function Home(props) {
    return React.createElement(
        "div",
        { className: "container-fluid " },
        React.createElement(Middle_main, null)
    );
};