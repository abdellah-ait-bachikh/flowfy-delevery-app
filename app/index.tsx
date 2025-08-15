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
        alignItems: "center",backgroundColor:colors.PrimaryYello
      }}
    >
      <Text> {t("screens.root.index.title")} </Text>
      <Link
        href={"/(tabs)"}
        style={{
          padding: 10,
          backgroundColor: "red",
          borderRadius: 5,
        }}
      >
        {t("screens.root.index.explor_app")}
      </Link>
      <LanguageSwitcher />
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({});
