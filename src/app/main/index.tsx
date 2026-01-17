import { Categories } from "@/components/categories"
import { Link } from "@/components/link"
import { colors } from "@/styles/colors"
import { MaterialIcons } from "@expo/vector-icons"
import { FlatList, Image, TouchableOpacity, View } from "react-native"
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
      <FlatList
        data={[0, 2, 3, 4]}
        keyExtractor={(item) => String(item)}
        renderItem={() => {
          return (
            <Link name="Google" url="www.google.com.br" onDetails={() => { console.log("Click") }} />
          )
        }}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
