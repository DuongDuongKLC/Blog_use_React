export var Header = function Header(props) {
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
                    { "class": "ff(Lemon) c(Black) font-weight-bold float-right mr-2 mt-3 ml-3" },
                    " Ke\u0309 L\u0103\u0301m Chuy\xEA\u0323n"
                )
            ),
            React.createElement(
                "div",
                { "class": "wcalc(calcpc300) h-100 float-right" },
                React.createElement(
                    "div",
                    { "class": "lr w(200) h-100 float-right" },
                    React.createElement(
                        "a",
                        { "class": "ff(Lemon) c(Black) float-left mt-3 cur(p)" },
                        " \u0110\u0103ng ki\u0301 "
                    ),
                    React.createElement(
                        "a",
                        { "class": "ff(Lemon) c(Black) float-right mt-3 cur(p)" },
                        " \u0110\u0103ng nh\xE2\u0323p "
                    )
                )
            )
        )
    );
};