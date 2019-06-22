import React, { Component } from 'react'


export class ModelDetails extends Component {

    render() {

        return (
            <div>
                {this.props.models.map(model =>
                    <ul>
                        <li>Name: {model.name}</li>
                        <li>Manufacturer: {model.manufacturer}</li>
                        <li>Year: {model.year}</li>
                        <li>Origin: {model.origin}</li>
                    </ul>)}
                <br />
            </div>
        )
    }
}

export default ModelDetails
/*
Workbench

{model.manufacturer}{model.year}{model.origin}



 {this.props.models.map(model =>
                <div>
                    <ul>
                        <li>Name: {model.name}</li>
                        <li>Manufacturer: {model.manufacturer}</li>
                        <li>Year: {model.year}</li>
                        <li>Origin: {model.origin}</li>
                    </ul>
                    <br />
                </div>)}
*/