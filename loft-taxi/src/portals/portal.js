import { Component } from "react";
import { createPortal } from "react-dom";

export class Portal extends Component {
    constructor(props) {
        super(props)
        this.container = document.getElementsByClassName('root') || document.body
        this.element = document.createElement('div')
        this.element.id = props.id
    }

    componentDidMount() {
        this.container.appendChild(this.element)
    }

    componentWillUnmount() {
        this.container.removeChild(this.element)
    }

    render() {
        const { disablePortal, children } = this.props

        return {
            disablePortal ? children : createPortal(children, this.element)
        }
    }
}