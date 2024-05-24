
import React from 'react';


const FunctionalComponent = (props) =>{
    return (
        <>
            <h2>Es un componente funcional</h2>
            <p>Props 1 : {props.props1}</p>
            <p>Props 2 : {props.props2}</p>
            <p>Props 3 : {props.props3}</p>
            <p>Props 4 : {props.props4.nom}</p>

        </>
    )
}
export default FunctionalComponent;