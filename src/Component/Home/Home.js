import React from 'react';
import LoadCountries from '../LoadCountries/LoadCountries';
import Header from '../Header/Header';
const Home = () => {
    return (
        <>
            <Header></Header>
            <LoadCountries></LoadCountries>
        </>
    );
};

export default Home;