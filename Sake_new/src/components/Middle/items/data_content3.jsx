const Link = ReactRouterDOM.Link;
export default class Content extends React.Component {
    state = {
        data_status : []
    }
    componentDidMount(){
        this.getStatus();
    }
    getStatus = () =>{
        axios.post('/data_status')
            .then((response) =>{
                const data_status = response.data;
                this.setState({data_status: data_status.data})
            })
            .catch(()=>{
                console.log('Somthing wrong');
            })
    }
    disPlayStatus =(data_status) =>{
        if(!data_status.length) return null;
        return data_status.map((status, index)=>(
            <div class="mt-4 ml-5 mr-5 h(300) bdc(Black) row rounded">
                <img src={status.url_picture} class="h-100 w(350) bdc-rt(Black) overflow-hidden rounded" alt="" srcset=""/>
                <div class="item_main wcalc(calcpc350) h-100 float-right h-100">
                    <div class="title_item h(50) w-100 bdc-bt(Black) rounded">
                        <div class="title_child h(100pc) wcalc(calcpc200) float-left overflow-hidden">
                            <Link to={`/chuyen-hang-ngay/${status.stt_status}`} class="ff(Lemon) c(Black) fz(15) font-weight-bold float-left pt-sm-3 pl-5 hov(c-Black):h"> {status.title_status} </Link>
                        </div>
                        <div class="klc_sake w(200) h-100 float-right">
                            <div class="info_sake h-100">
                                <img src="/picture/face.png" class=" float-left w(40) h(40) ml-0 mt-1 rounded-circle bdc(Black)" alt="" srcset=""/>
                                <a class="c(Black) ff(Lemon) pt-3 float-right fz(s) pr-5"> Kẻ Lắm Chyện </a>
                            </div>
                        </div>
                    </div>
                    <div class="text_item hcalc(calcpc50)">
                        <div class="left_item hcalc(calcpc50) w-100 float-left">
                            <div class="left_item wcalc(calcpc70) h-100 float-left overflow-hidden">
                                <p class="ff(Lemon) fz(15) pl-4 Whs(pl)">
                                    {status.data_status}
                                </p>
                            </div>
                            <div class="right_item w(70) float-right h-100">
                                <i class="fas fa-share fz(20) pt-3 pr-3 float-right"></i>
                            </div>
                        </div>
                        <div class="right_item h(50) w-100 float-right">
                            <div class="icon_like float-left pt-3 pl-5">
                                <a class="cur(p)"> <i class="far fa-thumbs-up"></i> </a>
                                <a class="cur(p)"><i class="far fa-thumbs-down"></i></a>
                            </div>
                            <a class="pt-3 pr-3 float-right ff(Lemon) fz(14)"> Ngày viết bài : <span class="fz(13)">{status.date_status}</span></a>
                        </div>
                    </div>
                </div>
            </div>
        ));
    }
    render(){
        var content = this.state.data_status.filter((item)=> item.ma_status == 44)
        
        return(
            <div class="main_body_status w-100">
                <div class="main ml-5 mr-5 mt-2 bdc(Black) pb-4 rounded">
                    {this.disPlayStatus(content)}
                </div>
            </div>
        )
    }
}