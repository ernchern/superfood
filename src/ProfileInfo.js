import React from 'react';
import './App.css';
import NutrientIntake from './NutrientIntake';

class ProfileInfo extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-sm-4 left-column profile-info">
                <h5 className="">SUPERFOOD</h5>
                <div className="profileArea">
                    <p>{this.props.name}</p>
                    <p>Height: {this.props.height}</p>
                    <p>Weight: {this.props.weight}</p>
                    <div className="contatiner row">
                        <div className="col-sm-6 left-column">
                        <button className="profile-button">Edit Profile</button>
                        </div>
                        <div className="col-sm-6 left-column logout-column">
                        <button className="logout-button">Log out</button>
                    </div>
                    </div>
                </div>
                
                <div>
                    <NutrientIntake/>
                </div>

            </div>
        );
    }

}

export default ProfileInfo;