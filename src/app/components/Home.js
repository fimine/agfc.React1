import React from "react";

export class Home extends React.Component{
    render(){
        console.log(this.props);
        let text = "My text!";
        return(
            <div>
                <p>In a new component!</p>
                <p>{text}</p>
                <p>Your name is {this.props.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                    {this.props.user.hobbies.map((h, i)=> <li key="{i}">{h} </li>)  }
                    </ul>
                </div>
                {this.props.children}
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object,
     children:React.PropTypes.element.isRequired
}