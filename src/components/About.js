import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {

    constructor(props) {
        super (props);

        //console.log("Parent Constructor")
    }
    render() {
        //console.log("Parent Render")
        return (
            <div>
                <h1>About class component</h1>
                <h2>This is HELL for React </h2>
                <UserClass name = {"PranavVv (classes)"} location = {"New York"} />
            </div>
        );
    }
};

export default About;