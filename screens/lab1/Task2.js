import {StyleSheet, Text, View, TextInput, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../constants';
import _ from 'lodash'

const Task2 = () => {
  const [firstInput, setFirstInput] = useState()
  const [secondInput, setSecondInput] = useState()
  const [res, setRes] = useState(null)

  const calculate = () => {
    const arr = _.range(firstInput, secondInput+1)
    setRes(arr.reduce((sum, elem) =>{
      if(elem%6 === 0){
        return sum * elem
      }
      return sum
    }, 1))
  }

  return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#85BB65",
        }}>
          <Text style={{fontSize: 20, alignSelf: 'center', marginTop: 10}}> Завдання: На заданому проміжку чисел [a,b] знайдіть добуток чисел, кратних 6. </Text>
          <TextInput style={{backgroundColor: 'white', margin: 15, fontSize: 20, padding: 5, }} placeholder='Введіть число' onChangeText={text => setFirstInput(parseInt(text))}/>
          <TextInput style={{backgroundColor: 'white', margin: 15, fontSize: 20, padding: 5, }} placeholder='Введіть число' onChangeText={text => setSecondInput(parseInt(text))}/>
          <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#F9E076' : '#FFD700'}, styles.button]} onPress={calculate}>
            <Text style={styles.text}>Розрахувати</Text>
          </Pressable>
          <Text style={styles.res}>{res}</Text>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 200,
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  res: {
    alignSelf: 'center',
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    marginTop: 20
  }
});

export default Task2;