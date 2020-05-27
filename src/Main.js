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
            date: new Date()
        }

        this.toggleRecipeMode = this.toggleRecipeMode.bind(this);
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
                        <div className="register-text container-fluid">
                            <div className="row" style={{paddingLeft: "1%"}}>
                                <ProfileInfo name={this.state.name} height={this.state.height} weight={this.state.weight}/>
                                {(!this.state.showRecipe)? 
                                <MealInfo currentDate={this.state.date} toggleRecipeMode={this.toggleRecipeMode}/> : 
                                <RecipeInfo toggleRecipeMode={this.toggleRecipeMode}/>}
                            </div>
                        </div>
                    </Row>
                </div>
            </section>
        )
    }
}

export default Main;