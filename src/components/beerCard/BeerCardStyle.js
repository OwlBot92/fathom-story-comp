import { StyleSheet } from "react-native-web";

const beerCardStyle = StyleSheet.create({
  beerCard: {
    width: '28%',
    borderRadius: 10,
    margin: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0px 0px 10px #000",
    backgroundColor: '#292a2d',
    //backgroundColor: '#b4b4b4'
  },
  beerCardInfo: {
    width: "100%",
    height: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  beerCardName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "monospace",
    textAlign: "center",
    marginBottom: 10,
  },
  beerCardTagline: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "monospace",
    marginBottom: 10,
  },
  beerCardDescription: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "monospace",
  },
  beerCardAbv: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "monospace",
  },
  beerCardIbu: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "monospace",

  },
});

export default beerCardStyle;