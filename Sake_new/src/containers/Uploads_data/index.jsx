import Product from './Item/index_upload.js';
const {state} = React;
export default class Uploads_data extends React.Component{
    onClick = e => {
        alert("you clicked");
    }
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {
                    id: 1,
                    name: 'kamado Nezuko',
                    url:'/picture/slides/1.png',
                    status: true
                },
                {
                    id: 2,
                    name: 'Kanao',
                    url:'/picture/slides/3.png',
                    status: true
                },
                {
                    id: 3,
                    name: 'Agasuma Zenitsu',
                    url:'/picture/slides/2.png',
                    status: true
                },
            ],
            isActive: true
        };
    }
    onSetState = () => {
        if(this.state.isActive === true){
            this.setState({
                isActive: false
            })
        }else{
            this.setState({
                isActive: true
            })
        }
    }
    render(){
        //const els1 = data.data.map((data, index){});
        let els = this.state.data.map((datas, index) => {
            let result = '';
            if(this.state.isActive){
                result =(
                        <div class="col-xl-4 col-sm-4 col-md-4 col-lg-4 h-100">
                            <div class="card">
                                <img class="card-img-top" src={datas.url} alt="Card image cap"/>
                                <div class="card-body">
                                    <Product
                                        name={datas.name}
                                    />
                                    <a type="button" class="btn btn-primary" onClick={this.onClick}>
                                        Go Somewhere 
                                    </a>
                                </div>
                            </div>
                        </div>
                        )
            }else{
                result = ("");
            }
            return result;
        });
        return(
            <div>
                <div className="row w(1200) bdc(Black) h(300)">
                {els}
                </div>
                <button class="btn btn-secondary" onClick={this.onSetState}>
                    Active: {this.state.isActive === true ? 'True':'False'}
                </button>
            </div>
        )
    }
}