var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = ReactRouterDOM.Link;

var Content = function (_React$Component) {
    _inherits(Content, _React$Component);

    function Content() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Content);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Content.__proto__ || Object.getPrototypeOf(Content)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            data_status: []
        }, _this.getStatus = function () {
            axios.post('/data_status').then(function (response) {
                var data_status = response.data;
                _this.setState({ data_status: data_status.data });
            }).catch(function () {
                console.log('Somthing wrong');
            });
        }, _this.disPlayStatus = function (data_status) {
            if (!data_status.length) return null;
            return data_status.map(function (status, index) {
                return React.createElement(
                    'div',
                    { 'class': 'mt-4 ml-5 mr-5 h(300) bdc(Black) row rounded' },
                    React.createElement('img', { src: status.url_picture, 'class': 'h-100 w(350) bdc-rt(Black) overflow-hidden rounded', alt: '', srcset: '' }),
                    React.createElement(
                        'div',
                        { 'class': 'item_main wcalc(calcpc350) h-100 float-right h-100' },
                        React.createElement(
                            'div',
                            { 'class': 'title_item h(50) w-100 bdc-bt(Black) rounded' },
                            React.createElement(
                                'div',
                                { 'class': 'title_child h(100pc) wcalc(calcpc200) float-left overflow-hidden' },
                                React.createElement(
                                    Link,
                                    { to: '/chuyen-hang-ngay/' + status.stt_status, 'class': 'ff(Lemon) c(Black) fz(15) font-weight-bold float-left pt-sm-3 pl-5 hov(c-Black):h' },
                                    ' ',
                                    status.title_status,
                                    ' '
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
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'text_item hcalc(calcpc50)' },
                            React.createElement(
                                'div',
                                { 'class': 'left_item hcalc(calcpc50) w-100 float-left' },
                                React.createElement(
                                    'div',
                                    { 'class': 'left_item wcalc(calcpc70) h-100 float-left overflow-hidden' },
                                    React.createElement(
                                        'p',
                                        { 'class': 'ff(Lemon) fz(15) pl-4 Whs(pl)' },
                                        status.data_status
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { 'class': 'right_item w(70) float-right h-100' },
                                    React.createElement('i', { 'class': 'fas fa-share fz(20) pt-3 pr-3 float-right' })
                                )
                            ),
                            React.createElement(
                                'div',
                                { 'class': 'right_item h(50) w-100 float-right' },
                                React.createElement(
                                    'div',
                                    { 'class': 'icon_like float-left pt-3 pl-5' },
                                    React.createElement(
                                        'a',
                                        { 'class': 'cur(p)' },
                                        ' ',
                                        React.createElement('i', { 'class': 'far fa-thumbs-up' }),
                                        ' '
                                    ),
                                    React.createElement(
                                        'a',
                                        { 'class': 'cur(p)' },
                                        React.createElement('i', { 'class': 'far fa-thumbs-down' })
                                    )
                                ),
                                React.createElement(
                                    'a',
                                    { 'class': 'pt-3 pr-3 float-right ff(Lemon) fz(14)' },
                                    ' Nga\u0300y vi\xEA\u0301t ba\u0300i : ',
                                    React.createElement(
                                        'span',
                                        { 'class': 'fz(13)' },
                                        status.date_status
                                    )
                                )
                            )
                        )
                    )
                );
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Content, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getStatus();
        }
    }, {
        key: 'render',
        value: function render() {
            var content = this.state.data_status.filter(function (item) {
                return item.ma_status == 11;
            });
            return React.createElement(
                'div',
                { 'class': 'main_body_status w-100' },
                React.createElement(
                    'div',
                    { 'class': 'main ml-5 mr-5 mt-2 bdc(Black) pb-4 rounded' },
                    this.disPlayStatus(content)
                )
            );
        }
    }]);

    return Content;
}(React.Component);

export default Content;