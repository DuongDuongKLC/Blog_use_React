const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
export default class ReactFirebaseFileUpload extends React.Component {
  render() {
    const Home = props => <h1>HOME</h1>
    const A = props => <h1>A</h1>
    const B = props => <h1>B</h1>
    return (
      <ReactRouterDOM.HashRouter>
          <ul>
            <li><Link to="/">TO HOME</Link></li>
            <li><Link to="/a">TO A</Link></li>
            <li><Link to="/b">TO B</Link></li>
          </ul>

          <Route path="/" exact component={Home} />
          <Route path="/a" component={A} />
          <Route path="/b" component={B} />
      </ReactRouterDOM.HashRouter>
    );
  }
}