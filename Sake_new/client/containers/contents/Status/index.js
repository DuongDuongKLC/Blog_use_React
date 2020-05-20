var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Header } from '../../../components/Header/index.js';
import { Item_menu, Title_main } from '../../../components/Middle/items/index.js';
import { End } from '../../../components/End/index.js';

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
        }, _this.getStatus = function () {
            axios.post('/data_status').then(function (response) {
                var data_status = response.data;
                var data_show = data_status.data[4];
                _this.setState({ data_status: [data_show] });
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
                                    React.createElement('img', { src: '/bai_viet', 'class': 'h(40) w(40) float-left mt-1 ml-2 rounded-circle bdc(Black)', alt: '', srcset: '' }),
                                    React.createElement(
                                        'a',
                                        { 'class': 'ff(Lemon) c(Black) fz(15) font-weight-bold pt-3 hov(c-Black):h float-right' },
                                        ' ',
                                        sta.title_status,
                                        ' '
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
            this.getStatus();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { 'class': 'middle_main h(30ph) container-fluid' },
                React.createElement(Header, null),
                React.createElement(Item_menu, null),
                React.createElement(Title_main, null),
                React.createElement(
                    'div',
                    { 'class': 'data_status1 bdc(Black) ml-5 mr-5 mt-2' },
                    this.disPlay(this.state.data_status)
                ),
                React.createElement(End, null)
            );
        }
    }]);

    return Status;
}(React.Component);

export default Status;