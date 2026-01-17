import { Categories } from "@/components/categories"
import { Link } from "@/components/link"
import { colors } from "@/styles/colors"
import { MaterialIcons } from "@expo/vector-icons"
import { FlatList, Image, Modal, Text, TouchableOpacity, View } from "react-native"
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
      <Modal transparent visible={true}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Curso</Text>
              <MaterialIcons name="close" size={20} color={colors.gray[400]} />
            </View>
            <Text style={styles.modalLinkName}>
              Rocketseat
            </Text>
            <Text style={styles.modalUrl}>
              https:www.google.com.br
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}
