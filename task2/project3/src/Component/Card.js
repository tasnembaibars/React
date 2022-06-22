import React  from 'react';
class Card extends React.Component {
    // constructor(props){
    //     super(props);
    //     // this.state={
    //     // //  name:"ahmad",
    //     // //  major:"CS",
    //     // //  year:"third"
    //     // }
    // }
    render() {

        return (
        <div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../logo192.png" alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">student name :{this.props.name}</h5>
                    <p class="card-text">student major :</p>
                    <p class="card-text">student major :</p>
                </div>
            </div>
        </div>)
    };
   

}
export default Card;