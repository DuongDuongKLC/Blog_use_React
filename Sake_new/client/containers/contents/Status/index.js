var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Route = ReactRouterDOM.Route;

var Status = function (_React$Component) {
    _inherits(Status, _React$Component);

    function Status() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Status);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Status.__proto__ || Object.getPrototypeOf(Status)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            data_status: []
        }, _this.getStatus = function (n) {
            axios.post('/data_status').then(function (response) {
                var data_status = response.data;
                _this.setState({ data_status: data_status.data });
            }).catch(function () {
                console.log('something wrong');
            });
        }, _this.disPlay = function (data_status) {
            if (!data_status.length) return null;
            return data_status.map(function (sta, index) {
                return React.createElement(
                    'div',
                    { 'class': 'main_thresh' },
                    React.createElement(
                        'div',
                        { 'class': 'title_thresh h(50) w-100 bdc-bt(Black)' },
                        React.createElement(
                            'div',
                            { 'class': 'float-left h-100 w-100' },
                            React.createElement(
                                'div',
                                { 'class': 'title_child h(100pc) wcalc(calcpc200) float-left' },
                                React.createElement(
                                    'div',
                                    { 'class': 'w(300) float-left ml-5' },
                                    React.createElement('img', { src: sta.url_picture, 'class': 'h(40) w(40) float-left mt-1 ml-2 rounded-circle bdc(Black)', alt: '', srcset: '' }),
                                    React.createElement(
                                        'a',
                                        { 'class': 'ff(Lemon) c(Black) fz(15) font-weight-bold pt-3 hov(c-Black):h float-right' },
                                        sta.title_status
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { 'class': 'klc_sake w(200) h-100 float-right' },
                                React.createElement(
                                    'div',
                                    { 'class': 'info_sake h-100' },
                                    React.createElement('img', { src: '/picture/face.png', 'class': ' float-left w(40) h(40) ml-0 mt-1 rounded-circle bdc(Black)', alt: '', srcset: '' }),
                                    React.createElement(
                                        'a',
                                        { 'class': 'c(Black) ff(Lemon) pt-3 float-right fz(s) pr-5' },
                                        ' Ke\u0309 L\u0103\u0301m Chy\xEA\u0323n '
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'data_thresh' },
                        React.createElement(
                            'p',
                            { 'class': 'ff(Lemon) fz(15) pl-5 pt-4 pb-4 Whs(pl) pr-3' },
                            React.createElement('img', { src: sta.url_picture, 'class': 'h(400) w(400) float-right bdc(Black) mr-3 mt-4', alt: '', srcset: '' }),
                            sta.data_status
                        )
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'thresh_day h(40) w-100' },
                        React.createElement(
                            'a',
                            { 'class': 'float-right pr-5 ff(Lemon)' },
                            React.createElement(
                                'span',
                                { 'class': 'font-weight-bold' },
                                ' Nga\u0300y vi\xEA\u0301t ba\u0300i : '
                            ),
                            ' ',
                            sta.date_status
                        )
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'link_thresh' },
                        React.createElement(
                            'div',
                            { 'class': 'h(50) w-10 bdc-t(Black)' },
                            React.createElement(
                                'a',
                                { 'class': 'ff(Lemon) fz(15) fw(b) c(Black) float-left pt-3 pl-4' },
                                ' Ba\u0300i vi\xEA\u0301t li\xEAn quan '
                            )
                        )
                    )
                );
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Status, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getStatus(0);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var st5 = this.state.data_status.filter(function (item) {
                return item.stt_status == 5;
            });
            var st4 = this.state.data_status.filter(function (item) {
                return item.stt_status == 4;
            });
            var st3 = this.state.data_status.filter(function (item) {
                return item.stt_status == 3;
            });
            var st2 = this.state.data_status.filter(function (item) {
                return item.stt_status == 2;
            });
            var st1 = this.state.data_status.filter(function (item) {
                return item.stt_status == 1;
            });
            var U5 = function U5() {
                return React.createElement(
                    'div',
                    null,
                    _this2.disPlay(st5)
                );
            };
            var U4 = function U4() {
                return React.createElement(
                    'div',
                    null,
                    _this2.disPlay(st4)
                );
            };
            var U3 = function U3() {
                return React.createElement(
                    'div',
                    null,
                    _this2.disPlay(st3)
                );
            };
            var U2 = function U2() {
                return React.createElement(
                    'div',
                    null,
                    _this2.disPlay(st2)
                );
            };
            var U1 = function U1() {
                return React.createElement(
                    'div',
                    null,
                    _this2.disPlay(st1)
                );
            };
            return React.createElement(
                'div',
                { 'class': 'middle_main' },
                React.createElement(
                    'div',
                    { 'class': 'data_status1 bdc(Black) ml-5 mr-5 mt-2' },
                    React.createElement(Route, { path: '/bai-viet/5', component: U5 }),
                    React.createElement(Route, { path: '/bai-viet/4', component: U4 }),
                    React.createElement(Route, { path: '/bai-viet/3', component: U3 }),
                    React.createElement(Route, { path: '/bai-viet/2', component: U2 }),
                    React.createElement(Route, { path: '/bai-viet/1', component: U1 })
                )
            );
        }
    }]);

    return Status;
}(React.Component);

export default Status;