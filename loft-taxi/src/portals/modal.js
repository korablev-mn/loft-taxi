import { createElement, useState } from "react";
import { Portal } from './portal'

export const Modal = () => {
    const { isOpen, setIsOpen } = useState(false)
    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <button onClick={toggleModal}>OpenModdal</button>
            {
                isOpen ? <Portal id='test'>
                    <div>
                        <h1>Title</h1>
                        <p>Info</p>
                        <div>
                            <button onClick={toggleModal}>Close Modal</button>
                        </div>
                    </div>
                </Portal> : null
            }
        </div>
    )
}