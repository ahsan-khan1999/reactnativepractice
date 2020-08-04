import React, { Component } from 'react'
import {DISHES} from '../Shared/dishes'
import MenuComponent from './MenuComponent'
import {View} from 'react-native'
class MainComponent extends Component {

    constructor(dishes){
        super(dishes)
        this.state = {
            dishes : DISHES
        }
    }

    render() {
        return (
            <View>
                <MenuComponent dishes={this.state.dishes} />
            </View>
        )
    }
}
export default MainComponent;