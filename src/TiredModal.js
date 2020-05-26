import React from 'react';
import './App.css';
import {Modal} from 'react-bootstrap'; 

class TiredModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal show={this.props.show}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Oats with nuts and berries</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                        </div>
                        <div className="modal-body recipe">
                            <h5>You will need:</h5>
                            <p>Oats: 30g(Protein: 1g Carbohydrates: 12g Fats: 1g)
                                <br/>Berries(blueberries/strawberries): 100g(Protein: 1g Carbohydrates: 12g Fats: 1g)
                                <br/>Almond milk: 100(Protein: 1g Carbohydrates: 12g Fats: 1g)g
                                <br/>Nuts: 20g(Protein: 1g Carbohydrates:
                                12g Fats: 1g)</p>
                            <h5>Recipe:</h5>
                            <p>Leave the oats soak in the milk in the fridge overnight or cook the oats in milk for 5-10 minutes. Put the berries and nuts on top and enjoy.</p>
                            <h5>Total nutrients:</h5>
                            <p>Protein: 10g
                                <br/>Carbohydrates: 12g
                                <br/>Fats: 5g</p>
                        </div>
                        <div className="modal-footer">
                            <a href="#tiredOfThis" className="btn btn-primary" data-dismiss="modal" data-toggle="modal">I want something new!</a>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => this.props.changeModal(this.props.modalType)}>Close</button>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default TiredModal;