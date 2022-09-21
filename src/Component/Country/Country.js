import React from 'react';
// { flags, name, population, area, region }
const Country = (props) => {
    // console.log(props.data);
    const { flags, name, population, area, region } = props.data;
    // console.log(flags.png);
    return (
        <div className="card">
            <img src={flags.png} className="card-img-top image-fluid p-2 w-75 h-75 mx-auto" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Name : {name.common}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Population : {population}</li>
                    <li class="list-group-item">Area : {area}</li>
                    <li class="list-group-item">Region : {region}</li>
                </ul>
            </div>
            {/* <h1>Hello</h1> */}
        </div>
        // <h1>Hello</h1>

    );
};

export default Country;