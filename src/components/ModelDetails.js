import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ModelDetails extends Component {
    static propTypes = {
        models: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                manufacturer: PropTypes.string.isRequired,
                year: PropTypes.number.isRequired,
                origin: PropTypes.string.isRequired
            })
          ),
        /*
        models: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        manufacturer: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        origin: PropTypes.string.isRequired,
        test: PropTypes.string.isRequired
        */
    }
    
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


<div>
                {this.props.models.map(model =>
                    <ul>
                        <li key={model.name}>Name: {model.name}</li>
                        <li key={model.manufacturer}>Manufacturer: {model.manufacturer}</li>
                        <li key={model.key}>Year: {model.year}</li>
                        <li key={model.origin}>Origin: {model.origin}</li>
                    </ul>)}
                <br />
            </div>
*/