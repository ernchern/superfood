import React from 'react';
import './App.css';

class NutrientIntake extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMode: "daily",
            nutrientContent: {
                sodium: 30,
                protein: 50,
                fat: 74,
            }
        };

        this.setShowMode = this.setShowMode.bind(this);
    }

    setShowMode(id) {
        this.setState({showMode: id});
    }

    render() {
        return (
            <div className="nutrient-intake">
                <h6>Nutrient Intake</h6>
                <nav>
                    <div className="row nav nav-tabs nav-fill">
                        <a className={(this.state.showMode === "daily")? "nav-item nav-link active" : "nav-item nav-link"} onClick={() => this.setShowMode("daily")}>Daily</a>
                        <a className={(this.state.showMode === "weekly")? "nav-item nav-link active" : "nav-item nav-link"} onClick={() => this.setShowMode("weekly")}>Weekly</a>
                        <a className={(this.state.showMode === "monthly")? "nav-item nav-link active" : "nav-item nav-link"} onClick={() => this.setShowMode("monthly")}>Monthly</a>
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
                                    <div className="nutrients-progress-bar" style={{width: this.state.nutrientContent.sodium + "%"}}>{this.state.nutrientContent.sodium + "%"}</div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <p>Protein</p>
                            </div>
                            <div className="col-sm-9">
                                <div className="progress">
                                    <div className="nutrients-progress-bar" style={{width: this.state.nutrientContent.protein + "%"}}>{this.state.nutrientContent.protein + "%"}</div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <p>Fat</p>
                            </div>
                            <div className="col-sm-9">
                                <div className="progress">
                                    <div className="nutrients-progress-bar" style={{width: this.state.nutrientContent.fat + "%"}}>{this.state.nutrientContent.fat + "%"}</div>
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