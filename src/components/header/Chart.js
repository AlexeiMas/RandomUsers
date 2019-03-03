import React, {Component} from 'react';
import {PieChart, Pie, Tooltip, Cell} from 'recharts';
import './chart.css'

class Chart extends Component {

    render() {
        const data = this.props.genderPercent;
        const COLORS = ['#7cb5ec', '#434348'];

        return (
            <div className='popup' onClick={this.props.closePopUp}>

                <div className='popup_inner' onClick={e => e.stopPropagation()}>
                    <h1>Gender users</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <PieChart width={400} height={400}>
                                    <Pie isAnimationActive={false} data={data}  outerRadius={160} fill="#8884d8" dataKey="value" label>
                                        {
                                            data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                                        }
                                    </Pie>w
                                    <Tooltip/>
                                </PieChart>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        );
    }
}

export default Chart;