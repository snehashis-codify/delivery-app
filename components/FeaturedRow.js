import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurentCard from "./RestaurentCard";

export default function FeaturedRow({ title, description }) {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.featuredContainer}
        className="pt-4"
      >
        {/* Restaurents cards */}
        <RestaurentCard
          id="1"
          imgUrl="https://img.freepik.com/premium-photo/delivery-man-concept-online-order-tracking-delivery-home-officeillustration_837518-5727.jpg"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 main st."
          short_description="This is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />
          <RestaurentCard
          id="1"
          imgUrl="https://img.freepik.com/premium-photo/delivery-man-concept-online-order-tracking-delivery-home-officeillustration_837518-5727.jpg"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 main st."
          short_description="This is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />
          <RestaurentCard
          id="1"
          imgUrl="https://img.freepik.com/premium-photo/delivery-man-concept-online-order-tracking-delivery-home-officeillustration_837518-5727.jpg"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 main st."
          short_description="This is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  featuredContainer: {
    paddingHorizontal: 15,
  },
});
