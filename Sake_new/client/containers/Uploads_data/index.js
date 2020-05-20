var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Product from './Item/index_upload.js';
var _React = React,
    state = _React.state;

var Uploads_data = function (_React$Component) {
    _inherits(Uploads_data, _React$Component);

    function Uploads_data(props) {
        _classCallCheck(this, Uploads_data);

        var _this = _possibleConstructorReturn(this, (Uploads_data.__proto__ || Object.getPrototypeOf(Uploads_data)).call(this, props));

        _this.onClick = function (e) {
            alert("you clicked");
        };

        _this.onSetState = function () {
            if (_this.state.isActive === true) {
                _this.setState({
                    isActive: false
                });
            } else {
                _this.setState({
                    isActive: true
                });
            }
        };

        _this.state = {
            data: [{
                id: 1,
                name: 'kamado Nezuko',
                url: '/picture/slides/1.png',
                status: true
            }, {
                id: 2,
                name: 'Kanao',
                url: '/picture/slides/3.png',
                status: true
            }, {
                id: 3,
                name: 'Agasuma Zenitsu',
                url: '/picture/slides/2.png',
                status: true
            }],
            isActive: true
        };
        return _this;
    }

    _createClass(Uploads_data, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            //const els1 = data.data.map((data, index){});
            var els = this.state.data.map(function (datas, index) {
                var result = '';
                if (_this2.state.isActive) {
                    result = React.createElement(
                        'div',
                        { 'class': 'col-xl-4 col-sm-4 col-md-4 col-lg-4 h-100' },
                        React.createElement(
                            'div',
                            { 'class': 'card' },
                            React.createElement('img', { 'class': 'card-img-top', src: datas.url, alt: 'Card image cap' }),
                            React.createElement(
                                'div',
                                { 'class': 'card-body' },
                                React.createElement(Product, {
                                    name: datas.name
                                }),
                                React.createElement(
                                    'a',
                                    { type: 'button', 'class': 'btn btn-primary', onClick: _this2.onClick },
                                    'Go Somewhere'
                                )
                            )
                        )
                    );
                } else {
                    result = "";
                }
                return result;
            });
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'row w(1200) bdc(Black) h(300)' },
                    els
                ),
                React.createElement(
                    'button',
                    { 'class': 'btn btn-secondary', onClick: this.onSetState },
                    'Active: ',
                    this.state.isActive === true ? 'True' : 'False'
                )
            );
        }
    }]);

    return Uploads_data;
}(React.Component);

export default Uploads_data;