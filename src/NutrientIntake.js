import React from 'react';
import './App.css';

class NutrientIntake extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMode: "daily",
            nutrientContent: {
                sodium: 50,
                protein: 50,
                fat: 50,
            }
        };

        this.setShowMode = this.setShowMode.bind(this);
    }

    componentDidMount() {
        // console.log(this.props.currRecipe);
        // var sumProtein = this.props.currRecipe.breakfast.protein + this.props.currRecipe.lunch.protein + this.props.currRecipe.dinner.protein;
        // var sumFat = this.props.currRecipe.breakfast.fat + this.props.currRecipe.lunch.fat + this.props.currRecipe.dinner.fat;
        // var sumSodium = this.props.currRecipe.breakfast.sodium + this.props.currRecipe.lunch.sodium + this.props.currRecipe.dinner.sodium;

        // this.setState(
        //     {nutrientContent: {
        //         sodium: Math.min(sumSodium/1000, 100),
        //         protein: Math.min(sumProtein/150, 100),
        //         fat: Math.min(sumProtein/75, 100),
        //     }}
        // );
       this.setShowMode("daily");
    }

    componentWillReceiveProps() {
        this.setShowMode("daily");
    }

    setShowMode(id) {
        var recipe = this.props.dailyRecipes[this.props.date];
        this.setState({showMode: id});

        var sumProtein = recipe.breakfast.protein + recipe.lunch.protein + recipe.dinner.protein;
        var sumFat = recipe.breakfast.fat + recipe.lunch.fat + recipe.dinner.fat;
        var sumSodium = recipe.breakfast.sodium + recipe.lunch.sodium + recipe.dinner.sodium;

        if (id == "weekly") {
            this.setState(
                {nutrientContent: {
                    sodium: Math.min(Math.round(sumSodium/1250*100 * 10)/10, 100),
                    protein: Math.min(Math.round(sumProtein/70*100 * 10)/10, 100),
                    fat: Math.min(Math.round(sumProtein/70*100 * 10)/10, 100),
                }}
            );
        } else if (id == "monthly") {
            this.setState(
                {nutrientContent: {
                    sodium: Math.min(Math.round(sumSodium/1350*100 * 10)/10, 100),
                    protein: Math.min(Math.round(sumProtein/90*100 * 10)/10, 100),
                    fat: Math.min(Math.round(sumProtein/65*100 * 10)/10, 100),
                }}
            );
        } else {
            this.setState(
                {nutrientContent: {
                    sodium: Math.min(Math.round(sumSodium/1400*100 * 10)/10, 100),
                    protein: Math.min(Math.round(sumProtein/85*100 * 10)/10, 100),
                    fat: Math.min(Math.round(sumProtein/75*100 * 10)/10, 100),
                }}
            );
        }

    }

    render() { 
        return (
            <div className="nutrient-intake">
                <h6>Nutrients Taken</h6>
                <nav className="nutrient-nav">
                    <div className="row nav nav-tabs nav-fill">
                        <a className={(this.state.showMode === "daily")? "nav-item nav-link active " : "nav-item nav-link"} onClick={() => this.setShowMode("daily")}>Today</a>
                        <a className={(this.state.showMode === "weekly")? "nav-item nav-link active" : "nav-item nav-link"} onClick={() => this.setShowMode("weekly")}>This Week</a>
                        <a className={(this.state.showMode === "monthly")? "nav-item nav-link active" : "nav-item nav-link"} onClick={() => this.setShowMode("monthly")}>This Month</a>
                    </div>
                </nav>
                <div className="tab-content py-3 px-3 px-sm-0 nutrients-progress" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="row">
                            <div className="col-sm-3 nutrient-row">
                                <p>Sodium</p>
                            </div>
                            <div className="col-sm-9">
                                <div className="progress">
                                    <div className="nutrients-progress-bar" style={{width: this.state.nutrientContent.sodium + "%"}}>{this.state.nutrientContent.sodium + "%"}</div>
                                </div>
                            </div>
                            <div className="col-sm-3 nutrient-row">
                                <p>Protein</p>
                            </div>
                            <div className="col-sm-9">
                                <div className="progress">
                                    <div className="nutrients-progress-bar" style={{width: this.state.nutrientContent.protein + "%"}}>{this.state.nutrientContent.protein + "%"}</div>
                                </div>
                            </div>
                            <div className="col-sm-3 nutrient-row">
                                <p>Fat</p>
                            </div>
                            <div className="col-sm-9">
                                <div className="progress">
                                    <div className="nutrients-progress-bar" style={{width: this.state.nutrientContent.fat + "%"}}>{this.state.nutrientContent.fat + "%"}</div>
                                </div>
                            </div>
                            <div class="nutrients-info-box">
                                <p style={{float: "right", textAlign: "right", textSize: "0.75rem"}}>
                                    % Daily Values based on your daily nutrient needs
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NutrientIntake;