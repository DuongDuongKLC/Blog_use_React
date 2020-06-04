import {Header} from '../../components/Header/index.js';
import {Item_menu, Title_main} from './items/index.js';
import Upload_status from './items/upload_status.js';8
import {End} from '../End/index.js';
import Status from '../../containers/contents/Status/index.js';
import Content from './items/data_content.js';
import Content1 from './items/data_content1.js';
import Content2 from './items/data_content2.js';
import Content3 from './items/data_content3.js';
import Content4 from './items/data_content4.js';
import Content5 from './items/data_content5.js';

const Route = ReactRouterDOM.Route;
export const Middle_main = (props) => {
    const Home = props => <Upload_status />
    const Dayly = props => <Content />
    const Linux = props => <Content1 />
    const Se = props => <Content2 />
    const Nature = props => <Content3 />
    const Story = props => <Content4 />
    const Game = props => <Content5 />
    return(
        <ReactRouterDOM.HashRouter>
            <Header />
            <div class="middle_main h(30ph) container-fluid">
                <Item_menu />
                <Title_main />
                <Route path="/" exact component={Home}></Route>
                <Status/>
                <Route path="/chuyen-hang-ngay"component={Dayly}></Route>
                <Route path="/kali-linux" component={Linux}></Route>
                <Route path="/khoa-hoc-doi-song" component={Se}></Route>
                <Route path="/thien-nhien" component={Nature}></Route>
                <Route path="/mau-truyen-ngan" component={Story}></Route>
                <Route path="/game-gai" component={Game}></Route>
                <End />
            </div>
        </ReactRouterDOM.HashRouter>
    )
}
