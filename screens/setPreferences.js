import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Slider } from "@react-native-assets/slider";
import { filterFragrances } from "../frontend-utils/functions";
import { useNavigation } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";
const SetPreferences = () => {
  const navigation = useNavigation();
  const [gender, setGender] = useState("unisex");
  const [budget, setBudget] = useState(100);
  const [perfumeStrength, setPerfumeStrength] = useState("medium");

  const handleSelection = () => {
    console.log("Selected Parameters:", { gender, budget, perfumeStrength });
    let objectList = filterFragrances(gender, budget, perfumeStrength);
    navigation.navigate("StackScreen", { fragranceList: objectList });
  };

  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        padding: 10,
        marginVertical: 10,
        alignContent: "space-between",
        justifyContent: "space-around",
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "300" }}>
        Select Preferences
      </Text>

      <View>
        <Text style={{ fontSize: 25, fontWeight: "300", color: "#F27575" }}>
          Gender:
        </Text>
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Unisex" value="unisex" />
        </Picker>
      </View>

      <View style={{ paddingBottom: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: "300", color: "#F27575" }}>
          Budget: ${budget}
        </Text>
        <Slider
          minimumValue={30}
          maximumValue={200}
          step={1}
          value={budget}
          onValueChange={(value) => setBudget(value)}
        />
      </View>

      <View>
        <Text style={{ fontSize: 25, fontWeight: "300", color: "#F27575" }}>
          Perfume Strength:
        </Text>
        <Picker
          selectedValue={perfumeStrength}
          onValueChange={(itemValue) => setPerfumeStrength(itemValue)}
        >
          <Picker.Item label="Low" value="low" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="High" value="high" />
        </Picker>
      </View>

      <TouchableOpacity
        style={{
          alignSelf: "center",
          width: 130,
          height: 40,
          backgroundColor: "#f27575",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
        }}
        onPress={handleSelection}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Generate
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SetPreferences;
