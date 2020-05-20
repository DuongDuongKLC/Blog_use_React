var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = ReactRouterDOM.Link;
var Route = ReactRouterDOM.Route;

var ReactFirebaseFileUpload = function (_React$Component) {
  _inherits(ReactFirebaseFileUpload, _React$Component);

  function ReactFirebaseFileUpload() {
    _classCallCheck(this, ReactFirebaseFileUpload);

    return _possibleConstructorReturn(this, (ReactFirebaseFileUpload.__proto__ || Object.getPrototypeOf(ReactFirebaseFileUpload)).apply(this, arguments));
  }

  _createClass(ReactFirebaseFileUpload, [{
    key: "render",
    value: function render() {
      var Home = function Home(props) {
        return React.createElement(
          "h1",
          null,
          "HOME"
        );
      };
      var A = function A(props) {
        return React.createElement(
          "h1",
          null,
          "A"
        );
      };
      var B = function B(props) {
        return React.createElement(
          "h1",
          null,
          "B"
        );
      };
      return React.createElement(
        ReactRouterDOM.HashRouter,
        null,
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: "/" },
              "TO HOME"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: "/a" },
              "TO A"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: "/b" },
              "TO B"
            )
          )
        ),
        React.createElement(Route, { path: "/", exact: true, component: Home }),
        React.createElement(Route, { path: "/a", component: A }),
        React.createElement(Route, { path: "/b", component: B })
      );
    }
  }]);

  return ReactFirebaseFileUpload;
}(React.Component);

export default ReactFirebaseFileUpload;