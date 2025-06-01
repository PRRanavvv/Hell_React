import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "default",
                avatar_url: "http://dummy-photo.com",
            },
        };
        //console.log("Child Constructor");
    }

    async componentDidMount() {
        //console.log(this.props.name + "Child Component Did Mount");
        // API Call

        const data = await fetch ("https://api.github.com/users/PRRanavvv");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
    }

    componentDidUpdate() {
        console.log("Component did update")
    }

    render() {

        const {name,location, avatar_url} = this.state.userInfo
        //console.log("Child Render");

        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <img src = {avatar_url}></img>
                <h4>Contact: @ranapranav333@gmail.com</h4>
            </div>
        );
    }
}

export default UserClass;