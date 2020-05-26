import React from 'react';
import './App.css';
import Meal from './Meal.js';
import TiredModal from './TiredModal.js';

class MealInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modalBreakfast: false,
            modalLunch: false,
            modalDinner: false,
            date: this.props.currentDate
        }

        this.changeModal = this.changeModal.bind(this);
        this.formatDate = this.formatDate.bind(this);
    }

    changeModal(id) {
        var tmp = this.state[id];
        console.log(!tmp);
        this.setState({[id]: !tmp});
        console.log(this.state);
        
    }

    formatDate() {
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(this.props.date);
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(this.props.date)
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(this.props.date);
        return da + " " + mo;

    }

    render() {
        return (
            <div className="col-sm-8">
                <div className="container menu">
                    <nav>
                        <div className="row align-content-center">
                            <div className="col-3">
                                Previous day
                            </div>
                            <div className="col-6">
                                {this.formatDate()}
                            </div>
                            <div className="col-3">
                                Next day
                            </div>
                                
                        </div>
                        {/* <div className="row nav nav-tabs nav-fill align-content-center" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active" data-toggle="tab" href="#nav-yest" role="tab" aria-controls="nav-yest" aria-selected="true">Yesterday</a>
                            <a className="nav-item nav-link" data-toggle="tab" href="#nav-today" role="tab" aria-controls="nav-today" aria-selected="false">Today</a>
                            <a className="nav-item nav-link" data-toggle="tab" href="#nav-tomorrow" role="tab" aria-controls="nav-tomorrow" aria-selected="false">Tomorrow</a>
                        </div> */}
                    </nav>
                    <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="container">
                                <Meal type={"Breakfast"} changeModal={this.changeModal} modalType={"modalBreakfast"}/>
                                <TiredModal show={this.state.modalBreakfast} changeModal={this.changeModal} modalType={"modalBreakfast"}/>

                                <Meal type={"Lunch"} changeModal={this.changeModal} modalType={"modalLunch"}/>
                                <TiredModal show={this.state.modalLunch} changeModal={this.changeModal} modalType={"modalLunch"}/>

                                <Meal type={"Dinner"} changeModal={this.changeModal} modalType={"modalDinner"}/>
                                <TiredModal show={this.state.modalDinner} changeModal={this.changeModal} modalType={"modalDinner"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MealInfo;