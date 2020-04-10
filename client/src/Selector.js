import React from 'react';

const Selector = (props) => {
    const changeCountry = e => {
        e.preventDefault()
        props.changeCountry(e.target.value)
    }
    return (
        <div>
            <label htmlFor="countries">Choose your favourite country:</label>
            <select value={props.selectedCountry} onChange={changeCountry} id="countries">
                <option value="All">All</option>{props.countries.map((country, idx) => <option key={idx} value={country}>{country}</option>)}</select>
        </div>
    );
}

export default Selector;
