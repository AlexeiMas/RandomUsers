import React, {Component} from 'react';

//icons
import IosWoman from 'react-ionicons/lib/IosWoman'
import IosMan from 'react-ionicons/lib/IosMan'

class Details extends Component {
    dateParser = (date) => {
        let parc = date.slice(0, 10).split('-');
        return (parc[1] + '/' + parc[2] + '/' + parc[0])
    };

    render() {
        const data = this.props.details;

        return (
            <tr>
                <td className="bordTopNo"></td>
                <td colSpan="6" className="bordTopNo">
                    <div className="container">
                        <div className="row">
                            <h1 className="upFirstChar">{data.name.first}</h1>
                            {(data.gender === "male") ? <IosMan fontSize="40px" color="#666666"/> :
                                <IosWoman fontSize="40px" color="#666666"/>}
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row"><b>Username</b>{data.login.username}</div>
                                <div className="row"><b>Registered</b>{this.dateParser(data.registered.date)}</div>
                                <div className="row"><b>Email</b>{data.email}</div>
                            </div>
                            <div className="col">
                                <div className="row"><b>Address</b>{data.location.street}</div>
                                <div className="row"><b>City</b>{data.location.city}</div>
                                <div className="row"><b>Zip Code</b>{data.location.postcode}</div>
                            </div>
                            <div className="col">
                                <div className="row"><b>Birthday</b>{this.dateParser(data.dob.date)}</div>
                                <div className="row"><b>Phone</b>{data.phone}</div>
                                <div className="row"><b>Cell</b>{data.cell}</div>
                            </div>
                            <div className="col">
                                <img
                                    className="img-thumbnail"
                                    style={{borderRadius: "50%"}}
                                    src={data.picture.large}
                                    alt=""/>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        )
    }
}

export default Details;