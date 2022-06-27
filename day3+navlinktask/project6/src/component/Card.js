import React, { Component } from "react";
class Card extends Component {
    Card() {
        const names = [
            { name: "Ahmad" },
            { name: "Omar" },
            { name: "MOh" },
        ];
        return (
            <>
                {names.map((value) => (
                    <div class="card" style={{ width: "18rem", margin: "3%" }}>
                        <img class="card-img-top" src="./logo192.png" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">{value.name}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                ))}
            </>
        )
    }
    render() {
        return (
            <>
                {this.Card}
            </>
        )
    }


}
export default Card;