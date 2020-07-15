import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            test: 'test'
        };

        const { testProp } = props;

        this.clickHandler = this.clickHandler.bind(this);

        console.log(testProp);
    }

    componentDidMount(){
        console.log("componentDidMount");
        this.setState({test: 'test2' });
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    clickHandler(){
        console.log(JSON.stringify(this.state));
    }

    clickHandler2 = () => {                    // with arrow function binding is not needed on this.state
        this.setState({test: 'test3' }, () =>{
            console.log(JSON.stringify(this.state));
        });
    };

    render() {
        return (
            <>
                <h1>Class Component</h1>
                <h2>Some Text</h2>
                <h2>{JSON.stringify(this.state)}</h2>
                <button onClick={this.clickHandler2}>Click Me</button>
            </>
        );
    }
}

export default ClassComponent;