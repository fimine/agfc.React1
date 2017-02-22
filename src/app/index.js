console.log("wassup!");
import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    render() {
        let user = {
            name: "Anna",
            hobbies: ["Sports"]

        };
        return (
            <div>
                <h1>My Header</h1>

                <div>
                    <Header />
                </div>

                <div>
                    <Home name={"Max"} age={27} user={user}  />
                </div>
            </div>
        );
    }

}

render(<App />, window.document.getElementById("app"));