import React from "react";
import {View, Text, FlatList} from "react-native"
import Story from "../Story";
import styles from "./styles";

const data = [
    {
        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrGhxuJtS2zDHXOib9lTMes3X5QZX3J-qQjA&usqp=CAU',
        name: 'Nusrat'
    },
    {
        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&usqp=CAU',
        name: 'Ayush'
    },
    {
        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3b_4NDN6jtfcsA0tTbdHRyWrsbdkogDvnZQ&usqp=CAU',
        name: 'Mr.Swagger'
    },
    {
        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_EFwq65Y_sFyCt8ROvTjFKOFxwTrYWM8SQ&usqp=CAU',
        name: 'Neha'
    },
    {
        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrGhxuJtS2zDHXOib9lTMes3X5QZX3J-qQjA&usqp=CAU',
        name: 'Nusrat1'
    },
    {
        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&usqp=CAU',
        name: 'Ayush1'
    },
    {
        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3b_4NDN6jtfcsA0tTbdHRyWrsbdkogDvnZQ&usqp=CAU',
        name: 'Mr.Swagger1'
    },
    {
        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_EFwq65Y_sFyCt8ROvTjFKOFxwTrYWM8SQ&usqp=CAU',
        name: 'Neha1'
    },
]

const Stories = () =>{
    return(
      <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={({name})=>name}
      style={styles.container}
      renderItem={({item})=><Story imageUri={item.imageUri} name={item.name} />}
      />
    )
}

export default Stories;