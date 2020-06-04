import React from 'react';
import './App.css';
import {Modal} from 'react-bootstrap'; 

class TiredModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"modal-title": "Oats with nuts and berries"};
        this.changeContent = this.changeContent.bind(this)
    }

    changeContent(event) {
        alert(this.props)
        this.setState({ "modal-title": "Deez Nuts" });
        this.setState({ "modal-body recipe": "Hell yeah" });
    }

    render() {
        return (
            <Modal show={this.props.show}>
                        <div >
                    <h5 className="modal-title">Oats with nuts and berries</h5>
                </div>
                <div>
                            <img src="img/breakfast.jpg" className="w-100 image-border" alt="..." />
                </div>
                <div className="modal-body recipe">
                            <h5>Ingredients:</h5>
                            <p>Oats, Berries(blueberries/strawberries), Almond milk, Nuts</p>
                            <h5>Nutrients:</h5>
                    <p>Protein: 10g, Carbohydrates: 12g, Fats: 5g</p>
                    </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" onClick={() => this.props.changeModal(this.props.modalType)}>Confirm</button>
                            <button className="btnSuggestion" onClick={this.changeContent}>Give me another suggestion!</button>
                            <button className="btn btn-secondary" onClick={() => this.props.changeModal(this.props.modalType)}>Close</button>
                        </div>
            </Modal>
        )
    }

    /*render() {
        return (
            <Modal show={this.props.show}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Oats with nuts and berries</h5>
                            <img src="img/breakfast.jpg" className="w-100" alt="..." />
                            <button type="button" className="close" aria-label="Close" onClick={() => this.props.changeModal(this.props.modalType)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body recipe">
                            <h5>You will need:</h5>
                            <p>Oats: 30g(Protein: 1g Carbohydrates: 12g Fats: 1g)
                                <br />Berries(blueberries/strawberries): 100g(Protein: 1g Carbohydrates: 12g Fats: 1g)
                                <br />Almond milk: 100(Protein: 1g Carbohydrates: 12g Fats: 1g)g
                                <br />Nuts: 20g(Protein: 1g Carbohydrates:
                                12g Fats: 1g)</p>
                            <h5>Recipe:</h5>
                            <p>Leave the oats soak in the milk in the fridge overnight or cook the oats in milk for 5-10 minutes. Put the berries and nuts on top and enjoy.</p>
                            <h5>Total nutrients:</h5>
                            <p>Protein: 10g
                                <br />Carbohydrates: 12g
                                <br />Fats: 5g</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" onClick={() => this.props.changeModal(this.props.modalType)}>Confirm</button>
                            <button className="btnSuggestion" onClick={this.changeContent}>Give me another suggestion!</button>
                            <button className="btn btn-secondary" onClick={() => this.props.changeModal(this.props.modalType)}>Close</button>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }*/
}

export default TiredModal;