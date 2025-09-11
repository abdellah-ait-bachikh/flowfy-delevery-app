import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { colors } from "@/constants/const";
import logo from "../assets/images/main_logo.png";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const WelcomePage = () => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();

  const router = useRouter();
  const handelNavigate = () => {
    router.push("/(tabs)");
  };
  return (
    <View style={styles.container}>
      <View style={[styles.languageSwitcher, { top: insets.top + 20 }]}>
        <Text>ln dsd</Text>
      </View>
      <Image source={logo} style={styles.logo} />
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.button}
        onPress={handelNavigate}
      >
        <Text style={styles.btnText}>{t("screens.root.index.explor_app")}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    gap: 20,
    position: "relative",
  },
  languageSwitcher: {
    position: "absolute",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.perpel,
    shadowColor: "#ffffffff",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 9 },
    shadowRadius: 6,
    elevation: 5,
  },
  btnText: {
    color: colors.perpel,
  },
});
