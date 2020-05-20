export default class Api extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }
    render(){
        var { isLoaded, items} = this.state;
        if(!isLoaded){
            return <div className="load_api"> Loading .... </div>;
        }
        else {
            return(
                <div className="Api">
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                Name: {item.name} | Email: {item.email}
                            </li>
                        ))};
                    </ul>
                </div>
            )
        }
    }
}