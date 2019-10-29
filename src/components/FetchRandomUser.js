import React from "react";

export default class FetchRandomUser extends React.Component{
    state={
        loading:true,
        people:[]

    }

    async componentDidMount(){
        const url = "https://api.randomuser.me/?results=5"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({poeple:data.results, loading:false });

    }
    render(){
        if(this.state.loading){
            return <div>loading...</div>
        }

        if(!this.state.people){
            return <div>didnt't get a people</div>;
        }




    // 1. MAPIRANJE
        return (
         <div>
                {this.state.poeple.map(person=>(
                    // 1. divu se dodaje nesto unique da ne ostane prazan
                <div key={person.login.uuid}> 
                 {/* 2. da se na svakom foreachu indeksira
                {this.state.poeple.map((person,i)=>(
                <div key={'some-person-${i}'}></div> */}
        
                <div>{person.name.title}</div>
                <div>{person.name.first}</div>
                <div>{person.name.last}</div>
                <img style={{ height: "300px"}} src={person.picture.large}></img>
            </div>))}
        </div>
        );

/*
        2. Pakovanje u konstantu

        const peopleJsx = this.state.poeple.map(person=>(
        <div key={person.login.uuid}> 
        <div>{person.name.title}</div>
        <div>{person.name.first}</div>
        <div>{person.name.last}</div>
        <img style={{ height: "300px"}} src={person.picture.large}></img>
        </div>
    ));
         3. Foreach Array pakovanje
        const peopleJsx = [];
        this.state.poeple.forEach((person)=> {
            peopleJsx.push(
                <div key={person.login.uuid}> 
                <div>{person.name.title}</div>
                <div>{person.name.first}</div>
                <div>{person.name.last}</div>
                <img style={{ height: "300px"}} src={person.picture.large}></img>
            </div>
            );
        }
        );

        console.log(peopleJsx);
        return <div>{peopleJsx}</div>;
        
*/
    }
}