import Uploads_data from './containers/Uploads_data/index.js';
import Event from './containers/Uploads_data/Item/index_events.js';
import ReactFirebaseFileUpload from "./containers/Uploads_data/Item/Upload.js";

var element1 = React.createElement(Uploads_data, null);
ReactDOM.render(element1, document.getElementById('index_uploads'));
ReactDOM.render(React.createElement(Event, null), document.getElementById('index_event'));
ReactDOM.render(React.createElement(ReactFirebaseFileUpload, null), document.getElementById('uploads'));