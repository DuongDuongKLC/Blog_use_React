var Cell = React.createClass({
    getInitialState: function () {
        return {data: ""};
    },

    componentWillMount: function () {
        this.setState({data: this.props.data});
    },
    onChange: function (evt) {
        console.log(this.state, evt.target.value);
        this.setState({data: evt.target.value});
    },
    render: function () {
        var data = this.props.data;
        return <input value={this.state.data} onChange={this.onChange} />
    }
});

var Row = React.createClass({
    render: function () {
        return (<div className="row">
            <Cell data={this.props.data.name} />
            <Cell data={this.props.data.location} />
            <Cell data={this.props.data.phone} />
        </div>);
    }
});

var Grid = React.createClass({
    render: function () {
        var rows = this.props.data.map(function (rowData, index) {
            return <Row key={index} data={rowData}>Row</Row>;
        });
        return <div className="table">{rows}</div>;
    }
});

var Button = React.createClass({
    getInitialState: function () {
        return {data: {}}
    },
    componentWillMount: function () {
        this.setState({data: this.props.data});
    },
    onClick: function () {
        console.log(this.state);
    },
    render: function () {
        return <button onClick={this.onClick}>Update</button>;
    }
});

var company = {
    name: "Innotech",
    employees: [
        {id: "1", name: "Peter", location: "IT", phone: "555-1212"},
        {id: "2", name: "Samir", location: "IT", phone: "555-1213"},
        {id: "3", name: "Milton", location: "loading dock", phone: "none"}
    ]
};


React.renderComponent(
    <div><Grid data={company.employees} /><Button data={company} /></div>,       
    document.getElementById('employees')
);