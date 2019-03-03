import React, {Component} from 'react';
import User from "./User";
import NoMatch from "./NoMatch"
import "./main.css"

class Main extends Component {
    state = {
        openById: null
    };
    handleClick = (openById) => {
        this.setState({
            openById: this.state.openById === openById ? null : openById
        })
    };

    render() {
        const {data, len} = this.props;
        let userList = null;
        let isMatch;
        if (data) {
            userList = data.map((user, index) =>
                <User key={user.login.uuid}
                      dataUser={user}
                      isOpen={this.state.openById === user.login.uuid}
                      onButtonClick={this.handleClick.bind(this, user.login.uuid)}
                      index={index}
                />);
        }
        isMatch = (len !== 0) ? userList : <NoMatch/>;

        return (
            <div>
                <div className="container">
                    <form className="row">
                        <table className="table table-responsive-md">
                            <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Last</th>
                                <th scope="col">First</th>
                                <th scope="col">Username</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Location</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            {isMatch}
                        </table>
                    </form>
                </div>
            </div>
        )
    }
}

export default Main;