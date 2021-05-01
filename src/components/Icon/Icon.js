import React from 'react';
import './Icon.css';
import Cloudy from '../../assets/cloudy.svg'
import Rain from '../../assets/rain.svg'
import Snowing from '../../assets/snowing.svg'
import Sun from '../../assets/sun.svg'
import Thermometer from '../../assets/thermometer.svg'

const obj = {
    801: (<img className="icon" src={Cloudy} alt={Cloudy} />),
    802: (<img className="icon" src={Cloudy} alt={Cloudy} />),
    803: (<img className="icon" src={Cloudy} alt={Cloudy} />),
    804: (<img className="icon" src={Cloudy} alt={Cloudy} />),
    200: (<img className="icon" src={Rain} alt={Rain} />),
    201: (<img className="icon" src={Rain} alt={Rain} />),
    202: (<img className="icon" src={Rain} alt={Rain} />),  
    600: (<img className="icon" src={Snowing} alt={Snowing} />),
    601: (<img className="icon" src={Snowing} alt={Snowing} />),
    602: (<img className="icon" src={Snowing} alt={Snowing} />),
    500: (<img className="icon" src={Sun} alt={Sun} />),
    501: (<img className="icon" src={Sun} alt={Sun} />),
    502: (<img className="icon" src={Sun} alt={Sun} />),
    610: (<img className="icon" src={Sun} alt={Sun} />),
    620: (<img className="icon" src={Sun} alt={Sun} />),
    630: (<img className="icon" src={Sun} alt={Sun} />),
    640: (<img className="icon" src={Sun} alt={Sun} />),
};

const Icon = props => {
    if (!props.icon || obj[props.icon] === undefined) {
        return (
            <>
                <img className="icon" src={Thermometer} alt={Thermometer} />
                <h5>{props.description}</h5>
            </>
        );
    }
    return obj[props.icon];
}

export default Icon
