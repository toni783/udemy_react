import React, { Fragment, Component } from 'react'
import Modal from '../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null,
        }
        constructor() {
            super()
            this.reqInterceptor = axios.interceptors.request.use((req) => {
                this.setState({ error: null })
                return req
            })
            this.resInterceptor = axios.interceptors.response.use(
                (res) => res,
                (err) => {
                    this.setState({ error: err })
                }
            )
        }

        componentWillUnmount() {
            // console.log(
            // clean up code example verification code
            //     'componentWillMount',
            //     this.reqInterceptor,
            //     this.resInterceptor
            // )
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }

        errorConfirmHandler = () => {
            console.log('will unmount ', this.reqInterceptor, this.resInterceptor)
            this.setState({ error: null })
        }
        render() {
            return (
                <Fragment>
                    <Modal
                        modalClosed={this.errorConfirmHandler}
                        show={this.state.error}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Fragment>
            )
        }
    }
}

export default withErrorHandler
