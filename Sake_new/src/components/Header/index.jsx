const Link = ReactRouterDOM.Link;
export const Header = (props) => {
    return(
        <header className="start_header container-fluid">
            <div class="ml-5 mr-5 h(60)">
                <div class="item1 nav w(300) h-100 float-left">
                    <img class="w(50) h(50) rounded-circle border border-dark mt-1 float-left" src="/picture/face.png" alt="" srcset=""/>
                    <a href="#/" class="hov(c-Black):h ff(Lemon) c(Black) font-weight-bold float-right mr-2 mt-3 ml-3"> Kẻ Lắm Chuyện</a>
                </div>
                <div class="wcalc(calcpc300) h-100 float-right">
                    <div class="lf wcalc(calcpc200) float-left bg-warning h-100 position-relative">
                    </div>
                    <div class="lr w(200) h-100 float-right">
                        <a href="/dang-ki" class=" hov(c-Black):h ff(Lemon) c(Black) float-left mt-3 cur(p)"> Đăng kí </a>
                        <a href="/dang-nhap" class="hov(c-Black):h ff(Lemon) c(Black) float-right mt-3 cur(p)"> Đăng nhập </a>
                    </div>
                </div>
            </div>
        </header>
    )
}