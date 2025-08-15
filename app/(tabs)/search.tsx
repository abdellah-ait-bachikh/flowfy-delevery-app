import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@/constants/const";
import { useTranslation } from "react-i18next";


const search = () => {
    const { t, i18n } = useTranslation();
    const rtl = i18n.language === "ar";
  return (
    <View
      style={{
             flex: 1,
             justifyContent: "center",
             alignItems: "center",backgroundColor:colors.white
           }}
    >
      <Text>{t("screens.(tabs).search.title")} </Text>
    </View>
  );
};

export default search;

const styles = StyleSheet.create({});
