import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";

import CategoryItem from "./CategoryItem";

export default function CategoryList(props) {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={props.data}
      renderItem={({ item }) => <CategoryItem key={item.id} data={item} />}
    />
  );
}
