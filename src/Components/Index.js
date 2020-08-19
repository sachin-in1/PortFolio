import React from "react";
import About from "./About";
import Things from "./Things";
import Skills from "./Skills";
import Projects from "./Projects";

class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            progress : 0
        };
    }
    render(){
        console.log(this.state.progress);
        
        return(
        <div class="body">
            <About progRess = {this.state.progress}></About>
            <Things progRess = {this.state.progress}></Things>
            <Skills progRess = {this.state.progress}></Skills>
            <Projects progRess = {this.state.progress}></Projects>
          </div>
        );
    }
}
export default Index;