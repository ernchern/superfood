import React from 'react';
import './App.css';
import {Row, Container } from 'react-bootstrap';
import ProfileInfo from './ProfileInfo.js';
import MealInfo from './MealInfo.js';
import RecipeInfo from './RecipeInfo';

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showRecipe: false,
            name: "Aruj Singh",
            height: "191 cm",
            weight: "80 kg",
            date: new Date(),
            dailyRecipes: {}
        }

        this.toggleRecipeMode = this.toggleRecipeMode.bind(this);
        this.generateDailyMeals = this.generateDailyMeals.bind(this);

        this.generateDailyMeals(new Date());
    }

    formatDate(date) {
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
        return da + " " + mo;

    }

    getRandom(items) {
        return items[Math.floor(Math.random() * items.length)];
    }

    generateDailyMeals(date) {
        var formattedDate = this.formatDate(date);
        if (!(formattedDate in this.state.dailyRecipes)) {
            var tmp = this.state.dailyRecipes;
            tmp[formattedDate] = {};
            tmp = tmp[formattedDate];
            tmp["breakfast"] = this.getRandom(this.props.recipes);
            tmp["lunch"] = this.getRandom(this.props.recipes);
            tmp["dinner"] = this.getRandom(this.props.recipes);
        }
        
    }

    toggleRecipeMode(event, mealType) {
        if (event.target.id != "tiredButton") {
            this.setState({showRecipe: !this.state.showRecipe, selectedRecipe: mealType});
        }
        
    }

    render() {
        return (
            <section className="register-section container-box">
                <div className="container">
                    <Row>
                        <div className="register-text container-fluid main-page-white">
                            <div className="row" style={{paddingLeft: "3%"}}>
                                <ProfileInfo name={this.state.name} height={this.state.height} weight={this.state.weight}/>
                                {(!this.state.showRecipe)? 
                                <MealInfo currentDate={this.state.date} toggleRecipeMode={this.toggleRecipeMode}
                                    generateDailyMeals={this.generateDailyMeals} meals={this.state.dailyRecipes}/> : 
                                <RecipeInfo toggleRecipeMode={this.toggleRecipeMode} meal={this.state.selectedRecipe}/>}
                            </div>
                        </div>
                    </Row>
                </div>
            </section>
        )
    }
}

export default Main;