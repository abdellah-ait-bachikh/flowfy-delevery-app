// components/ui/AnimatedTabItem.tsx
import { colors } from "@/constants/const";
import React, {  useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export const AnimatedTabLabel = ({ focused, title }: { focused: boolean; title: string }) => {
  const fontSize = useSharedValue(focused ? 11 : 9);
  const animatedStyle = useAnimatedStyle(() => ({
    fontSize: withTiming(fontSize.value, { duration: 150 }),
     color: focused ? colors.primaryRoodGradian : colors.black,
     marginTop: 5,
  }));

  useEffect(() => {
    fontSize.value = focused ? 10 : 8;
  }, [focused]);

  return <Animated.Text style={animatedStyle}>{title}</Animated.Text>;
};

