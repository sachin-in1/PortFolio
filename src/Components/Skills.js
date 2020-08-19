import React from 'react';

class Skills extends React.Component{
    render(){
        return(
        <div class="Skills">
            <div class="grid-container-3">
                <div class="skill">
                    <h3 class="heading">Skills</h3><br/>
                    <div class="skilltab"><h4>
                        <div class="grid-container-skill">
                            <div class="tabname">Programming Languages</div>
                            <div class="items">
                                <ul>
                                <li>C++</li>
                                <li>Javscript</li>
                                <li>Dart</li>
                                <li>Python</li>
                                </ul>
                            </div>
                        </div>
                        <div class="grid-container-skill">
                            <div class="tabname">Frameworks</div>
                            <div class="items">
                                <ul>
                                <li>Flutter</li>
                                <li>NodeJS</li>
                                <li>ReactJS</li>
                                <li>ExpressJS</li>
                                </ul>
                            </div>
                        </div>
                        <div class="grid-container-skill">
                            <div class="tabname">Database</div>
                            <div class="items">
                                <ul>
                                <li>MySql</li>
                                <li>PostgreSql</li>
                                </ul>
                            </div>
                        </div>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
            );
        }
    }
export default Skills;