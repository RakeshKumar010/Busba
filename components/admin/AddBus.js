import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import database from '@react-native-firebase/database';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';


const AddBus = ({navigation}) => {


  
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [mobile, setMobile] = useState();
  const [status, setStatus] = useState();
  const [state, setState] = useState();
  const [addressOne, setAddressOne] = useState();
  const [addressTwo, setAddressTwo] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const addBusFun = async () => {
    try {
      const userRef = database().ref('/busDetails');

      let newUserRef = userRef.push(); //Push method is use to ganarate the uniqe id for each and every added data
      const realtimeData = await newUserRef.set({
        name,
        price,
        mobile,
        status,
        state,
        addressOne,
        addressTwo,
        startTime,
        endTime,
      });
      navigation.navigate('dashboard');
    } catch (error) {
      console.log('error:' + error);
    }
  };
  return (
    <View className="bg-gray-700 h-full p-3">
      <ScrollView>
        <TextInput
          onChangeText={value => setName(value)}
          placeholder="Name"
          className="text-white  border-white "
          style={styles.inputBox}
          placeholderTextColor={'#94a3b8'}
        />
        <TextInput
          keyboardType="number-pad"
          onChangeText={value => setPrice(value)}
          placeholder="Price"
          className="text-white  border-white "
          style={styles.inputBox}
          placeholderTextColor={'#94a3b8'}
        />
        <TextInput
          keyboardType="number-pad"
          onChangeText={value => setMobile(value)}
          placeholder="Mobile no."
          className="text-white  border-white "
          style={styles.inputBox}
          placeholderTextColor={'#94a3b8'}
        />
        <TextInput onChangeText={(value)=>setStatus(value)} placeholder='Status' className='text-white  border-white ' style={styles.inputBox} placeholderTextColor={'#94a3b8'}/>
          {/* <Text style={styles.statusTxt}>Status{status}</Text>
        <View style={styles.statusContainer}>
          <View style={styles.acMain}>
          <CheckBox
              value={toggleCheckBox}
              onValueChange={newValue =>{ 
                setToggleCheckBox(newValue)
                setStatus(newValue ? 'Ac' : 'Non-Ac')}}
              tintColors='#fff'
             
            />
            <Text style={styles.statusChTx}>Ac</Text>
            
          </View>
          <View style={styles.acMain}>
            <CheckBox
            tintColors={'#ffffff'}
              value={!toggleCheckBox}
              onValueChange={newValue => {
                setToggleCheckBox(!newValue)
                setStatus(newValue ? 'Non-Ac' : 'Ac')
              }}
            />
            <Text style={styles.statusChTx}>Non-Ac</Text>
          </View>
        </View> */}

        <TextInput
          onChangeText={value => setState(value)}
          placeholder="State"
          className="text-white  border-white "
          style={styles.inputBox}
          placeholderTextColor={'#94a3b8'}
        />
        <TextInput
          onChangeText={value => setAddressOne(value)}
          placeholder="Address one"
          className="text-white  border-white "
          style={styles.inputBox}
          placeholderTextColor={'#94a3b8'}
        />
        <TextInput
          onChangeText={value => setAddressTwo(value)}
          placeholder="Address two"
          className="text-white  border-white "
          style={styles.inputBox}
          placeholderTextColor={'#94a3b8'}
        />
        <TextInput
          onChangeText={value => setStartTime(value)}
          placeholder="Start Time"
          className="text-white  border-white "
          style={styles.inputBox}
          placeholderTextColor={'#94a3b8'}
        />
        <TextInput
          onChangeText={value => setEndTime(value)}
          placeholder="End Time"
          className="text-white  border-white "
          style={styles.inputBox}
          placeholderTextColor={'#94a3b8'}
        />
      </ScrollView>
      <TouchableOpacity
        className="bg-yellow-500"
        style={styles.btn}
        onPress={() => {
          navigation.navigate('dashboard');
        }}>
        <Text
          className="text-center font-semibold text-white"
          style={{fontSize: heightPercentageToDP(3)}}
          onPress={addBusFun}>
          Done
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  inputBox: {
    fontSize: heightPercentageToDP(2),
    paddingHorizontal: heightPercentageToDP(2),
    borderRadius: heightPercentageToDP(1.5),
    marginBottom: heightPercentageToDP(1.5),
    borderWidth: heightPercentageToDP(0.2),
  },
  btn: {
    padding: heightPercentageToDP(1),
    borderRadius: heightPercentageToDP(1.5),
  },
  statusTxt:{
    color:'white',
    fontSize:heightPercentageToDP(2.89),
    fontWeight:'bold',
    
    
  },
  acMain:{
    display:'flex',
    flexDirection:'row',
  alignItems:'center',
  gap:heightPercentageToDP(1)
  },
  statusChTx:{
    color:'white'
  },
  statusContainer:{
    display:'flex',
    flexDirection:'row',
    gap:widthPercentageToDP(10),
    marginBottom:heightPercentageToDP(2)

  }
  
});

export default AddBus;
