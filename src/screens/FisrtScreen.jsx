import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const FisrtScreen = ({navigation}) => {
  const url = "https://655fe9d483aba11d99cff78f.mockapi.io/users";
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  console.log(data);
  const renderItem = ({item}) => {
    return (
      <View style={{flexDirection: "row", justifyContent: "space-between", width: 300, padding: 8}}>
        <Text>{item.id}</Text>
        <Text>{item.username}</Text>
        <Text>{item.role}</Text>
      </View>
    )
  }
  return (
    <View style={styles.background}>
      <Text style={[styles.title, {color: "red"}]}>User Information</Text>
      <View style={{flexDirection: "row", justifyContent: "space-between", width: 300, padding: 8}}>
        <Text style={styles.subtitle}>Number:</Text>
        <Text style={styles.subtitle}>Username:</Text>
        <Text style={styles.subtitle}>Role:</Text>
      </View>
      <FlatList data={data} keyExtractor={item => item.id} renderItem={renderItem}></FlatList>
    </View>
  )
}

export default FisrtScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgbo(0,0,0,90)"
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
  },
  subtitle: {
    fontWeight: 700,
  }

})