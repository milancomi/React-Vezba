import React, { Component } from "react";

export default class MyForm extends React.Component {
    state = {
        first_name: "ben",
        last_name: "zoka",
        rememberMe: true,
        title:'Mr.'

    };


//     handleChange = (event,fieldName,isCheckbox) => {
//         this.setState({
//              [event.target.name]: isCheckbox ? event.target.checked : event.target.value });
//         console.log(event.target.value);

// // DA SE NE BI PRAVILE RAZLICITE FUNKCIJE i zbog stringa stoje uglaste
//         // this.setState({ first_name: event.target.value });

//     };

    
    handleChange = event => {
        const isCheckbox = event.target.type ==='checkbox'
        this.setState({
             [event.target.name]: isCheckbox
              ? event.target.checked 
              : event.target.value });


    };


    // handleChangeLast = (event,fieldName) => {
    //     console.log(fieldName);

        
    //     this.setState({ last_name: event.target.value });
    // };

    // handleChangeCheck = event => {
    //     this.setState({ rememberMe: event.target.checked });
    // };

    // handleSelect = event => {
    //     this.setState({ title: event.target.value });
    // };

    handleSubmit= event =>{
        event.preventDefault();
        console.log(this.state);
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <input name="first_name" value={this.state.first_name} onChange={
                     this.handleChange} />  


                <textarea value={this.state.last_name} onChange={
                    this.handleChange} />
                <input type="checkbox" name="rememberMe" checked={this.state.rememberMe}
                    onChange={this.handleChange} />

                    <select value={this.state.title} name="title" onChange={this.handleSelect}>
                        <option>Mr.</option>
                        <option>Miss.</option>
                        <option>Ms.</option>
                        <option>Mrs.</option>
                        </select>
            {/* <button onClick={this.handleSubmit}>Submit</button> */}
            <button type="submit">Submit</button>

            </div>
            
            </form>
        );
    }
}