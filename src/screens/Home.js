import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    // <View style = {StyleSheet.MainContainer}>
    <SafeAreaView style={styles.MainContainer}>
      <Text style={styles.Welcome}>Welcome to Home Page</Text>

    <TouchableOpacity
      style={styles.BtnStyle}
      onPress ={() => navigation.navigate('login')}>

      <Text style={styles.BtnText}> Go to Login Page </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    padding: 20,
    height: '100%',
    backgroundColor: 'white',
  },

  Welcome:{
    textAlign:'center',
    padding:40,
    fontSize:25,
    fontWeight:'bold',
  },

  BtnStyle: {
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 5,
    backgroundColor:'blue',
  },

  BtnText: {
    textAlign:'center',
    fontSize: 18,
    color: 'white',
},

  
});

export default Home;

