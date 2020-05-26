import React from 'react';
import './App.css';

class NutrientIntake extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nutrient-intake">
                <h6>Nutrient Intake</h6>
                <nav>
                    <div className="row nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Daily</a>
                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Weekly</a>
                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Monthly</a>
                    </div>
                </nav>
                <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="row">
                            <div className="col-sm-3">
                                <p>Sodium</p>
                            </div>
                            <div className="col-sm-9">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: "35%"}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">35%</div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <p>Protein</p>
                            </div>
                            <div className="col-sm-9">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <p>Fat</p>
                            </div>
                            <div className="col-sm-9">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: "%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NutrientIntake;