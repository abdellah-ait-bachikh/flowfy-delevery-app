import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { colors } from "@/constants/const";

const WelcomePage = () => {
  const { t } = useTranslation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <Text> {t("screens.root.index.title")} </Text>
      <Link
        href={"/(tabs)"}
        style={{
          padding: 10,
          borderRadius: 9,
          backgroundColor: "rgba(255, 255, 255, 0.5)", // 50% white transparent
          borderColor: "rgba(167, 167, 167, 0.5)", // optional border with 50% opacity
          borderWidth: 2,
          textAlign: "center",
          fontSize: 20,
          fontWeight: "600",
          color: "#00000081",
        }}
      >
        {t("screens.root.index.explor_app")}
      </Link>
      {/* <LanguageSwitcher /> */}
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({});
