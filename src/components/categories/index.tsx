import { categories } from "@/utils/categories";
import { FlatList } from "react-native";
import { Category } from "../category";
import { styles } from "./styles";

interface CategoriesProps {
  selected: string,
  onChange: (category: string) => void
}

export function Categories({ selected, onChange }: CategoriesProps) {

  return (
    <FlatList
      data={categories}
      keyExtractor={item => item.id}
      renderItem={({ item: { name, icon } }) => {
        return (
          <Category
            name={name}
            icon={icon}
            isSelected={name === selected}
            onPress={() => { onChange(name) }}
          />
        )
      }}
      style={styles.container}
      horizontal
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />
  )
}