var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactFirebaseFileUpload = function (_React$Component) {
  _inherits(ReactFirebaseFileUpload, _React$Component);

  function ReactFirebaseFileUpload() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactFirebaseFileUpload);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactFirebaseFileUpload.__proto__ || Object.getPrototypeOf(ReactFirebaseFileUpload)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      posts: []
    }, _this.getProducts = function () {
      axios.post('/data').then(function (response) {
        var posts = response.data;
        _this.setState({ posts: posts.data });
      }).catch(function () {
        console.log('Something wrong');
      });
    }, _this.disPlay = function (posts) {
      if (!posts.length) return null;
      return posts.map(function (post, index) {
        return React.createElement(
          'div',
          { 'class': 'data', key: index },
          React.createElement(
            'p',
            null,
            post.stt_user
          ),
          React.createElement(
            'p',
            null,
            post.id_user
          ),
          React.createElement(
            'p',
            null,
            post.user_name
          ),
          React.createElement(
            'p',
            null,
            post.password
          ),
          React.createElement(
            'p',
            null,
            post.gmail_user
          ),
          React.createElement(
            'p',
            null,
            post.date_user
          )
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReactFirebaseFileUpload, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getProducts();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { 'class': 'sjkdias' },
        this.disPlay(this.state.posts)
      );
    }
  }]);

  return ReactFirebaseFileUpload;
}(React.Component);

export default ReactFirebaseFileUpload;