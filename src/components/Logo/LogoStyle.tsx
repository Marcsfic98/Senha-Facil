import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize:30,
    fontWeight:"bold",
    marginBottom:20
  },

  image:{
    resizeMode:"contain",
    width:100,
    height:100,
    alignItems:"center",
    justifyContent:"center",
    display:"flex",
    margin:'auto'
  },

  container:{
    flexDirection:"column",
    justifyContent:"center",
    alignSelf:"center",
    marginBottom:60,
    paddingTop:20,
    paddingBottom:10
  }
});