import React from "react"
import "./Modal.css"
export default class Modal extends React.Component {

    render() {
        return (
            <div className={this.props.modalon ? "new-modal-container" : "modal-off"} >
                <div className="new-modal-central-part">
                    <span className="new-modal-close-button" onClick={this.props.closeModal}>X</span>
                    <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                            <img src={this.props.image} alt="nothing here"/></a>
                </div>
            </div>
        )
    }
}