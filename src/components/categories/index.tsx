import { categories } from "@/utils/categories";
import { FlatList } from "react-native";
import { Category } from "../category";
import { styles } from "./styles";

export function Categories() {

  return (
    <FlatList
      data={categories}
      keyExtractor={item => item.id}
      renderItem={({ item: { name, icon } }) => {
        return <Category name={name} icon={icon} isSelected={false} />
      }}
      style={styles.container}
      horizontal
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />
  )
}