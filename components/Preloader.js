import {View, Text,Image,TouchableOpacity} from 'react-native';

import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated,{useSharedValue,useAnimatedStyle,withSpring} from 'react-native-reanimated';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';



const Preloader = ({navigation}) => {
  React.useEffect(()=>{
    if(w.value==50){
      w.value=withSpring(widthPercentageToDP(60))
      h.value=withSpring(heightPercentageToDP(20))
 
     
    }
    setTimeout(() => {
      navigation.navigate('Home')
      
    }, 3000);
  },[])
  const w = useSharedValue(50)
  const h = useSharedValue(50)


  const animatedStyle = useAnimatedStyle(()=>{
    return({
      width:w.value,
      height:h.value,
    
     
    })
  })
  return (
    <SafeAreaView>
 
        <View className="bg-gray-700 h-full  justify-center items-center">
          <Animated.Image style={[{width:w,height:h},animatedStyle]}  source={require('../assets/busba.png')} />

         
          
   
      </View>
    </SafeAreaView>
  );
};



export default Preloader;
