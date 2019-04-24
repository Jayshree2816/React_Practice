import React, { Component } from 'react';
import './App.css';
 //import UserOutput from './UserOutput';
// import UserInput from './UserInput';
 import Person from "./Person/Person"

// class App extends Component {
//   state= {
//     persons: [
//       {name : "Jayshree" , age: 29},
//       {name : "Chaitali" , age: 28},
//       {name : "Jayu" , age: 27}
//      ],
//      otherState : "One other value"
//   }
//   switchNameHandler = (nameChange) => {
//     this.setState({
//       persons: [
//         {name : nameChange , age: 29},
//         {name : "Chaitali" , age: 28},
//         {name : "Jayu" , age: 25}
//       ]
//     })
//   }
//   nameChangedHandler = (event) => {
//     this.setState({
//       persons: [
//         {name : "Ani" , age: 29},
//         {name : event.target.value , age: 28},
//         {name : "Jayu" , age: 25}
//       ]
//     })
  
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>React Tutorials</h1>
//         <p>This is really Working</p>

//          {/* Using callback function */}
//         <button onClick= {() => this.switchNameHandler("Aniruddha")} >Switch Name</button>
//         <Person 
//           name = {this.state.persons[0].name} 
//           age= {this.state.persons[0].age}/>
//           {/* Using Bind changed the value of name */}
//         <Person 
//           name = {this.state.persons[1].name} 
//           age= {this.state.persons[1].age}
//           changed={this.nameChangedHandler}> My Hobbies: Racing</Person> 
//         <Person 
//           name = {this.state.persons[2].name} 
//           age= {this.state.persons[2].age} />
//       </div>
//     )
//   }
// }

// export default App;

/* ==================================================================================================================================== */

// useState

// const App = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       {name : "Jayshree" , age: 29},
//       {name : "Chaitali" , age: 28},
//       {name : "Jayu" , age: 27}
//     ]
//   });
  
//   const [otherState] = useState("One other value")

//   console.log(personsState , otherState)

//   const switchNameHandler = () => {
//     //console.log("was Clicked !!!")
//     setPersonsState ({
//       persons: [
//       {name : "Aniruddha" , age: 29},
//       {name : "Chaitali" , age: 28},
//       {name : "Jayu" , age: 25}
//     ]}
//     )
//   }
  
//     return (
//       <div className="App">
//         <h1>React Tutorials</h1>
//         <p>This is really Working</p>
//         <button onClick= {switchNameHandler} >Switch Name</button>
//         <Person name = {personsState.persons[0].name} age= {personsState.persons[0].age}/>
//         <Person name = {personsState.persons[1].name} age= {personsState.persons[1].age}> My Hobbies: Racing</Person>
//         <Person name = {personsState.persons[2].name} age= {personsState.persons[2].age} />
//       </div>
//     );
//   }


// export default App;

/* ==================================================================================================================================== */

// Assignment 1

// class App extends Component {
//   state = {
//     username : "Jayshree@281994"
//   }

//   userNameChangeHandle = (event) => {
//    this.setState({
//     username : event.target.value
//    })
//   }

// render() {
//   const style = {
//     flex : 1,
//     border : '1px solid #eee',
//     padding: 30,
//     marginTop : 15,
//     width : 200
//   }
//   return (
//     <div style= {style}>
//       <UserInput 
//       changed = {this.userNameChangeHandle}
//       currentUsername = {this.state.username}  
//       />
//       <UserOutput 
//       userName= {this.state.username} 
//       />
//       <UserOutput 
//       userName= "JayshreeSonawane"   
//       />
//     </div> 
//   )}
// }
// export default App;

/* ==================================================================================================================================== */

class App extends Component {
  state= {
    persons: [
      {name : "Jayshree" , age: 29},
      {name : "Chaitali" , age: 28},
      {name : "Jayu" , age: 27}
     ],
     otherState : "One other value",
     showPerson : false
  }
  // switchNameHandler = (nameChange) => {
  //   this.setState({
  //     persons: [
  //       {name : nameChange , age: 29},
  //       {name : "Chaitali" , age: 28},
  //       {name : "Jayu" , age: 25}
  //     ]
  //   })
  // }
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { id: "1asa" , name : "Ani" , age: 29},
        { id: "sadxs2" , name : event.target.value , age: 28},
        { id: "sdcsxc2" , name : "Jayu" , age: 25}
      ]
    })
  }
  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex , 1)
    this.setState({persons : persons})
  }

  togglePersonHandle = () => {
    const doesShow = this.state.showPerson
    this.setState({showPerson : !doesShow})
  }

  render() {
    let persons = null;
    if(this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                      click={() => this.deletePersonHandler(index)}
                      name= {person.name} 
                      age= {person.age} 
                      key={person.id}  />
          })}
          {/* <Person 
            name = {this.state.persons[0].name} 
            age= {this.state.persons[0].age}/>
          <Person 
            name = {this.state.persons[1].name} 
            age= {this.state.persons[1].age}
            changed={this.nameChangedHandler}> My Hobbies: Racing</Person> 
          <Person 
            name = {this.state.persons[2].name} 
            age= {this.state.persons[2].age} /> */}
        </div> 
      )
    }

    return (
      <div className="App">
        <h1>React Tutorials</h1>
        <p>This is really Working</p>
         {/* Using callback function */}
        <button onClick= {this.togglePersonHandle}>Switch Name</button>
        {persons}
      </div>
    )
  }
}

export default App;