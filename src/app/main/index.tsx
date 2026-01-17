import { Image, TouchableOpacity, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from "./styles"
import { colors } from "@/styles/colors"
import { Category } from "@/components/category"
import { TodoList } from "@/components/todo-list/todo-list"

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/logo.png')} />
        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity >
      </View>
      <Category name="code" icon="code" />
      <Category name="Site" icon="language" />
      <Category name="Video" icon="movie" />

      <TodoList />
    </View>
  )
}
