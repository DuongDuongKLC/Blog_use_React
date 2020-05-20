import Uploads_data from './containers/Uploads_data/index.js';
import Event from './containers/Uploads_data/Item/index_events.js';
import ReactFirebaseFileUpload from "./containers/Uploads_data/Item/Upload.js";

const element1 = <Uploads_data/>
ReactDOM.render(
    element1,
    document.getElementById('index_uploads')
)
ReactDOM.render(
    <Event />,
    document.getElementById('index_event')
)
ReactDOM.render(
    <ReactFirebaseFileUpload />,
    document.getElementById('uploads')
)