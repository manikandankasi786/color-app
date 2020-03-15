import React from 'react';
import './display-color.component.css'

class DisplayColorComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render() {

        let cardStyle ={
            backgroundColor: this.props.color ? this.props.color : '#00000000'
        }

        return(
            <div id="add-color-component" className="DisplayColorContainer">
                <h3 className="title">DisplayColorComponent</h3>
                <div className="color-bar" style={cardStyle} >
                    <div><h4>Name : {this.props.name}</h4></div>
                    <div className="color"><h4>color : {this.props.color}</h4></div>                    
                </div>
            </div>
        );
    }
}

export default DisplayColorComponent;