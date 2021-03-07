var Link = ReactRouterDOM.Link;

export var Home_header = function Home_header(props) {
    return React.createElement(
        "header",
        { className: "start_header container-fluid" },
        React.createElement(
            "div",
            { "class": "ml-5 mr-5 h(60)" },
            React.createElement(
                "div",
                { "class": "item1 nav w(300) h-100 float-left" },
                React.createElement("img", { "class": "w(50) h(50) rounded-circle border border-dark mt-1 float-left", src: "/picture/face.png", alt: "", srcset: "" }),
                React.createElement(
                    "a",
                    { href: "/", "class": "hov(c-Black):h ff(Lemon) c(Black) font-weight-bold float-right mr-2 mt-3 ml-3" },
                    " Ke\u0309 L\u0103\u0301m Chuy\xEA\u0323n"
                )
            ),
            React.createElement(
                "div",
                { "class": "wcalc(calcpc300) h-100 float-right" },
                React.createElement("div", { "class": "lf wcalc(calcpc200) float-left h-100 position-relative" }),
                React.createElement(
                    "div",
                    { "class": "lr w(200) h-100 float-right" },
                    React.createElement(
                        "a",
                        { href: "/dang-ki", "class": " hov(c-Black):h ff(Lemon) c(Black) float-left mt-3 cur(p)" },
                        " \u0110\u0103ng ki\u0301 "
                    ),
                    React.createElement(
                        "a",
                        { href: "/dang-nhap", "class": "hov(c-Black):h ff(Lemon) c(Black) float-right mt-3 cur(p)" },
                        " \u0110\u0103ng nh\xE2\u0323p "
                    )
                )
            )
        )
    );
};

export var Home_title = function Home_title(props) {
    return React.createElement(
        "div",
        { "class": "title_main h(50) ml-5 mr-5" },
        React.createElement(
            "div",
            { "class": "main h-100 w(300) float-left pt-1" },
            React.createElement("img", { src: "/picture/title_main.png", "class": "w(40) h(40) bdc(Black) rounded-circle float-left mt-1 ml-1", alt: "", srcset: "" }),
            React.createElement(
                "h5",
                { "class": "ff(Lemon) font-weight-bold c(Black) float-right pt-3" },
                " Danh Sa\u0301ch Ba\u0300i Vi\xEA\u0301t "
            )
        ),
        React.createElement(
            "div",
            { "class": "right_title h-100 wcalc(calcpc300) float-right" },
            React.createElement(
                "div",
                { "class": "lf wcalc(calcpc200) h-100 float-right" },
                React.createElement(
                    "nav",
                    { "class": "navbar navbar-light h-100 float-right" },
                    React.createElement(
                        "form",
                        { action: "", "class": "form-inline" },
                        React.createElement("input", { "class": "form-control mt-1 mr-sm-2 btn-outline-dark fz(15) hov(c-Black):h hov(bg-White):h c(Black) ff(Lemon)", type: "search", placeholder: "Ti\u0300m ki\xEA\u0301m", "aria-label": "Search" }),
                        React.createElement(
                            "button",
                            { "class": "btn btn-outline-dark my-0 mx-0 mt-1 ff(Lemon) c(Black) ", type: "submit" },
                            " Ti\u0300m ki\xEA\u0301m "
                        )
                    )
                )
            )
        )
    );
};

