import React, { Fragment, Component } from 'react'
import Button from './../../UI/Button/Button'
class OrderSummary extends Component {
    // this could be a functional component ,doesnt have to be a classs
    componentDidUpdate() {
        console.log('[OrderSummary] will update')
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(
            (igKey) => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
                        {this.props.ingredients[igKey]}
                    </li>
                )
            }
        )
        return (
            <Fragment>
                <h3>Your Order</h3>
                <p>A deliciuos burger with the following ingredients</p>
                <ul>{ingredientSummary}</ul>
                <p>
                    <strong>Total Price: {this.props.price.toFixed(2)}</strong>
                </p>
                <p>Continue to checkout?</p>

                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
                    CANCEL
                </Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>
                    CONTINUE
                </Button>
            </Fragment>
        )
    }
}

export default OrderSummary
