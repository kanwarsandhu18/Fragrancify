import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

const SelectedChoices = ({ route, navigation }) => {
  const { selectedChoices } = route.params;

  // Render item function for FlatList
  const renderChoiceItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => Linking.openURL("https://fragrancebuy.ca/")}
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 10,
        paddingHorizontal: 10,
        borderRadius: "10%",
        borderWidth: 1,
      }}
    >
      <View
        style={{
          flexDirection: "column",
          flex: 2,
          justifyContent: "space-around",
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "600" }}>{item.name}</Text>
        <Text
          style={{ marginLeft: 10, fontSize: 17, color: "green" }}
        >{`$${item.price}`}</Text>
      </View>

      <Image
        source={{ uri: item.image }}
        style={{ width: 90, height: 90, marginRight: 10, flex: 1 }}
      />
    </TouchableOpacity>
  );

  return (
    <View style={{ display: "flex" }}>
      <Text style={{ textAlign: "center", fontSize: 25 }}>
        Your selected fragrances
      </Text>
      <View style={{ paddingVertical: 5 }}>
        <FlatList
          data={selectedChoices}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderChoiceItem}
        />
      </View>
    </View>
  );
};

export default SelectedChoices;
