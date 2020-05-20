var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Event = function (_React$Component) {
    _inherits(Event, _React$Component);

    function Event(props) {
        _classCallCheck(this, Event);

        var _this = _possibleConstructorReturn(this, (Event.__proto__ || Object.getPrototypeOf(Event)).call(this, props));

        _this.onChange = function () {
            if (_this.state.isChange === true) {
                _this.setState({
                    isChange: false
                });
            } else {
                _this.setState({
                    isChange: true
                });
            }
        };

        _this.state = {
            data: [{}],
            isChange: true
        };
        return _this;
    }

    _createClass(Event, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var els = this.state.data.map(function (datas, index) {
                var result = '';
                if (_this2.state.isChange) {
                    result = React.createElement(
                        "div",
                        { "class": "c(Red)" },
                        React.createElement(
                            "h3",
                            null,
                            " Sake _ Ke Lam CHuyen "
                        )
                    );
                } else {
                    result = React.createElement(
                        "div",
                        { "class": "c(Blue)" },
                        React.createElement(
                            "h3",
                            null,
                            " Sake _ "
                        )
                    );
                }
                return result;
            });
            return React.createElement(
                "div",
                { "class": "h(100) bdc(Black)" },
                els,
                React.createElement(
                    "button",
                    { onClick: this.onChange, "class": "btn btn-success" },
                    "Click to change : ",
                    this.state.isChange === true ? "True" : "False"
                )
            );
        }
    }]);

    return Event;
}(React.Component);

export default Event;