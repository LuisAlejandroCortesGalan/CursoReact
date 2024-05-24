
import React, { Component } from 'react';

class ClassComponent extends Component {
    // HACER UN CONSTRUCTOR
        constructor(props) {
        super(props);
        }
    // HACER UN RENDER
    render(){
        return (
        <>
            <h1>Soy un componente de clase</h1>
            <h1>Props Variable: { this.props.propsFunctional1}</h1>
            <h1>Props String: { this.props.propsFunctional2String}</h1>
            <h1>Props Number: { this.props.propsFunctionalNumber}</h1>
            <h1>Props Objecte: { this.props.propsFunctionalObject.nom}</h1>

        </>
    )
}
}
export default ClassComponent;