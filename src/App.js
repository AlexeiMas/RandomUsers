import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header'
import Main from "./components/main/Main";

class App extends Component {
    state = {
        data: undefined,
        newData: undefined,
        len: undefined
    };

    getData = async () => {
        const api_url = await fetch('https://randomuser.me/api/?results=30');
        const data = await api_url.json();
        if (data) {
            console.log("Success", data);
            this.setState({
                data: data.results
            });
        }
    };

    componentDidMount() {
        this.getData()
    }

    updateData = (newData, len) => {
        this.setState({newData: newData});
        this.setState({len: len})
    };

    render() {
        let whatNeed = (this.state.newData) ? this.state.newData : this.state.data;

        return (
            <div className="App" style={(this.state.data) ? {height: "auto"} : {height: "100vh"}}>
                <Header
                    data={this.state.data}
                    updateData={this.updateData}
                    selectData={whatNeed}
                />
                <Main data={whatNeed} len={this.state.len} />
            </div>
        );
    }
}

export default App;
