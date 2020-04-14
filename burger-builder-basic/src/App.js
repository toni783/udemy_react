import React, { Component } from 'react'
import Layout from './components/Layout/Layout'
import BurguerBuilder from './containers/BurguerBuilder/BurguerBuilder'

class App extends Component {
    // clean up code example verification code
    // state = {
    //     show: true,
    // }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({ show: false })
    //     }, 5000)
    // }
    // <Layout>{this.state.show ? <BurguerBuilder /> : null}</Layout>

    render() {
        return (
            <div>
                <Layout>
                    <BurguerBuilder />
                </Layout>
            </div>
        )
    }
}

export default App
