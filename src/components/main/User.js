import React, {Component} from 'react';
import Details from "./Details";

//icons
import MdAdd from 'react-ionicons/lib/MdAdd'
import MdRemove from 'react-ionicons/lib/MdRemove'

class User extends Component {

    render() {
        const data = this.props.dataUser;
        const {isOpen, onButtonClick, index} = this.props;
        let sign;
        (isOpen) ? sign = <MdRemove  fontSize="55px" color="#666666" /> : sign = <MdAdd  fontSize="55px" color="#666666" />;
        return (
            <tbody>
                <tr onClick={onButtonClick} style={index%2===0 ? {background: '#cccccc'} : null}>
                    <td><img className="img-thumbnail"
                             style={{borderRadius: "50%"}}
                             src={data.picture.medium}
                             alt=""/>
                    </td>
                    <td className="upFirstChar">{data.name.last}</td>
                    <td className="upFirstChar">{data.name.first}</td>
                    <td>{data.login.username}</td>
                    <td>{data.phone}</td>
                    <td className="upFirstChar">{data.location.state}</td>
                    <td>{sign}</td>
                </tr>
                {isOpen && <Details details={data}/>}
            </tbody>
        )
    }
}

export default User;