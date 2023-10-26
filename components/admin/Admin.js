import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import React, {useState} from 'react';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const Admin = ({navigation}) => {
  const [busNo, setBusNo] = useState(null);
  const [owner, setOwner] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMess, setErrorMess] = useState(null);

  const logInFun = async () => {
    try {
    
      const authData = await auth().signInWithEmailAndPassword(email, password);

      console.log(authData);
      if (authData.user.emailVerified) {
        navigation.navigate('dashboard');
        
      } else {
        console.log('not varifide');
        alert('verification mail is sent on you mail');
        await auth().currentUser.sendEmailVerification();
        await auth().signOut();
      }

      setErrorMess('');
    } catch (error) {
      console.log(error);
      setErrorMess(error.message);
    }
  };

  const storeData = async () => {
    try {
      const authData = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
     
      
        alert('verification mail is sent on you mail');
        await auth().currentUser.sendEmailVerification();
        await auth().signOut();
        w.value = withSpring(300);
        h.value = withSpring(300);
        tvh.value = withSpring(385);
        setSignupShow(true);


      const userRef = database().ref('/users');

      let newUserRef = userRef.push(); //Push method is use to ganarate the uniqe id for each and every added data
      const realtimeData = await newUserRef.set({
        busNo,
        owner,
        email,
        password,
      });
      console.log('authData',authData);
      console.log('realtimeData',realtimeData);
    
      setErrorMess('');
    } catch (error) {
      console.log('error:' + error);
      setErrorMess(error.message);
    }
  };

  const [signupShow, setSignupShow] = useState(true);
  // const w = useSharedValue(10);
  // const h = useSharedValue(10);
  // const tvh = useSharedValue(10);
  const w = useSharedValue(heightPercentageToDP(40));
  const h = useSharedValue(heightPercentageToDP(40));
  const tvh = useSharedValue(heightPercentageToDP(40));

  const animationStyle = useAnimatedStyle(() => {
    return {
      width: w.value,
      height: h.value,
    };
  });
  const tvANimationStyle = useAnimatedStyle(() => {
    return {
      height: tvh.value,
    };
  });

  return (
    <View className="h-full ">
      <Animated.View className=" bg-yellow-500" style={tvANimationStyle}>
        <Animated.View
          className=" bg-gray-700"
          style={[{borderBottomRightRadius: heightPercentageToDP(10)}, tvANimationStyle]}>
          <Text style={styles.hederText} className="text-center text-yellow-500 font-bold ">
            {signupShow ? 'Welcome Admin' : 'Create Account'}
          </Text>
          <Animated.Image
            source={require('../../assets/adminbg.png')}
            className=" m-auto"
            style={[animationStyle]}
            
          />
        </Animated.View>
      </Animated.View>

      <View className="h-full bg-gray-700">
        <View
          className="h-full bg-yellow-500 "
          style={{borderTopLeftRadius: heightPercentageToDP(10)}}>
          {signupShow ? (
            <View className=" absolute  w-full h-screen" style={{top:heightPercentageToDP(3.3)}}>
              <TextInput
               
                onChangeText={value => {
                  setEmail(value);
                }}
                placeholder="Email"
                style={styles.placeholderText}
              />
              <TextInput
               
                placeholder="Password"
                onChangeText={value => {
                  setPassword(value);
                }}
                style={styles.placeholderText}
              />
              <View className="m-2 ">
                <Text
                  className="text-gray-900  text-right underline"
                  onPress={() => {
                    navigation.navigate('forget');
                  }} style={styles.forgetText}>
                  Forget Password?
                </Text>
              </View>
              <Text className="text-xl text-red-600">{errorMess}</Text>
              <View>
                <TouchableOpacity style={styles.btnText} className="bg-gray-700 " onPress={logInFun}>
                  <Text
                    className="text-white text-center "
                    style={{fontSize:heightPercentageToDP(2.3)}}
                    >
                    LogIn
                  </Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{flex: 1, height: 1, backgroundColor: 'black'}}
                  />
                  <View>
                    <Text style={{width: 50, textAlign: 'center'}}>Or</Text>
                  </View>
                  <View
                    style={{flex: 1, height: 1, backgroundColor: 'black'}}
                  />
                </View>
                <TouchableOpacity
                  style={styles.btnText} className="bg-gray-700   "
                  onPress={() => {
                    w.value = withSpring(heightPercentageToDP(25));
                    h.value = withSpring(heightPercentageToDP(25));
                    tvh.value = withSpring(heightPercentageToDP(30));
                    setSignupShow(false);
                  }}>
                  <Text className="text-white text-center " 
                    style={{fontSize:heightPercentageToDP(2.3)}}>SignUp</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View className=" absolute w-full h-screen" style={{top:heightPercentageToDP(3.5)}}>
              <TextInput
                className="text-white"
                style={styles.placeholderText}
                placeholder="Bus no"
                onChangeText={value => {
                  setBusNo(value);
                }}
              />
              <TextInput
                className="text-white"
                placeholder="Owner"
                style={styles.placeholderText}
                onChangeText={value => {
                  setOwner(value);
                }}
              />
              <TextInput
                className="text-white"
                placeholder="Email"
                style={styles.placeholderText}
                onChangeText={value => {
                  setEmail(value);
                }}
              />
              <TextInput
                className="text-white "
                placeholder="Password"
                style={styles.placeholderText}
                secureTextEntry={true}
                onChangeText={value => {
                  setPassword(value);
                }}
              />

              <Text className="text-xl text-red-600">{errorMess}</Text>
              <View>
                <TouchableOpacity style={styles.btnText} className="bg-gray-700   ">
                  <Text
                    className="text-white text-center "
                    onPress={storeData}   style={{fontSize:heightPercentageToDP(2.3)}}>
                    SignUp
                  </Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{flex: 1, height: 1, backgroundColor: 'black'}}
                  />
                  <View>
                    <Text style={{width: 50, textAlign: 'center'}}>Or</Text>
                  </View>
                  <View
                    style={{flex: 1, height: 1, backgroundColor: 'black'}}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    w.value = withSpring(heightPercentageToDP(40));
                    h.value = withSpring(heightPercentageToDP(40));
                    tvh.value =withSpring(heightPercentageToDP(40));
                    setSignupShow(true);
                  }}
                  style={styles.btnText} className="bg-gray-700   ">
                  <Text className="text-white text-center"   style={{fontSize:heightPercentageToDP(2.3)}}>LogIn</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles=StyleSheet.create({
  hederText:{
    fontSize:heightPercentageToDP(4.5),
    marginVertical:heightPercentageToDP(2)
  },
  // adminPOster:{
  //   width:heightPercentageToDP(40),
  //   height:heightPercentageToDP(40),
  //   // backgroundColor:'black'
  // },
  placeholderText:{
    fontSize:heightPercentageToDP(2.4),
    marginHorizontal:heightPercentageToDP(1),
    borderBottomWidth:heightPercentageToDP(0.1)
  },
  forgetText:{
    fontSize:heightPercentageToDP(2.5)
  },
 
btnText:{
  borderRadius:heightPercentageToDP(1.5),
padding:heightPercentageToDP(1),
marginHorizontal:heightPercentageToDP(2),
}
})

export default Admin;
