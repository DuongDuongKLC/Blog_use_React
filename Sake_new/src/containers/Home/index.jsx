import {Header} from '../../components/Header/index.js';
import {Middle_main} from '../../components/Middle/index.js';

export const Home = (props) => {
    return(
        <div className="container-fluid ">
            <Header />
            <Middle_main/>
        </div>
    );
}