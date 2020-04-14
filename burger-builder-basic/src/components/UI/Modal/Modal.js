import React, { Fragment, Component } from 'react'

import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        // controls the render of the modal and the inner component life cycle renders, this is a good implementation on this use case
        return (
            nextProps.show !== this.props.show ||
            nextProps.children !== this.props.children
        )
    }

    componentDidUpdate() {
        console.log('[Modal] will update')
    }
    render() {
        return (
            <Fragment>
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show
                            ? 'translateY(0)'
                            : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                    }}
                >
                    {this.props.children}
                </div>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
            </Fragment>
        )
    }
}

export default Modal
