import React, { Component } from 'react'
import {DISHES} from '../Shared/dishes'
import MenuComponent from './MenuComponent'
import {View} from 'react-native'
import DishDetails from './DishDetails'
class MainComponent extends Component {

    constructor(dishes){
        super(dishes)
        this.state = {
            dishes : DISHES,
            setDish: null
        }
    }
    onDishSelect(dishId){
        this.setState({setDish: dishId})
    }

    render() {
        return (
            <View>
                <MenuComponent dishes={this.state.dishes} 
                onPress={(dishId) => this.onDishSelect(dishId)}
                />
                <DishDetails dish={this.state.dishes.filter((dish) => dish.id === this.state.setDish)[0]} />
            </View>
        )
    }
}
export default MainComponent;