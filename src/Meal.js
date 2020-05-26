import React from 'react';
import './App.css';

class Meal extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="row no-gutters bg-light position-relative">
                <div className="col-md-6 mb-md-0 p-md-4">
                    <img src="img/breakfast.jpg" className="w-100" alt="..."/>
                </div>
                <div className="col-md-6 position-static p-4 pl-md-0">
                    <h5 className="mt-0">{this.props.type}</h5>
                    <h6 className="mt-0">Granola with nuts and berries</h6>
                    <p>Ingredients: Nuts, oats, berries, almond milk. Nutrients: Protein: 10g, Carbohydrates: 12g, Fats: 5g</p>
                    <button className="btn btn-primary" onClick={() => this.props.changeModal(this.props.modalType)}>I want something new!</button>
                </div>
            </div>
        );
    }
}

export default Meal;