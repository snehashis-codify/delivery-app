import { Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <CategoryCard
        imgUrl="https://img.freepik.com/premium-photo/delivery-man-concept-online-order-tracking-delivery-home-officeillustration_837518-5727.jpg"
        title="Testing1"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/premium-photo/delivery-man-concept-online-order-tracking-delivery-home-officeillustration_837518-5727.jpg"
        title="Testing2"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/premium-photo/delivery-man-concept-online-order-tracking-delivery-home-officeillustration_837518-5727.jpg"
        title="Testing3"
      />
        <CategoryCard
        imgUrl="https://img.freepik.com/premium-photo/delivery-man-concept-online-order-tracking-delivery-home-officeillustration_837518-5727.jpg"
        title="Testing3"
      />
        <CategoryCard
        imgUrl="https://img.freepik.com/premium-photo/delivery-man-concept-online-order-tracking-delivery-home-officeillustration_837518-5727.jpg"
        title="Testing3"
      />
        <CategoryCard
        imgUrl="https://img.freepik.com/premium-photo/delivery-man-concept-online-order-tracking-delivery-home-officeillustration_837518-5727.jpg"
        title="Testing3"
      />
        <CategoryCard
        imgUrl="https://img.freepik.com/premium-photo/delivery-man-concept-online-order-tracking-delivery-home-officeillustration_837518-5727.jpg"
        title="Testing3"
      />
        <CategoryCard
        imgUrl="https://img.freepik.com/premium-photo/delivery-man-concept-online-order-tracking-delivery-home-officeillustration_837518-5727.jpg"
        title="Testing3"
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 15,
  },
});
