import React from 'react';
import './App.css';
import {Modal} from 'react-bootstrap'; 

class TiredModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMe: false
        }
        this.recipe = this.recipe.bind(this);
    }
    

    recipe() {
        this.setState({
            showMe:!this.state.showMe
        })
    }

    close() {
        this.setState({
            showMe: false
        })
    }

    render() {
        let ingredients;
        if (this.props.meal != null) {
            ingredients = String(this.props.meal.ingrediente).split("; ");
            ingredients = ingredients.map(x => x.split(", ")[0]);
            ingredients = ingredients.join(", ");
        }
        var mealType = (this.props.modalType == "modalBreakfast") ? "breakfast" : (this.props.modalType == "modalLunch") ? "lunch" : "dinner";
        return (
            <Modal show={this.props.show}>
                <view className="row" style={{ paddingLeft: "15px", paddingRight: "15px", paddingTop: "10px" } }>
                    <view className = "col-9">
                        <p className="text-vertical-center">
                            {(this.props.meal != null) ? this.props.meal.name : ""}
                            </p>
                        <button className="recipe-btn" onClick={this.recipe}> View Recipe</button>
                    </view>
                    <view className = "col-3">
                        <img src={(this.props.meal != null) ? this.props.meal.img : ""} className="w-100 image-border" alt="..." />
                    </view>
                </view>
            <view style={{ paddingLeft: "15px", paddingTop: "10px", paddingBottom: "10px"}}>
                    {
                        this.state.showMe ?
                            <div className="row-md-3" style={{ position: "relative" }}>
                                <h5>Recipe:</h5>
                                <p className="recipe-text" style={{ paddingRight: "20px" }}>
                                    {(this.props.meal != null) ? this.props.meal.recipe.split("\n").map(function(item, key) {
                                        return (
                                            <span>
                                                {item} 
                                                <br/>
                                            </span>
                                        )
                                    }): ""}
                                </p>
                            </div>
                            : null
                    }
                </view>
                <view style={{ paddingLeft: "15px", paddingRight: "20px" }}>
                        <h5>Ingredients:</h5>
                        <p>{ingredients}</p>
                        <h5>Nutrients:</h5>
                        <p>Protein: {(this.props.meal != null) ? this.props.meal.protein : ""}g,
                         Sodium: {(this.props.meal != null) ? this.props.meal.sodium : ""}mg,
                          Fats: {(this.props.meal != null) ? this.props.meal.fat : ""}g</p>
                </view>
                <view className="modal-footer" style={{ border: "none" }}>
                    <button className="confirm-btn" onClick={() => { this.close(); 
                        this.props.setMealTired(this.props.date, mealType, this.props.meal); 
                        this.props.changeModal(this.props.modalType) }}>Confirm</button>
                            <button className="suggestion-btn" onClick={this.props.randomizeSuggestion}>Give me another suggestion!</button>
                    <button className="cancel-btn" onClick={() => { this.close(); this.props.changeModal(this.props.modalType) }}>Cancel</button>
                </view>
            </Modal>
        )
    }

    /*render() {
        return (
            <Modal show={this.props.show}>
                <div className="row">
                    <div className="col-sm-9" style={{ paddingLeft: '30px' }}>
                        <p className="text-vertical-center">
                            Oats with nuts and berries
                            </p>
                        <p className="small-margin">
                            <button className="btnRecipe" onClick={this.recipe}> View Recipe</button>
                        </p>
                    </div>
                    <div className="col-sm-3">
                        <img src="img/breakfast.jpg" className="w-100 image-border" alt="..." />
                    </div>
                </div>
                <div className="row-md-1" style={{ paddingLeft: '16px' }}>
                    {
                        this.state.showMe ?
                            <div className="row-md-3" style={{ position: "relative" }}>
                                <h5>Recipe:</h5>
                                <p className="recipe-text">Leave the oats soak in the milk in the fridge overnight or cook the oats in milk for 5-10 minutes.
                <br />Put the berries and nuts on top and enjoy.</p>
                            </div>
                            : null
                    }
                </div>
                <div className="modal-body recipe">
                    <h5>Ingredients:</h5>
                    <p>Oats, Berries(blueberries/strawberries), Almond milk, Nuts</p>
                    <h5>Nutrients:</h5>
                    <p>Protein: 10g, Carbohydrates: 12g, Fats: 5g</p>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" onClick={() => { this.close(); this.props.changeModal(this.props.modalType) }}>Confirm</button>
                    <button className="btnSuggestion" onClick={this.changeContent}>Give me another suggestion!</button>
                    <button className="btn btn-secondary" onClick={() => { this.close(); this.props.changeModal(this.props.modalType) }}>Close</button>
                </div>
            </Modal>
        )
    }*/


}

export default TiredModal;