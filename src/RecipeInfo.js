import React from 'react';
import './App.css';
import { Button } from "react-bootstrap";

class RecipeInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="recipe-margin recipe-pane">
                <div className="container">
                    <div className="row recipe-margin headerRecipe">
                        <div className="col-lg-9" style={{position: "relative"}}>
                            <p className="text-vertical-center">
                                Granola with nuts and berries
                            </p>
                            <p className="small-margin font-16">
                                <img src="img/az_flag.png" className="h-15" alt="..."/>
                            </p>
                            <p className="small-margin">
                                <div>
                                    <i class="fa fa-check-circle-o check-icon"/> <p className="icon-text">Nuts Free</p>
                                    <i class="fa fa-check-circle-o check-icon"/> <p className="icon-text">Milk Free</p>
                                </div> 
                                <div style={{marginTop: "-20px"}}>
                                    <i class="fa fa-check-circle-o check-icon"/> <p className="icon-text">Diabetes</p>
                                    <i class="fa fa-check-circle-o check-icon"/> <p className="icon-text">Hypertension</p>
                                </div>
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <img src="img/breakfast.jpg" className="w-100 image-border" alt="..."/>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col colRecipe">
                            <p className="title-recipe">You will need:</p>
                            <p>
                                <ul className="recipe-list">
                                    <li>
                                        Oats: 30g
                                    </li>
                                    <li>
                                        Berries (blueberries/strawberries): 100g
                                    </li>
                                    <li>
                                        Almond milk: 100g
                                    </li>
                                    <li>
                                        Nuts: 20g
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col colRecipe">
                            <p className="title-recipe">Recipe:</p>
                            <p className="recipe-text"> 
                                Leave the oats soak in the milk in the fridge overnight or cook the oats in milk for 5-10 minutes. Put the berries and nuts on top and enjoy.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col colRecipe">
                        <p className="title-recipe">Total Nutrients:</p>
                            <p>
                                <ul className="recipe-list">
                                    <li>
                                        Protein: 10g
                                    </li>
                                    <li>
                                        Carbohydrates: 12g
                                    </li>
                                    <li>
                                        Fats: 5g
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" class="bottom-recipe-row">
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