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
            date: new Date(),
            dailyRecipes: {},
            currDate: this.formatDate(new Date())
        }

        this.toggleRecipeMode = this.toggleRecipeMode.bind(this);
        this.generateDailyMeals = this.generateDailyMeals.bind(this);

        this.generateDailyMeals(new Date());

        this.setCurrentDate = this.setCurrentDate.bind(this);
        this.setMealTired = this.setMealTired.bind(this);
    }

    formatDate(date) {
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
        return da + " " + mo;

    }

    setMealTired(date, type, meal) {
        //var formattedDate = this.formatDate(date);
        var tmp = this.state.dailyRecipes[date];
        tmp[type] = meal;
        if (date == this.formatDate(new Date())) {
            this.setState({dailyRecipes: this.state.dailyRecipes});
        }
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
            //this.setState({dailyRecipes: tmp});
        }
        
    }

    setCurrentDate(date) {
        var formattedDate = this.formatDate(date);
        this.setState({currDate: formattedDate});
    }

    logout = () => {
        this.props.setLoggedUserNull();
        this.props.setPage("login");
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
                                <ProfileInfo 
                                date={this.formatDate(new Date())} dailyRecipes={this.state.dailyRecipes}
                                user={this.props.user} logout={this.logout} setPage={this.props.setPage}/>
                                {(!this.state.showRecipe)? 
                                <MealInfo currentDate={this.state.date} toggleRecipeMode={this.toggleRecipeMode}
                                    generateDailyMeals={this.generateDailyMeals} meals={this.state.dailyRecipes}
                                    setCurrentDate={this.setCurrentDate} allMeals={this.props.recipes}
                                    setMealTired={this.setMealTired}/> : 
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