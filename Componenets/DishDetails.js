import React, { Component } from 'react'
import { View , Text } from 'react-native'
import {Card } from 'react-native-elements'

function RenderDish(props){
    const dish = props.dish

    if(dish != null){
        console.log(dish.name)
        return(
            <Card
                featuredTitle={dish.name}
                
                image={require('./images/images/buffet.png')}
            >
                <Text style={{margin:10}}>
                    {dish.description}
                </Text>
                
            </Card>
        );
    }
    else{
        return(<View></View>);
    }

}
function DishDetails(props){
    return(
        <RenderDish dish={props.dish} />
    );
}

export default DishDetails
