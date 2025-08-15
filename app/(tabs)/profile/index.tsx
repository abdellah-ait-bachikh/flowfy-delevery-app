import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@/constants/const";
import { useRouter } from "expo-router";
import { user } from "@/constants/const";

const ProfileDetails = () => {
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace(`/profile/${21}`);
    }
  }, []);
 if (user) return null;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
      }}
    >
      <Text>Profile default</Text>
    </View>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({});
