import {
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { styled } from "nativewind";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
const StyledView = styled(View);
const StyledText = styled(Text);
export default function HomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <StyledView className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://img.freepik.com/premium-photo/delivery-man-concept-online-order-tracking-delivery-home-officeillustration_837518-5727.jpg",
          }}
          className="h-7 w-7 p-4 rounded-full bg-gray-300"
        />
        <StyledView className="flex-1">
          <StyledText className="font-bold text-gray-400 text-xs">
            Delivery Now!
          </StyledText>
          <StyledText className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />
          </StyledText>
        </StyledView>
        <UserIcon size={35} color="#00CCBB" />
      </StyledView>
      {/* Header */}
      {/* Search */}
      <StyledView className="flex-row items-center space-x-2 mx-4 pb-2">
        <StyledView className="flex-row space-x-2 flex-1 p-3 bg-gray-200">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Reastaurants & cuisines"
            keyboardType="default"
          />
        </StyledView>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </StyledView>
      {/* Search */}
      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Categories */}
        <Categories />
        {/* Featured rows */}
        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          id="2"
          title="Offers near you!"
          description="Why not support your local restaurants tonight?"
        />
        <FeaturedRow
          id="3"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
    paddingTop: 5,
  },
  scrollContainer: {
    paddingBottom: 100,
  },
});
