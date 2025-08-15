import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@/constants/const";
import { useLocalSearchParams } from "expo-router";

const ProfileDetails = () => {
    const { id } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
      }}
    >
      <Text>Profile id = {id}</Text>
    </View>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({});
