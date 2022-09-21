import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './LoadCountries.css';

const LoadCountries = () => {
    const [countries, setCountries] = useState([]);
    const [response, setResponse] = useState([]);
    const [isLoading, setLoader] = useState([true]);
    useEffect(() => {

        const url = "https://restcountries.com/v3.1/all";
        fetch(url)

            .then(res => {
                if (res.status === 200) {
                    setResponse(true);
                }
                return res.json()
            })
            .then(countries => {
                if (response && countries.length > 0) {
                    setLoader(false);
                }
                return setCountries(countries)
            });
    }, [])
    // console.log(countries);
    console.log(typeof isLoading);
    return (
        <div className='mt-4'>
            <Spinner isLoading={isLoading}></Spinner>
            <div className="countryContainer container">

                {
                    countries.map(country => <Country data={country}></Country>)
                }
            </div>
        </div >
    );
};
const Spinner = (props) => {
    if (props.isLoading) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
    else {
        <div className="spinner-border d-none" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
}
export default LoadCountries;