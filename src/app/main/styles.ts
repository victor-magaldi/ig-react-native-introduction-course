import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header:{
    paddingHorizontal:24,
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignContent:"center",
    marginBottom:32
  },
  logo:{
    height:32,
    width:38
  },
  container: {
    flex: 1,
    paddingTop:62
  },
  title: {
    color: colors.green[900],
    fontSize: 50,
  },
})
