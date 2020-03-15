import React from 'react';
import DisplayColorComponent from '../display-color/display-color.component';
import AddColorComponent  from '../add-color/add-color.component';


class FavouriteColorComponent extends React.Component{
    render() {
        return(
            <div id="favourite-color-component">
                <AddColorComponent></AddColorComponent>
                <DisplayColorComponent></DisplayColorComponent>
            </div>
        );
    }
}

export default FavouriteColorComponent;