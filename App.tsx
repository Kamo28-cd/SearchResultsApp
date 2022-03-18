import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator,  CardStyleInterpolators} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SearchPostcode from './src/components/SearchPostcode';
import Results from './src/components/Results';
import WinnerStories from './src/components/WinnerStories';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/assets/consts/theme';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

const AppStack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <ThemeProvider {...{theme}}>
          <NativeBaseProvider>
            <AppStack.Navigator 
              initialRouteName='SearchPostcpde' 
              screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}
              >
                <AppStack.Screen
                name="SearchPostcode"   
                component={SearchPostcode}   
                options={{headerShown: false}} 
                />  
                <AppStack.Screen
                name="Results"   
                component={Results}   
                options={{headerShown: false}} 
                /> 
                <AppStack.Screen
                name="WinnerStories"   
                component={WinnerStories}   
                options={{headerShown: false}} 
                /> 
              
            </AppStack.Navigator>
            </NativeBaseProvider>
    </ThemeProvider>
    </SafeAreaProvider>
    </NavigationContainer>
    
   
    
    
    
  );
}


