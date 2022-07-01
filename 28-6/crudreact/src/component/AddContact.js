import React from "react";

class AddContact extends React.Component{
    state={
        name:"",
        email:""
    }

    add=(e)=>{
        e.preventDefault();
        if(this.state.name ==="" && this.state.email ===""){
            alert("All the fields are required");
            return;
        }
        this.props.AddContactHandler(this.state);
        this.setState({name:"",email:""})
    }
render(){
    return(
        <>
        <h2>Add Contact</h2>
        <form onSubmit={this.add}>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="name" className="form-control" value={this.state.name} id="exampleInputEmail1" onChange={(e)=>this.setState({name:e.target.value})} aria-describedby="emailHelp" placeholder="Enter your name"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input type="email" className="form-control" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} id="exampleInputPassword1" placeholder="enter your email"/>
  </div>

  <button type="submit" className="btn btn-primary">Add</button>
</form>
        </>
    )
}
}
export default AddContact;