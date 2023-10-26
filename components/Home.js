import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const Home = ({navigation}) => {
  return (
 
    <View  style={styles.homeMain}>
      <View className="bg-yellow-500 " style={styles.section}>
        <View
          className="bg-gray-800"
          style={[styles.section,{borderBottomRightRadius: heightPercentageToDP(10)}]}>
          <Text
            className="text-yellow-500  m-auto mb-0 "
            style={styles.homeFont}>
            BusBa
          </Text>

          <View className="flex-row items-center ml-2 ">
            <Image
              source={require('../assets/cirleoutline.png')}
              className=" mr-4"
              style={styles.cirleOutline}
            />
            <TextInput
              placeholder="From"
              placeholderTextColor={'#eab308'}
              className="rounded-full text-white "
              style={styles.textInp}
            />
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center',marginLeft:widthPercentageToDP(2),marginRight:heightPercentageToDP(3)}}
            >
            <Image
              source={require('../assets/arrowLine.png')}
              style={styles.arrowLine}
            />

            <View
              style={{flex: 1, height: 1, backgroundColor: 'white',marginLeft:widthPercentageToDP(2)}}
              
            />
            <View>
              <Image
                source={require('../assets/arrowLogo.png')}
                className=" m-auto mt-0 mb-0"
                style={styles.dbArrow}
              />
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
          </View>
          <View className="flex-row items-center ml-2">
            <Image
              source={require('../assets/circle.png')}
              className="w-4 h-4 mr-4"
              style={styles.cirleOutline}
            />
            <TextInput
              placeholder="To"
              placeholderTextColor={'#eab308'}
              className=" mb-0 rounded-full text-white"
              style={styles.textInp}
            />
          </View>
          <TouchableOpacity  onPress={() => {
                navigation.navigate('dashboard');
              }} className="bg-yellow-500  p-2  " style={styles.fontBusBtn}>
            <Text
             
              className="text-center 
        text-gray-700  font-bold" style={styles.findBus}>
              Find Bus
            </Text>
          </TouchableOpacity>
          <Text
            className="text-yellow-500  text-center mt-2 underline"
            style={styles.adminFont}
            onPress={() => {
              navigation.navigate('admin');
            }}>
            Are You Admin?
          </Text>
        </View>
      </View>

      <View className="bg-gray-800" style={styles.section}>
        <View className=" bg-yellow-500" style={[styles.section,{borderTopLeftRadius: heightPercentageToDP(10)}]}>
         <Image
            source={require('../assets/mapLogo.png')}
            style={{
              width: widthPercentageToDP(25),
              height: heightPercentageToDP(19),
              position: 'absolute',
              right:widthPercentageToDP(50),
              top:heightPercentageToDP(7)
              
            }}
          />
         {/* <Image
            source={require('../assets/mapLogo.png')}
            style={{
              width: widthPercentageToDP(5),
              height: widthPercentageToDP(6),
              position: 'absolute',
              left: widthPercentageToDP(5),
              top:heightPercentageToDP(8),
            }}
          /> */}

            {/* <Image
            source={require('../assets/mapLogo.png')}
            style={{
              width: widthPercentageToDP(12),
              height: heightPercentageToDP(9),
              position: 'absolute',
              top:heightPercentageToDP(4),
              right:widthPercentageToDP(8)
            }}
          /> */}

          <Image
            source={require('../assets/OIG-removebg-preview.png')}
            style={styles.bushand}
            // style={{position: 'relative', bottom: 100}}
          />
        </View>
      </View>
    </View>
     
  );
};
const styles = StyleSheet.create({
  homeMain:{
    backgroundColor:'black',
    height:heightPercentageToDP(100)
  },
  homeFont: {
    fontSize: heightPercentageToDP(7),
    marginTop:heightPercentageToDP(3)
  },
  cirleOutline:{
    height:10,
    width:10
  },
  adminFont: {
    fontSize: heightPercentageToDP(2),
  },
  textInp: {
    fontSize: heightPercentageToDP(2),
  },
  arrowLine: {
    width: widthPercentageToDP(2),
    height: heightPercentageToDP(6),
  },
  dbArrow: {
    height: heightPercentageToDP(4),
    width: widthPercentageToDP(7),
  },
  findBus:{
    fontSize:heightPercentageToDP(3)
  },
  fontBusBtn:{
    marginHorizontal:widthPercentageToDP(7),
    borderRadius:heightPercentageToDP(1.5)
  },
  bushand:{
    width:widthPercentageToDP(80),
    height:heightPercentageToDP(40)
  },
  section:{
    height:heightPercentageToDP('50%')
  },

});
export default Home;
