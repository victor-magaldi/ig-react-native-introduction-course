import { MaterialIcons } from "@expo/vector-icons"
import { Alert, Text, TouchableOpacity, View } from "react-native"

import { Button } from "@/components/button"
import { Categories } from "@/components/categories"
import { Input } from "@/components/input"
import { linksStorage } from "@/storage/link-storage"
import { colors } from "@/styles/colors"
import { isValidUrl } from "@/utils/isValidUrl"
import { router } from "expo-router"
import { useState } from "react"
import { styles } from "./styles"

export default function Add() {
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')

  const handleAdd = async () => {
    try {
      if (!category) {
        return Alert.alert("Categoria", "Selecione a Categoria")
      }
      if (!name) {
        return Alert.alert("Nome", "Informe o Nome")
      }
      if (!isValidUrl(url)) {
        return Alert.alert("URL", "Informe uma Url correta")
      }
      await linksStorage.setData(
        {
          id: new Date().getTime().toString(),
          name,
          url,
          category
        })
      Alert.alert("Sucesso", "Novo Link Adicionado", [{
        text: "Ok",
        onPress: () => { router.back() }
      }])
    } catch (err) {
      Alert.alert("Erro", "Não foi possível salvar o link")
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { router.back() }}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={styles.title}>Novo</Text>
      </View>
      <Text style={styles.label}>Selecione Sua Categoria</Text>
      <Categories
        selected={category}
        onChange={setCategory}
      />

      <View style={styles.form}>
        <Input
          placeholder="Nome"
          onChangeText={setName}
          value={name}
          autoCapitalize="none"
        />
        <Input
          placeholder="https://www.google.com/"
          onChangeText={setUrl}
          value={url}
          autoCapitalize="none"
        />
        <Button
          title="Adicionar"
          activeOpacity={0.7}
          onPress={handleAdd}
        />
      </View>
    </View>
  )
}