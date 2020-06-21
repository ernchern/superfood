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
                    <p>{this.props.user.name + " " + this.props.user.lastName}</p>
                    <p style={{display: (this.props.user.height == null)? "none" : "block"}}>Height: {this.props.user.height + "m"}</p>
                    <p style={{display: (this.props.user.weight == null)? "none" : "block"}}>Weight: {this.props.user.weight + "kg"}</p>
                    <div className="contatiner row">
                        <div className="col-sm-6 left-column" style={{marginTop: "0px"}}>
                        <button className="profile-button" onClick={() => this.props.setPage("register")}>Edit Profile</button>
                        </div>
                    </div>
                    <div className="contatiner row">
                        <div className="col-sm-6 left-column" style={{marginTop: "0px"}}>
                        <button className="logout-button" onClick={() => this.props.logout()}>Log out</button>
                        </div>
                    </div>
                </div>
                
                <div>
                    <NutrientIntake date={this.props.date} dailyRecipes={this.props.dailyRecipes}/>
                </div>

            </div>
        );
    }

}

export default ProfileInfo;