import React from 'react';
import './App.css';

class Meal extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        let ingredients, nutrients;
        ingredients = String(this.props.meal.ingrediente).split("; ");
        ingredients = ingredients.map(x => x.split(", ")[0]);
        ingredients = ingredients.join(", ");
        return(
            <div className="row no-gutters bg-light position-relative meal">
                <div className="col-md-4 mb-md-0 p-md-4">
                    <img src={this.props.meal.img} className="w-100" alt="..."/>
                </div>
                <div className="col-md-8 position-static p-4 pl-md-0 ">
                    <h5 className="mt-0">{this.props.type}</h5>
                    <h6 className="mt-0">{this.props.meal.name}</h6>
                    <p>Ingredients: {ingredients}. <br/> 
                    Nutrients: Protein: {this.props.meal.protein}g, Sodium: {this.props.meal.sodium}mg, Fats: {this.props.meal.fat}g</p>
                    <button id="tiredButton" className="secondary-btn" onClick={() => this.props.changeModal(this.props.modalType)}>I want something new!</button>
                </div>
            </div>
        );
    }
}

export default Meal;