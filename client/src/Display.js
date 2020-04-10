import React, { useEffect } from 'react';
import Selector from './Selector'
import Chart from './Chart'
import {useLocalStorage} from './hooks/useLocalStorage'

const Display = (props) => {
    const [country, setCountry] = useLocalStorage('country', 'All')

    const getCountries = () => {
        let uniqueCountries = []
        props.players.forEach(p => {
            if(!uniqueCountries.includes(p.country)) {
                uniqueCountries.push(p.country)
        }})
        return uniqueCountries
    }
    const changeCountry = c => setCountry(c)

    const formatData = () => {
        if(country === 'All') {
            return allCountryData()
        } else {
            return specificCountryData(country)
        }
    }

    const specificCountryData = c => {
        return props.players.filter(p => p.country === c).map(p => ({Name: p.name, Searches: p.searches}))
    }

    const allCountryData = () => {
        return getCountries().map(c => {
            return {
                Name: c, 
                Searches: specificCountryData(c).reduce((total, player) => total + player.Searches, 0)
            }
        })
    }

    return (
        <div>
            <Selector changeCountry={changeCountry} selectedCountry={country} countries={getCountries()}/>
            <Chart data={formatData()}/>
        </div>
    );
}

export default Display;
