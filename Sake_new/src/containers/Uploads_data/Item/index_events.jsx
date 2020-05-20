export default class Event extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {}
            ],
            isChange: true
        };
    }
    onChange =() => {
        if(this.state.isChange === true) {
            this.setState({
                isChange: false
            })
        }else{
            this.setState({
                isChange: true
            })
        }
    }
    render(){
        let els = this.state.data.map((datas, index) => {
            let result = '';
            if(this.state.isChange){
                result = (
                    <div class="c(Red)">
                        <h3> Sake _ Ke Lam CHuyen </h3>
                    </div>
                )
            }else{
                result = (
                    <div class="c(Blue)">
                        <h3> Sake _ </h3>
                    </div>
                )
            }
            return result;
        });
        return(
            <div class="h(100) bdc(Black)">
                {els}
                <button onClick={this.onChange} class="btn btn-success">
                    Click to change : {this.state.isChange === true ? "True" :"False"}
                </button>
            </div>
        )
    }
}