import React from 'react';
import './App.css';
import { Button } from "react-bootstrap";

class RecipeInfo extends React.Component {
    render() {
        var imgSrc = (this.props.meal.country === "Korea") ? "img/Korea.png" : "img/Azerbaijan.png";
        console.log(imgSrc);
        let ingredients;
        ingredients = String(this.props.meal.ingrediente).split("; ");
        ingredients = ingredients.map(x => x.split(", "));
        return (
            <div className="recipe-margin recipe-pane">
                <div className="container">
                    <div className="row recipe-margin headerRecipe">
                        <div className="col-lg-9" style={{position: "relative"}}>
                            <p className="text-vertical-center">
                                {this.props.meal.name}
                            </p>
                            {(this.props.meal.country === "Global")? 
                            <p></p> :
                            <p className="small-margin font-16">
                                <img src={imgSrc} className="h-15" alt="..."/>
                            </p>
                            }  
                            <p className="small-margin">
                                <div style={{marginBottom: "-20px"}}>
                                    {(this.props.meal.nutsFree)? <p style={{display: "inline-block"}}><i class="fa fa-check-circle-o check-icon"/> <p className="icon-text">Nuts Free</p></p> : <p></p>}
                                    {(this.props.meal.milkFree)? <p style={{display: "inline-block"}}><i class="fa fa-check-circle-o check-icon"/> <p className="icon-text">Milk Free</p></p> : <p></p>}
                                </div> 
                                <div style={{marginTop: "-30px", marginBottom: "-20px"}}>
                                    {(this.props.meal.diabetes)? <p style={{display: "inline-block", marginTop: "-20px"}}><i class="fa fa-check-circle-o check-icon"/> <p className="icon-text">Diabetes</p></p> : <p></p>}
                                    {(this.props.meal.hyper)? <p style={{display: "inline-block", marginTop: "-20px"}}><i class="fa fa-check-circle-o check-icon"/> <p className="icon-text">Hypertension</p></p> : <p></p>}    
                                </div>
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <img src={this.props.meal.img} className="w-100 image-border" alt="..."/>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col colRecipe">
                            <p className="title-recipe">You will need:</p>
                            <p>
                                <ul className="recipe-list">
                                    {(ingredients.map((item, key) =>
                                        <li id={key}>
                                            {item[0] + ": " + item[1]}
                                        </li>))}
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col colRecipe">
                            <p className="title-recipe">Recipe:</p>
                            <p className="recipe-text"> 
                                {this.props.meal.recipe.split("\n\n").map(function(item, key) {
                                    return (
                                        <span>
                                            {item} 
                                            <br/>
                                        </span>
                                    )
                                })}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col colRecipe">
                        <p className="title-recipe">Total Nutrients:</p>
                            <p>
                                <ul className="recipe-list">
                                    <li>
                                        Protein: {this.props.meal.protein}g
                                    </li>
                                    <li>
                                        Sodium: {this.props.meal.sodium}g
                                    </li>
                                    <li>
                                        Fats: {this.props.meal.fat}g
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" className="bottom-recipe-row">
                            <button className="bottom-recipe-row"><p className="recipe-color-p" 
                            onClick={(event) => this.props.toggleRecipeMode(event, null)}>Close</p></button>
                        </div>

                    </div>

                </div>
                
            </div>
            // <div className="modal-dialog modal-dialog-centered">
            //         <div className="modal-content">
            //             <div className="modal-header">
            //                 <h5 className="modal-title">Oats with nuts and berries</h5>
            //                 <button type="button" className="close" aria-label="Close" onClick={(event) => this.props.toggleRecipeMode(event, null)}>
            //             <span aria-hidden="true">&times;</span>
            //         </button>
            //             </div>
            //             <div className="modal-body recipe">
            //                 <h5>You will need:</h5>
            //                 <p>Oats: 30g(Protein: 1g Carbohydrates: 12g Fats: 1g)
            //                     <br/>Berries(blueberries/strawberries): 100g(Protein: 1g Carbohydrates: 12g Fats: 1g)
            //                     <br/>Almond milk: 100(Protein: 1g Carbohydrates: 12g Fats: 1g)g
            //                     <br/>Nuts: 20g(Protein: 1g Carbohydrates:
            //                     12g Fats: 1g)</p>
            //                 <h5>Recipe:</h5>
            //                 <p>Leave the oats soak in the milk in the fridge overnight or cook the oats in milk for 5-10 minutes. Put the berries and nuts on top and enjoy.</p>
            //                 <h5>Total nutrients:</h5>
            //                 <p>Protein: 10g
            //                     <br/>Carbohydrates: 12g
            //                     <br/>Fats: 5g</p>
            //             </div>
            //             <div className="modal-footer">
            //                 <button className="btn btn-primary">I want something new!</button>
            //                 <button className="btn btn-secondary" onClick={(event) => this.props.toggleRecipeMode(event, null)}>Close</button>
            //             </div>
            //         </div>
            //     </div>

        );
    }
}

export default RecipeInfo;