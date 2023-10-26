
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Preloader from './components/Preloader';
import Home from './components/Home';
import ViewTrain from './components/ViewTrain';
import Admin from './components/admin/Admin';
import ForgetPas from './components/admin/ForgetPas';
import Verification from './components/admin/Verification';
import VeriSucc from './components/admin/VeriSucc';
import Dashboard from './components/admin/Dashboard';
import AddBus from './components/admin/AddBus';
import { heightPercentageToDP } from 'react-native-responsive-screen';


const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Preloader" component={Preloader} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="ViewTrain" component={ViewTrain} options={{title:'Available bus', headerStyle:{
          backgroundColor:'#374151',
        
        },
        headerTintColor:'#fff',
        headerTitleAlign:'center'
        }} />
        <Stack.Screen name='admin' component={Admin} options={{headerShown:false}}/>
        <Stack.Screen name='dashboard' component={Dashboard} options={{headerShown:false}}/>
        <Stack.Screen name='addbus' component={AddBus} options={{title:'Add Your Bus', headerStyle:{
          backgroundColor:'#374151',
          
        },
        headerTintColor:'#fff',
        headerTitleAlign:'center'
        }}/>
        <Stack.Screen name='forget' component={ForgetPas} options={{title:'Verification', headerStyle:{
          backgroundColor:'#374151',
          
        },
        headerTintColor:'#fff',
        headerTitleAlign:'center'
        }}/>
        <Stack.Screen name='verification' component={Verification} options={{title:'Verification', headerStyle:{
          backgroundColor:'#374151',
          
        },
        headerTintColor:'#fff',
        headerTitleAlign:'center'
        }}/>

        <Stack.Screen name='veriSucc' component={VeriSucc} options={{title:'Verification', headerStyle:{
          backgroundColor:'#374151',
          
        },
        headerTintColor:'#fff',
        headerTitleAlign:'center'
        }}/>
       

      </Stack.Navigator>
    </NavigationContainer>
   
  );
};

export default App;
