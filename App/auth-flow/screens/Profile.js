import React from "react";
import { View } from "react-native";
import { Card, Button, Text } from "react-native-elements";

export default ({ navigation, screenProps }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card title="John Doe">
      <View
        style={{
          backgroundColor: "#bcbec1",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: 40,
          alignSelf: "center",
          marginBottom: 20
        }}
      >
        <Text style={{ color: "white", fontSize: 28 }}>JD</Text>
      </View>
      <Button
        backgroundColor="#03A9F4"
        title="SIGN OUT"
        onPress={() => screenProps.signOut()}
      />
    </Card>
  </View>
);