export var Home_menu = function Home_menu(pops) {
    return React.createElement(
        "div",
        { "class": "h(300)" },
        React.createElement(
            "div",
            { "class": "home_menu h(100pc) bg-white ml-5 mr-5 overflow-hidden position-relative" },
            React.createElement(
                "div",
                { "class": "left_menu w(40pc) h-100 position-absolute tx(0) z(5)" },
                React.createElement(
                    "div",
                    { className: "item row h(5ph) w(95pc)" },
                    React.createElement(
                        Link,
                        { to: "/chuyen-hang-ngay" },
                        " Chuy\xEA\u0323n ha\u0300ng nga\u0300y cu\u0309a t\xF4\u0300i "
                    )
                ),
                React.createElement(
                    "div",
                    { className: "item row h(5ph) w(90pc)" },
                    React.createElement(
                        Link,
                        { to: "/kali-linux" },
                        " H\xEA\u0323 \u0111i\xEA\u0300u ha\u0300nh kali linux"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "item row h(5ph) w(85pc)" },
                    React.createElement(
                        Link,
                        { to: "/khoa-hoc-doi-song" },
                        " Khoa ho\u0323c va\u0300 \u0111\u01A1\u0300i s\xF4\u0301ng "
                    )
                ),
                React.createElement(
                    "div",
                    { className: "item row h(5ph) w(80pc)" },
                    React.createElement(
                        Link,
                        { to: "/thien-nhien" },
                        " Thi\xEAn nhi\xEAn th\xE2\u0323t ki\u0300 thu\u0301  "
                    )
                ),
                React.createElement(
                    "div",
                    { className: "item row h(5ph) w(75pc)" },
                    React.createElement(
                        Link,
                        { to: "/mau-truyen-ngan" },
                        " Nh\u01B0\u0303ng m\xE2\u0303u chuy\xEA\u0323n ng\u0103\u0301n "
                    )
                ),
                React.createElement(
                    "div",
                    { className: "item row h(5ph)  w(70pc)" },
                    React.createElement(
                        Link,
                        { to: "/game-gai" },
                        " Ga\u0301i va\u0300 game  "
                    )
                )
            ),
            React.createElement(
                "div",
                { "class": "right_menu w(75pc) h-100 position-absolute ty(0)" },
                React.createElement(
                    "div",
                    { "class": "swiper-container h(100pc) w(100pc)" },
                    React.createElement(
                        "div",
                        { "class": "swiper-wrapper" },
                        React.createElement(
                            "div",
                            { "class": "swiper-slide" },
                            React.createElement("img", { src: "/picture/slides/1.png", alt: "", srcset: "", "class": "w(100pc) h(100pc)" })
                        ),
                        React.createElement(
                            "div",
                            { "class": "swiper-slide" },
                            React.createElement("img", { src: "/picture/slides/2.png", alt: "", srcset: "", "class": "w(100pc) h(100pc)" })
                        ),
                        React.createElement(
                            "div",
                            { "class": "swiper-slide" },
                            React.createElement("img", { src: "/picture/slides/3.png", alt: "", srcset: "", "class": "w(100pc) h(100pc)" })
                        ),
                        React.createElement(
                            "div",
                            { "class": "swiper-slide" },
                            React.createElement("img", { src: "/picture/slides/4.png", alt: "", srcset: "", "class": "w(100pc) h(100pc)" })
                        ),
                        React.createElement(
                            "div",
                            { "class": "swiper-slide" },
                            React.createElement("img", { src: "/picture/slides/5.png", alt: "", srcset: "", "class": "w(100pc) h(100pc)" })
                        ),
                        React.createElement(
                            "div",
                            { "class": "swiper-slide" },
                            React.createElement("img", { src: "/picture/slides/6.png", alt: "", srcset: "", "class": "w(100pc) h(100pc)" })
                        ),
                        React.createElement(
                            "div",
                            { "class": "swiper-slide" },
                            React.createElement("img", { src: "/picture/slides/7.png", alt: "", srcset: "", "class": "w(100pc) h(100pc)" })
                        ),
                        React.createElement(
                            "div",
                            { "class": "swiper-slide" },
                            React.createElement("img", { src: "/picture/slides/8.png", alt: "", srcset: "", "class": "w(100pc) h(100pc)" })
                        ),
                        React.createElement(
                            "div",
                            { "class": "swiper-slide" },
                            React.createElement("img", { src: "/picture/slides/9.png", alt: "", srcset: "", "class": "w(100pc) h(100pc)" })
                        )
                    )
                )
            )
        )
    );
};