import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{width:'30%',justifyContent:'center',backgroundColor:'#f8f8ff',alignItems:'center',padding:20,borderRadius:20}}>
         <Text style={{fontFamily:'arial',fontWeight:'bold',fontSize:20}}>Quote of the day </Text>
         <Text style={{fontFamily:'arial',justifyContent:'center',fontWeight:'200',lineHeight:26,letterSpacing:1.2,margin:25}}> The smallest flower is a thought a life answering to some feature of the great whole of whom they have a president intution </Text>
        
          <TouchableOpacity
             onPress={()=>{}}
             style ={{
               backgroundColor:'#4B66F0',
               borderRadius:20,
               padding:20,
               marginVertical:20,
               width:'40%',
             }}> <Text style={{fontSize:15,fontWeight:'bold',textAlign:'center'}}>New Quote</Text>
          </TouchableOpacity>
          </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor:'#4B66F0',
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    

  },
  book:{
    borderRadius:'20%',
    width:'20%',

  }

  
 
});
