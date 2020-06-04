var Cell = React.createClass({
    displayName: "Cell",

    getInitialState: function getInitialState() {
        return { data: "" };
    },

    componentWillMount: function componentWillMount() {
        this.setState({ data: this.props.data });
    },
    onChange: function onChange(evt) {
        console.log(this.state, evt.target.value);
        this.setState({ data: evt.target.value });
    },
    render: function render() {
        var data = this.props.data;
        return React.createElement("input", { value: this.state.data, onChange: this.onChange });
    }
});

var Row = React.createClass({
    displayName: "Row",

    render: function render() {
        return React.createElement(
            "div",
            { className: "row" },
            React.createElement(Cell, { data: this.props.data.name }),
            React.createElement(Cell, { data: this.props.data.location }),
            React.createElement(Cell, { data: this.props.data.phone })
        );
    }
});

var Grid = React.createClass({
    displayName: "Grid",

    render: function render() {
        var rows = this.props.data.map(function (rowData, index) {
            return React.createElement(
                Row,
                { key: index, data: rowData },
                "Row"
            );
        });
        return React.createElement(
            "div",
            { className: "table" },
            rows
        );
    }
});

var Button = React.createClass({
    displayName: "Button",

    getInitialState: function getInitialState() {
        return { data: {} };
    },
    componentWillMount: function componentWillMount() {
        this.setState({ data: this.props.data });
    },
    onClick: function onClick() {
        console.log(this.state);
    },
    render: function render() {
        return React.createElement(
            "button",
            { onClick: this.onClick },
            "Update"
        );
    }
});

var company = {
    name: "Innotech",
    employees: [{ id: "1", name: "Peter", location: "IT", phone: "555-1212" }, { id: "2", name: "Samir", location: "IT", phone: "555-1213" }, { id: "3", name: "Milton", location: "loading dock", phone: "none" }]
};

React.renderComponent(React.createElement(
    "div",
    null,
    React.createElement(Grid, { data: company.employees }),
    React.createElement(Button, { data: company })
), document.getElementById('employees'));