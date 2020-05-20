import {Header} from '../../components/Header/index.js';
import {Middle} from '../../components/Middle/index.js';
import {End} from '../../components/End/index.js';

export const Home = (props) => {
    return(
        <div className="ff(Lavender) container-fluid">
            <Header />
            <Middle />
            <End />
        </div>
    );
}