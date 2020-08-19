import React from 'react';

class Things extends React.Component{
    render(){
        return(
            <div class="What">
                <div class="grid-container-2">
                    <div class="what">
                        <h3 class="heading">Things I did</h3><br/>
                        <span>
                            <a href="#Projects" target="_self">
                            <button class="offset" >Made Some Apps</button></a>
                        </span>
                        <span>
                            <a href="#Projects" target="_self">
                            <button class="offset" >Made Some Websites</button></a>
                        </span>
                        <span>
                            <a href="#Projects" target="_self">
                            <button class="offset" >Did a Project in Python</button></a>
                        </span>
                        <span>
                            <a href="#Projects" target="_self">
                            <button class="offset" >Made Some Designs</button></a>
                        </span>
                    </div>
                </div>
            </div>
            );
        }
    }
export default Things;