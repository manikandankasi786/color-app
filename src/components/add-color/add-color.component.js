import React from 'react';
import './add-color.component.css'

class AddColorComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            color: ''
        }
        this.onClick = this.onClick.bind(this);
        this.nameChangeListener = this.nameChangeListener.bind(this);
        this.colorChangeListener = this.colorChangeListener.bind(this);
    }

    onClick = function(eventObject){
      this.props.callBackFunction(this.state);     
    }

    nameChangeListener = function(e) {
        this.setState({name: e.target.value});
    }

    colorChangeListener = function(e) {
        this.setState({color: e.target.value});
    }

    render() {
        return (
            <div id="add-color-component" className="AddColorcontainer">
                <h3 className="title">AddColorComponent</h3>
                <form>
                    <div className="formContainer">
                    <div className="form-field">
                        <label>Color : </label>
                        <input type="text" name="color" onChange={this.colorChangeListener}></input>
                    </div>
                    <div className="form-field">
                        <label>Name : </label>
                        <input type="text" name="name" onChange={this.nameChangeListener}></input>
                    </div>
                    <button className="add-button" onClick={this.onClick} type="button">Add Color</button>
                    </div>
                </form>
                <hr></hr>
            </div>
        );
    }
}

export default AddColorComponent;