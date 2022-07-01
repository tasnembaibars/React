function ContactCard(props){
    const {id,name,email}=props.contact
return(<>
  <div className="item" >
                <div className="content">
                   <div className="header">{name}</div>
                   <div>{email}</div>
                </div>
                <i class="fa fa-solid fa-trash" style={{color:"red",marginTop:"7px"}}></i>
            </div>
</>);

}
export default ContactCard;