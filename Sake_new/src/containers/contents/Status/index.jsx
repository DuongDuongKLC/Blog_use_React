const Route = ReactRouterDOM.Route;
export default class Status extends React.Component {
    state = {
        data_status:[],
    }
    componentDidMount(){
        this.getStatus(0);
    }
    getStatus = (n) =>{
        axios.post('/data_status')
            .then((response)=>{
                const data_status = response.data;
                this.setState({data_status: data_status.data})
            })
            .catch(()=>{
                console.log('something wrong');
            })
    }
    disPlay = (data_status) =>{
        if(!data_status.length) return null;
        return data_status.map((sta, index)=>(
            <div class="main_thresh">
                <div class="title_thresh h(50) w-100 bdc-bt(Black)">
                    <div class="float-left h-100 w-100">
                        <div class="title_child h(100pc) wcalc(calcpc200) float-left">
                            <div class="w(300) float-left ml-5">
                                <img src={sta.url_picture} class="h(40) w(40) float-left mt-1 ml-2 rounded-circle bdc(Black)" alt="" srcset=""/>
                                <a class="ff(Lemon) c(Black) fz(15) font-weight-bold pt-3 hov(c-Black):h float-right">
                                    {sta.title_status} 
                                </a>
                            </div>
                        </div>
                        <div class="klc_sake w(200) h-100 float-right">
                            <div class="info_sake h-100">
                                <img src="/picture/face.png" class=" float-left w(40) h(40) ml-0 mt-1 rounded-circle bdc(Black)" alt="" srcset=""/>
                                <a class="c(Black) ff(Lemon) pt-3 float-right fz(s) pr-5"> Kẻ Lắm Chyện </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="data_thresh">
                    <p class="ff(Lemon) fz(15) pl-5 pt-4 pb-4 Whs(pl) pr-3">
                        <img src={sta.url_picture} class="h(400) w(400) float-right bdc(Black) mr-3 mt-4" alt="" srcset=""/>
                        {sta.data_status}
                    </p>
                </div>
                <div class="thresh_day h(40) w-100">
                    <a class="float-right pr-5 ff(Lemon)"><span class="font-weight-bold"> Ngày viết bài : </span> {sta.date_status}</a>
                </div>
                <div class="link_thresh">
                    <div class="h(50) w-10 bdc-t(Black)">
                        <a class="ff(Lemon) fz(15) fw(b) c(Black) float-left pt-3 pl-4"> Bài viết liên quan </a>
                    </div>
                </div>
            </div>
        ));
    }
    render(){
        var st5 = this.state.data_status.filter((item)=> item.stt_status == 5);
        var st4 = this.state.data_status.filter((item)=> item.stt_status == 4);
        var st3 = this.state.data_status.filter((item)=> item.stt_status == 3);
        var st2 = this.state.data_status.filter((item)=> item.stt_status == 2);
        var st1 = this.state.data_status.filter((item)=> item.stt_status == 1);
        const U5 = ()=>{
            return(
                <div>
                    {this.disPlay(st5)}
                </div>
            )
        }
        const U4 = ()=>{
            return(
                <div>
                    {this.disPlay(st4)}
                </div>
            )
        }
        const U3 = ()=>{
            return(
                <div>
                    {this.disPlay(st3)}
                </div>
            )
        }
        const U2 = ()=>{
            return(
                <div>
                    {this.disPlay(st2)}
                </div>
            )
        }
        const U1 = ()=>{
            return(
                <div>
                    {this.disPlay(st1)}
                </div>
            )
        }
        return(
            <div class="middle_main">
                <div class="data_status1 bdc(Black) ml-5 mr-5 mt-2">
                <Route path="/bai-viet/5" component={U5}>
                </Route>
                <Route path="/bai-viet/4" component={U4}>
                </Route>
                <Route path="/bai-viet/3" component={U3}>
                </Route>
                <Route path="/bai-viet/2" component={U2}>
                </Route>
                <Route path="/bai-viet/1" component={U1}>
                </Route>
                </div>
            </div>
        )
    }
}