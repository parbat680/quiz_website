import React from 'react';
function Getdata(props) {
    return <h1>{props.name}</h1>;
}

const greet= React.createElement(
    'h1',
    {className: 'hii'},
    'Hello from Psr'
);

export {Getdata,greet};