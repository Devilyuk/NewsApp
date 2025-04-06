import { StyleSheet } from "react-native";

export const gStyle = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: '#dadada',
  },
  mainBox: {
    flex: 1,
    padding: 20,
    paddingTop: 10,
    backgroundColor: '#dadada',
    marginBottom: 10,
    fontFamily: 'mp-bold',
  },
  title: {
    fontSize: 20,
    color: '#333',
    fontFamily: 'mp-bold',
    textAlign: 'center'
  },
  newsCard: {
    marginBottom: 10,
    // boxShadow: '0px 0px 5px 0px white',
    borderRadius: 10,
    position: 'relative',
    backgroundColor: '#fff'
  },
  newsCardTitle: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'mp-bold',
    padding: 10,
  },
  newsCardText: {
    color: 'gray',
    fontFamily: 'mp-light',
    padding: 10,
  },
  previewImage: {
    height: 150,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  detailInfoPage: {
    gap: 10
  },
  detailImage: {
    aspectRatio: '3/2'
  },
  detailText: {
    fontFamily: 'mp-light',
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderStyle: 'dashed',
    padding: 3
  },
  tagsBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding:10,
    zIndex: 9
  },
  tagsBoxText: {
    backgroundColor: '#ffffff70',
    padding:5,
    color: '#fff',
    fontFamily: 'mp-bold',
    borderRadius: 5,
    textTransform: 'uppercase',
    fontSize: 10
  },
  scrollBox: {
    backgroundColor: '#dadada',
  },
  headerOfScreen: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
})