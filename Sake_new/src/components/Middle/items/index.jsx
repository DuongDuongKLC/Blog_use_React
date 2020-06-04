const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
export const Item_menu = (pops) => {
    return(
        <div class="item_menu h(100pc) bdc(Black) bg-white ml-5 mr-5 overflow-hidden position-relative">
            <div class="left_menu w(40pc) h-100 position-absolute tx(0) z(5)">
                <div className="item row h(5ph) w(95pc)">
                    <Link to="/chuyen-hang-ngay"> Chuyện hàng ngày của tồi </Link>
                </div>
                <div className="item row h(5ph) bdc-t(Black) w(90pc)">
                    <Link to="/kali-linux"> Hệ điều hành kali linux</Link>
                </div>
                <div className="item row h(5ph) bdc-t(Black) w(85pc)">
                    <Link to="/khoa-hoc-doi-song"> Khoa học và đời sống </Link>
                </div>
                <div className="item row h(5ph) bdc-t(Black) w(80pc)">
                    <Link to="/thien-nhien"> Thiên nhiên thật kì thú  </Link>
                </div>
                <div className="item row h(5ph) bdc-t(Black) w(75pc)">
                    <Link to="/mau-truyen-ngan"> Những mẫu chuyện ngắn </Link>
                </div>
                <div className="item row h(5ph) bdc-t(Black) w(70pc)">
                    <Link to="/game-gai"> Gái và game  </Link>
                </div>
            </div>
            <div class="right_menu w(75pc) h-100 position-absolute ty(0)">
                <div class="swiper-container h(100pc) w(100pc)">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="/picture/slides/1.png" alt="" srcset="" class="w(100pc) h(100pc)"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="/picture/slides/2.png" alt="" srcset="" class="w(100pc) h(100pc)"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="/picture/slides/3.png" alt="" srcset="" class="w(100pc) h(100pc)"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="/picture/slides/4.png" alt="" srcset="" class="w(100pc) h(100pc)"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="/picture/slides/5.png" alt="" srcset="" class="w(100pc) h(100pc)"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="/picture/slides/6.png" alt="" srcset="" class="w(100pc) h(100pc)"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="/picture/slides/7.png" alt="" srcset="" class="w(100pc) h(100pc)"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="/picture/slides/8.png" alt="" srcset="" class="w(100pc) h(100pc)"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="/picture/slides/9.png" alt="" srcset="" class="w(100pc) h(100pc)"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Title_main = (props) =>{
    return(
        <div class="title_main h(50) ml-5 mr-5">
            <div class="main h-100 w(300) float-left pt-1">
                <img src="/picture/title_main.png" class="w(40) h(40) bdc(Black) rounded-circle float-left mt-1 ml-1" alt="" srcset=""/>
                <h5 class="ff(Lemon) font-weight-bold c(Black) float-right pt-3"> Danh Sách Bài Viết </h5>
            </div>
            <div class="right_title h-100 wcalc(calcpc300) float-right">
                <div class="lf wcalc(calcpc200) h-100 float-right">
                    <nav class="navbar navbar-light h-100 float-right">
                        <form action="" class="form-inline">
                            <input class="form-control mt-1 mr-sm-2 btn-outline-dark fz(15) hov(c-Black):h hov(bg-White):h c(Black) ff(Lemon)" type="search" placeholder="Tìm kiếm" aria-label="Search"/>
                            <button class="btn btn-outline-dark my-0 mx-0 mt-1 ff(Lemon) c(Black) " type="submit"> Tìm kiếm </button>
                        </form>
                    </nav>
                </div>
            </div>
        </div>
    )
}