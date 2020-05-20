import {Item_menu, Title_main} from './items/index.js';
import Upload_status from './items/upload_status.js';
import {End} from '../End/index.js'
import Status from '../../containers/contents/Status/index.js'

const Route = ReactRouterDOM.Route;
export const Middle_main = (props) => {
    const Home = props => (
        <div>
            <Upload_status />
        </div>
    )
    const S1 = props => (
        <div>
            <Status />
        </div>
    )
    return(
        <ReactRouterDOM.HashRouter>
            <div class="middle_main h(30ph) container-fluid">
                <Item_menu />
                <Title_main />
                <Route path="/" exact component={Home}>
                </Route>
                <Route path="/bai-viet/5" component={S1} />
                <End />
            </div>
        </ReactRouterDOM.HashRouter>
    )
}
