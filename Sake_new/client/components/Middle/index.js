import { Item_menu, Title_main } from './items/index.js';
import Upload_status from './items/upload_status.js';
import { End } from '../End/index.js';

export var Middle_main = function Middle_main(props) {
    return React.createElement(
        'div',
        { 'class': 'middle_main h(30ph) container-fluid' },
        React.createElement(Item_menu, null),
        React.createElement(Title_main, null),
        React.createElement(Upload_status, null),
        React.createElement(End, null)
    );
};