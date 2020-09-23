import React from 'react'

class Projects extends React.Component{
    render(){
        return(
            <div class="Projects" id="Projects">
                <div class="grid-container-4">
                    <div class="project">
                    <h3 class="heading">Projects</h3><br/>
                        <div class="card">
                            <div class="container">
                                <h3><b>Mobile Apps</b></h3>
                                <a href="https://github.com/sachin-in1/" target="_blank" rel="noopener noreferrer"><p>Queastio</p></a>
                                <a href="https://github.com/sachin-in1/" target="_blank" rel="noopener noreferrer"><p>Rankey</p></a>
                                <a href="https://github.com/sachin-in1/" target="_blank" rel="noopener noreferrer"><p>Minnal</p></a>
                            </div>
                        </div>
                        <div class="card">
                            <div class="container">
                                <h3><b>Web Stuffs</b></h3>
                                <a href="https://github.com/sachin-in1/" target="_blank" rel="noopener noreferrer"><p>Remote</p></a>
                                <a href="https://github.com/sachin-in1/" target="_blank" rel="noopener noreferrer"><p>KTU Techfest'20 Website</p></a>
                                <a href="https://github.com/sachin-in1/" target="_blank" rel="noopener noreferrer"><p>BFIKF'19</p></a>
                            </div>
                        </div>
                        <div class="card">
                            <div class="container">
                                <h3><b>Designs</b></h3>
                                <a href="#Designs" target="_self"><p>eZPicker</p></a>
                                <a href="#Designs" target="_self"><p>Reval Helper</p></a>
                                <a href="#Designs" target="_self"><p>Minnal</p></a>
                                <a href="#Designs" target="_self"><p>Rankey</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Projects;