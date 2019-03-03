import React, {Component} from 'react';
import Chart from "./Chart";

class Header extends Component {
    state = {
        isClick: false,
        sendPercent: null
    };
    dataSearch = (e) => {
        let value = e.target.value.toLowerCase();
        let len = null;
        if (this.props.data) {
            const filter = this.props.data.filter(user => {
                return user.name.first.toLowerCase().includes(value);
            });
            len = filter.length;
            this.props.updateData(filter, len);
        }
    };
    getGenderCount = ({data = this.props.selectData}) => {
        let male = null, female = null;
        if (data) {
            data.forEach((person) => {
                (person.gender === "male") ? male += 1 : female += 1
            })
        }
        this.getPercent(male, female);
        return (this.toggleChart())
    };
    getPercent = (m, f) => {
        const all = m + f;
        let men = 100 * m / all;
        let women = 100 * f / all;
        men = Math.round(men * 10) / 10;
        women = Math.round(women * 10) / 10;
        return (
            this.setState({sendPercent: [{name: 'Male', value: men}, {name: 'Female', value: women}]})
        )
    };

    toggleChart = () => {
        this.setState({isClick: !this.state.isClick});
        (!this.state.isClick) ? document.body.style.overflow = "hidden" : document.body.style.overflow = null;
    };

    render() {

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 padTopBot">
                            <button onClick={this.getGenderCount}
                                    type="button" className="btn btn-secondary"
                            >Show chart
                            </button>
                            {this.state.isClick &&
                            <Chart genderPercent={this.state.sendPercent}
                                   closePopUp={this.toggleChart}
                            />}
                        </div>
                        <div className="col-lg-8 padTopBot">
                            <input className="form-control"
                                   type="text"
                                   autoFocus
                                   placeholder="Enter First Name for searching..."
                                   onChange={this.dataSearch}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;