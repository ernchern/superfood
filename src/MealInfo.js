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
        this.setState({[id]: !tmp});
        
    }

    formatDate() {
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(this.state.date);
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(this.state.date)
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(this.state.date);
        return da + " " + mo;

    }

    changeDate(change) {
        var newDate = new Date(this.state.date.getFullYear(), this.state.date.getMonth(), this.state.date.getDate() + change);
        this.setState({date: newDate});

    }

    render() {
        return (
            <div className="col-sm-8">
                <div className="container">
                    <nav>
                        <div className="row align-content-center">
                            <div className="col-3">
                            <button className="btn btn-primary fillDiv" onClick={() => this.changeDate(-1)}>Previous day</button>
                            </div>
                            <div className="col-6 dateDiv" onClick={() => this.setState({date: new Date()})}>
                                {this.formatDate()}
                            </div>
                            <div className="col-3">
                                <button className="btn btn-primary fillDiv" onClick={() => this.changeDate(1)}>Next day</button>
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
                                <div onClick={(event) => this.props.toggleRecipeMode(event, "breakfast")}>
                                    <Meal type={"Breakfast"} changeModal={this.changeModal} modalType={"modalBreakfast"}/>
                                </div>
                                <TiredModal show={this.state.modalBreakfast} changeModal={this.changeModal} modalType={"modalBreakfast"}/>
                                <div onClick={(event) => this.props.toggleRecipeMode(event, "lunch")}>
                                    <Meal type={"Lunch"} changeModal={this.changeModal} modalType={"modalLunch"}/>
                                </div>
                                <TiredModal show={this.state.modalLunch} changeModal={this.changeModal} modalType={"modalLunch"}/>

                                <div onClick={(event) => this.props.toggleRecipeMode(event, "dinner")}>
                                    <Meal type={"Dinner"} changeModal={this.changeModal} modalType={"modalDinner"}/>
                                </div>
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