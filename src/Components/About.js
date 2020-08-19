import React from 'react';
import Photo from './Photo';
class About extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                links:{
                    fb:["https://www.facebook.com/sachoosrkg/","l fab fa-facebook-f contact-icons"],
                    git:["https://github.com/sachin-in1/","l fab fa-github-alt contact-icons"],
                    lin:["https://www.linkedin.com/in/sachin-kizhakkayil-801bb4b0","l fab fa-linkedin contact-icons"],
                    mail:["mailto:saching1998@cet.ac.in","l fa fa-envelope-o contact-icons"]
                },
            };
        }
    render(){
        return(
            <div class="hero">
                {/* <div class="progress-bar">
                    hi
                </div> */}
                <div class="grid-container">
                    <div class="links">
                        <a href={this.state.links.fb[0]} target="_blank" rel="noopener noreferrer"><i class= {this.state.links.fb[1]}></i></a>
                        <a href={this.state.links.git[0]} target="_blank" rel="noopener noreferrer"><i class={this.state.links.git[1]}></i></a>
                        <a href={this.state.links.lin[0]} target="_blank" rel="noopener noreferrer"><i class={this.state.links.lin[1]}></i></a>
                        <a href={this.state.links.mail[0]} target="_blank" rel="noopener noreferrer"><i class={this.state.links.mail[1]} ></i></a>
                    </div>
                    <Photo></Photo>
                    <div class="About">
        <h3 class="heading">About Me</h3><br/>
                        <h5>
                        <br/>
                        My Name is Sachin.<br/>
                        I am an S6 Computer Science& Engineering Student at College of Engineering, Trivandrum.<br/>
                        I'm Just a Curious Student with some ideas
                        <br/>
                        </h5>
                    </div>
                </div>
            </div>
            );
        }
    }

export default About;