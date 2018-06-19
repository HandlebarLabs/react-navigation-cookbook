import React from 'react';
import { Button, View, SafeAreaView, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Favorites = ({ navigation }) => (
  <SafeAreaView>
    <Text>Hello from the favorites tab</Text>
  </SafeAreaView>
);

const Recents = ({ navigation }) => (
  <SafeAreaView>
    <Text>Hello from the recents tab</Text>
  </SafeAreaView>
);

const MainApp = createBottomTabNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favorites',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons color={tintColor} name="star" size={26} />
    },
  },
  New: {
    screen: View,
    navigationOptions: ({ navigation }) => ({
      title: 'New',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons color={tintColor} name="plus" size={26} />,
      tabBarOnPress: () => {
        navigation.navigate('Modal');
      },
    }),
  },
  Recents: {
    screen: Recents,
    navigationOptions: {
      title: 'Recents',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons color={tintColor} name="clock" size={26} />
    },
  },
});

const ModalScreen = ({ navigation }) => (
  <SafeAreaView>
    <Button
      title="Close modal"
      onPress={() => navigation.goBack(null)}
    />
  </SafeAreaView>
);

const RootNavigator = createStackNavigator({
  MainApp: {
    screen: MainApp,
  },
  Modal: {
    screen: ModalScreen,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});

export default RootNavigator;
