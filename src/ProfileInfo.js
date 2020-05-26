import React from 'react';
import './App.css';
import NutrientIntake from './NutrientIntake';

class ProfileInfo extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-sm-4 left-column">
                <h5 className="">SUPERFOOD</h5>
                <p>{this.props.name}</p>
                <p>Height: {this.props.height}</p>
                <p>Weight: {this.props.weight}</p>
                <button className="btn btn-primary">Edit Profile</button>
                <NutrientIntake/>
            </div>
        );
    }

}

export default ProfileInfo;