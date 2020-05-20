export const Header = (props) => {
    return(
        <header className="start_header container-fluid">
            <div class="ml-5 mr-5 h(60)">
                <div class="item1 nav w(300) h-100 float-left">
                    <img class="w(50) h(50) rounded-circle border border-dark mt-1 float-left" src="/picture/face.png" alt="" srcset=""/>
                    <a class="ff(Lemon) c(Black) font-weight-bold float-right mr-2 mt-3 ml-3"> Kẻ Lắm Chuyện</a>
                </div>
                <div class="wcalc(calcpc300) h-100 float-right">
                    <div class="lr w(200) h-100 float-right">
                        <a class="ff(Lemon) c(Black) float-left mt-3 cur(p)"> Đăng kí </a>
                        <a class="ff(Lemon) c(Black) float-right mt-3 cur(p)"> Đăng nhập </a>
                    </div>
                </div>
            </div>
        </header>
    )
}