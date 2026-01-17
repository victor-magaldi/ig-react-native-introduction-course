import { Categories } from "@/components/categories"
import { colors } from "@/styles/colors"
import { MaterialIcons } from "@expo/vector-icons"
import { Image, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/logo.png')} />
        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity >
      </View>
      <Categories />
      {/* <TodoList /> */}
    </View>
  )
}
