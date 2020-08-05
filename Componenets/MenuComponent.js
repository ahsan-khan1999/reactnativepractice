import React, { Component } from 'react'
import { View , FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

function MenuComponent(props) {
        const dishes = props.dishes
        var name = props.dishes.name
    const renderItem = ({item,index}) => {
        return(
            <ListItem 
            key = {index}
            title = {item.name}
            // subtitle = {item.description}
            onPress = {() => props.onPress(item.id)}
            leftAvatar = {{source : require('./images/images/buffet.png')}} //javascript object
            />
        );
    }
    
    return (
            <FlatList 
            data = {dishes}
            renderItem = {renderItem}
            keyExtractor={item => item.id.toString()}
            />
        );
    
}
export default MenuComponent;