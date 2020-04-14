import React, { Component, Fragment } from 'react'
import Burger from '../../components/Burger/Burguer'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axiosOrders from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler'

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 1.3,
    meat: 0.7,
}
class BurguerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        errorState: false,
    }

    componentDidMount() {
        axiosOrders
            .get('https://react-my-burger-36ace.firebaseio.com/ingredients.json')
            .then((res) => {
                this.setState({ ingredients: res.data })
            })
            .catch((err) => {
                this.setState({ errorState: true })
            })
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map((igKey) => {
                return ingredients[igKey]
            })
            .reduce((previous, current) => {
                return previous + current
            }, 0)

        this.setState({ purchasable: sum > 0 })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients,
        }
        updatedIngredients[type] = updatedCount
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        })
        this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if (oldCount <= 0) {
            return
        }
        const updatedCount = oldCount - 1
        const updatedIngredients = {
            ...this.state.ingredients,
        }
        updatedIngredients[type] = updatedCount
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceAddition

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        })

        this.updatePurchaseState(updatedIngredients)
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        // alert("You continue");
        this.setState({ loading: true })
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice, //note: price should be calculated in the backend ,for testing porpuses we are going to do it like this
            customer: {
                name: 'Gilbert',
                adress: {
                    street: 'test sreet 1',
                    zipCode: '2323',
                    country: 'Colombia',
                },
                email: 'test@gmail.com',
            },
            deliveryMethod: 'fast',
        }
        axiosOrders
            .post('/orders.json', order)
            .then((res) => {
                console.log(res)
                this.setState({ loading: false, purchasing: false })
            })
            .catch((err) => {
                this.setState({ loading: false, purchasing: false })
                console.log(err)
            })
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients,
        }

        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null

        let burguer = this.state.errorState ? (
            <p> ingredients can be loaded </p>
        ) : (
            <Spinner />
        )
        if (this.state.ingredients) {
            orderSummary = (
                <OrderSummary
                    price={this.state.totalPrice}
                    purchaseCanceled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    ingredients={this.state.ingredients}
                />
            )
            burguer = (
                <Fragment>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        inbgredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        purchasable={!this.state.purchasable}
                        ordered={this.purchaseHandler}
                    />
                </Fragment>
            )
        }

        if (this.state.loading) {
            orderSummary = <Spinner />
        }
        return (
            <Fragment>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}
                >
                    {orderSummary}
                </Modal>
                {burguer}
            </Fragment>
        )
    }
}

export default withErrorHandler(BurguerBuilder, axiosOrders)
