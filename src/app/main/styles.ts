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
  links:{
    borderTopWidth:1,
    borderTopColor: colors.gray[600]
  },
  linksContent:{
    gap:20,
    padding:24,
    paddingBottom:100
  },
  modal:{
    flex:1,
    justifyContent:"flex-end"
  },
  modalContent:{
    backgroundColor:colors.gray[900],
    borderTopWidth:1,
    borderTopColor: colors.gray[800],
    padding:24,
    paddingBottom:42,
  },
  modalHeader:{
    width:"100%",
    flexDirection:"row",
    alignContent:"center",
    marginBottom:32
  },
  modalCategory:{
    flex:1,
    fontSize:16,
    fontWeight:"500",
    color:colors.gray[400]
  },
  modalLinkName:{
    color:colors.gray[200],
    fontSize:18,
    fontWeight:"600",
  },
  modalUrl:{
    color:colors.gray[400],
    fontSize:14
  }
})
