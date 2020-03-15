import React from 'react';
import DisplayColorComponent from '../display-color/display-color.component';
import AddColorComponent  from '../add-color/add-color.component';
import './favourite-color.component.css'


class FavouriteColorComponent extends React.Component{

    constructor(props){
        super(props);
        this.formDetails = this.formDetails.bind(this);
    }

    formDetails = function(data) {
        this.setState(data);
    } 

    render() {
        return(
            <div id="favourite-color-component" className="container">
                <AddColorComponent callBackFunction={this.formDetails}></AddColorComponent>
                <DisplayColorComponent name={this.state?.name} color={this.state?.color}></DisplayColorComponent>
            </div>
        );
    }
}

export default FavouriteColorComponent;