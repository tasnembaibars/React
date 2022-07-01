///////////////////////////////////////////////////////khaled//////////////////////////////////////////////////////////////////////////////

// import React from 'react';


// class App extends React.Component
// {
//     constructor(){
//         console.log('constructor');
//         super();
//         this.state = {num:1}
//     }
//     componentDidMount(){
//         console.log('componentDidMount');
//     }
//     componentDidUpdate(){
//         console.log('componentDidUpdate');
//     }

//     componentWillUnmount(){
//         console.log('componentWillUnmount')
//     }
//     handleClick =()=>{
//         this.setState({
//             num:this.state.num+1
//         })
//     }

// render(){
//     console.log('render');

//     let comp;
//     if (this.state.num !==3) {
//       comp = <Hello />;
//     }

//     return(
//         <div>
//             {comp}
//             <h1>App</h1>
//             <h3>{this.state.num}</h3>
//             <button onClick={this.handleClick}>Inc</button>
//         </div>
//     );
// }
// }

// // **

// class Hello extends React.Component {
 
//     // Defining the componentWillUnmount method
//     componentWillUnmount() {
//       console.log('componentWillUnmount')
//     }

//     render() {
//       return <h1>Hello</h1>;
//     }
//   }

// export default App;



/////////////////////////////////////////////////////////lujen////////////////////////////////////////////////////////////

// import React from 'react';


// class NameForm extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '',
//     number:''};

//   }

//   handleChangeName=(event)=> {
//     this.setState({
//       name: event.target.value});
//   }
//   handleChangeNum=(event)=> {
//     this.setState({
//       number: event.target.value});
//   }

//   handleSubmit = (event) => {

//     alert('A name was submitted: ' + this.state.name + 'A number was submitted: ' + this.state.number);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.name} onChange={this.handleChangeName} />
//         </label>
//         <select value={this.state.number} onChange={this.handleChangeNum}>
//           <option>select</option> 
//           <option>one</option> 
//           <option>two</option>
//         </select>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
// export default NameForm



///////////////////////////////////////////////////////ahmad//////////////////////////////////////////////////
// Fetch
// React Query library
// useEffect

// Axios library 

//npm install axios

// import React, { Component } from 'react';

// import axios from 'axios';



// async function getUsers() {
//   try {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/users%27);

//     console.log(response);

//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// }



// class ReadDataApi extends Component {

//   state = {
//     users: []
//   }

//   componentDidMount =()=>{
//     getUsers().then(response => {

//       this.setState({

//         users: response.data
//       });
//     });
//   }


//   render() {
//     return (
//       <div className="App">
//         <ul>
//           {
//           this.state.users.map(user=>
//             <li>{user.name}</li>
//           )}
//         </ul>
//       </div>
//     );
//   }
// }

// export default ReadDataApi;




//////////////////////////////////////////esraa////////////////////////////////////////////
// import React, { Component } from "react";

// class Data extends Component {
//   state = {
//     Data: [], // list is empty in the beginning
//     error: false,
//   };

//   componentDidMount() {
//     this.Data(); // function call
//   }

//   Data = async () => {
//     //try to get data
//     const response = await fetch(
//       "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bc63f0c08d018cf26d4cf02b8efde4d7"
//     );
//     if (response.ok) {
//       // ckeck if status code is 200
//       const data = await response.json();
//       this.setState({ Data: data.results });
//     } else {
//       this.setState({ error: true });
//     }
//   };

//   render() {
//     const { Data, error } = this.state;
//     return (
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3,500px 500px)",
//         }}
//       >
//         {Data.length > 0 &&
//           Data.map((film) => (
//             <div
//               className="card"
//               style={{
//                 width: "25rem",
//                 margin: "15px",
//               }}
//             >
//               <div
//                 style={{
//                   height: "22rem",
//                 }}
//               >
//                 <img
//                   src={https://image.tmdb.org/t/p/w500/${film.poster_path}}
//                   style={{
//                     height: "20rem",
//                     width: "25rem",
//                   }}
//                 />
//               </div>

//               <div className="card-body">
//                 <h6><b style={{ color: "orange" }}>Title :</b> {film.title}</h6>
//                 <p className="card-text"><b style={{ color: "orange" }}>Description :</b> {film.overview}</p>
//                 <h6 className="card-title"><b style={{ color: "orange" }}>Rate :</b> {film.vote_average}
// </h6>
//               </div> 
//             </div>
//           ))}
//         {error && <div>Fail, can not display the data</div>}
//       </div>
//     );

//   }
// }
// export default Data;