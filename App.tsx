import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/Screen/IndexScreen';
import { Provider } from './src/contexts/BlogContext';
import ShowScreen from './src/Screen/ShowScreen';
import CreateScreen from './src/Screen/CreateScreen';
import EditScreen from './src/Screen/EditScreen';
import Icon from 'react-native-vector-icons/Feather';


const Stack = createNativeStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index'>
        <Stack.Screen name='Index' component={IndexScreen} 
        options = {({navigation}) => ({  title: 'Blog List', 
        headerRight: () => ( 
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Icon name='plus' size={30}/>
          </TouchableOpacity>
        ),
        })}
      />
        <Stack.Screen name = 'Show' component={ShowScreen} options = {{title: 'Showing Blog' }}/>
        <Stack.Screen name = 'Create' component={CreateScreen} options = {{title: 'Create Blog'}}/>
        <Stack.Screen name = 'Edit' component={EditScreen} options = {{title: 'Edit Blog'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
  <Provider>
    <App />
  </Provider>
  );
};
