import React from "react";

export default class FetchRandomUser extends React.Component{
    state={
        loading:true,
        person:null

    }

    async componentDidMount(){
        const url = "https://api.randomuser.me/"
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results[0]);
        this.setState({person:data.results[0], loading:false });

    }
    render(){
        if(this.state.loading){
            return <div>loading...</div>
        }

        if(!this.state.person){
            return <div>didnt't get a person</div>;
        }
        return <div>
            {this.state.loading || !this.state.person ? (
            <div>loading...</div>) : (
            <div>
                <div>{this.state.person.name.first}</div>
                <div>{this.state.person.name.last}</div>
                <img style={{ height: "300px"}} src={this.state.person.picture.large}></img>

            </div>)}

        </div>;
    }
}