import { StyleSheet } from "react-native";
import { withTheme } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const customFonts = {
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  "Comfortaa-Light": require("../assets/fonts/Comfortaa-Light.ttf"),
  "Comfortaa-Bold": require("../assets/fonts/Comfortaa-Bold.ttf"),
  "Comfortaa-Bold": require("./../assets/fonts/Comfortaa-Bold.ttf"),
  "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
  "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
};

export const adsStyles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    resizeMode: "cover",
  },
  mainContainer: {
    flex: 1,
    alignSelf: "center",
  },
  titleContainer: {
    alignContent: "center",
    alignSelf: 'center',
    marginTop: hp("2.5%"),
    marginBottom: hp("1%"),
    width: wp("75%"),
    height: hp("6.2%"),
    paddingTop: hp("0.7%"),
    borderRadius: 20,
    backgroundColor: "#1e1c24",
    borderColor: "#ededed",
  },
  numberOfAdsContainer: {
    height: 20,
  },
  titleText: {
    paddingTop: hp("0.75%"), 
    color: "#ffffff",
    textAlign: "center",
    fontSize: hp("3.6%"),
    fontFamily: 'Comfortaa-Bold'
  },
  adContainer: {
    alignSelf: "center",
    marginTop: hp("1%"),
    minHeight: wp("29.92%"),
    width: wp("90%"),
  },
  smallAdContainer: {
    alignSelf: "center",
    marginTop: hp("0.5%"),
    width: wp("90%"),
  }
});

export const buttonsStyles = StyleSheet.create({
  logInButtonContainer: {
    width: wp("90%"),
    height: hp("9%"),
    borderRadius: 20,
    backgroundColor: "#1e1c24",
    opacity: 0.99,
  },
  logInButtonText: {
    textAlign: "center",
    paddingTop: hp("3%"),
    color: "#ffffff",
    fontSize: hp("3%"),
    fontFamily: "Comfortaa-Bold",
  },
  signUpButtonContainer: {
    width: wp("90%"),
    height: hp("9%"),
    borderRadius: 20,
    backgroundColor: "#1e1c24",
    opacity: 0.99,
  },
  signUpButtonText: {
    textAlign: "center",
    paddingTop: hp("3%"),
    color: "#ffffff",
    fontSize: hp("3%"),
    fontFamily: "Comfortaa-Bold",
  },
  firstRunButtonContainer: {
    width: wp("70%"),
    height: hp("37%"),
    borderRadius: 30,
    backgroundColor: "#1e1c24",
    opacity: 0.9,
  },
  inputImageHeight: {
    marginTop: hp("5%"),
    alignSelf: "center",
    width: hp("23%"),
    height: hp("23%"),
  },
  inputImageWidth: {
    marginTop: wp("9%"),
    alignSelf: "center",
    width: wp("45%"),
    height: wp("45%"),
  },
  firstRunButtonTextHeight: {
    textAlign: "center",
    paddingTop: hp("2%"),
    color: "#ededed",
    fontSize: hp("4%"),
    fontFamily: "Comfortaa-Bold",
  },
  firstRunButtonTextWidth: {
    textAlign: "center",
    paddingTop: wp("3%"),
    color: "#ededed",
    fontSize: wp("6%"),
    fontFamily: "Comfortaa-Bold",
  },
  AdvButtonContainer: {
    alignSelf: "center",
    marginTop: hp("4%"),
    width: wp("92%"),
    height: hp("9%"),
    borderRadius: 20,
    backgroundColor: "#1e1c24",
    opacity: 0.99,
  },
  AdvButtonText: {
    textAlign: "center",
    marginTop: hp("3%"),
    color: "#ededed",
    fontSize: hp("3%"),
    fontFamily: "Comfortaa-Bold",
  },
  editProfileButtonContainer: {
    alignSelf: "center",
    marginTop: hp("2%"),
    marginBottom: hp("2%"),
    width: wp("25%"),
    height: hp("4.25%"),
    borderRadius: 6,
    backgroundColor: "#5fd2ff",
    opacity: 0.99,
  },
  editProfileButtonText: {
    textAlign: "center",
    marginTop: hp("1%"),
    color: "#ffffff",
    fontSize: hp("2.25%"),
    fontFamily: "Comfortaa-Bold",
  },
  aboutContactButtonContainer: {
    flexDirection: "row",
    alignContent: "center",
    alignSelf: "center",
    width: wp("80%"),
    height: hp("9%"),
    borderRadius: 20,
    backgroundColor: "#1e1c24",
    opacity: 0.99,
  },
  aboutContactIcon: {
    marginLeft: wp("12%"),
    paddingTop: hp("2.75%"),
    fontSize: wp("5%"),
    color: "#ededed",
  },
  aboutContactText: {
    textAlign: "center",
    paddingTop: hp("2.75%"),
    marginLeft: wp("2%"),
    color: "#ededed",
    fontSize: wp("5%"),
    fontFamily: "Comfortaa-Bold",
  },
});

export const categoriesStyles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    resizeMode: "cover",
  },
  mainContainer: {
    flex: 1,
    alignSelf: "center",
    paddingTop: hp("7%"),
  },
  categoryRowContainer: {
    flexDirection: "row",
    marginBottom: hp("1%"),
  },
  singleCategoryContainer: {
    marginRight: wp("2%"),
    marginLeft: wp("2"),
    width: wp("28%"),
    height: hp("15%"),
  },
});

export const categoryStyles = StyleSheet.create({
  category: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
    shadowOffset: {width: hp("0.25%"), height: hp("0.25%")},
    shadowRadius: 10,
    opacity: 0.9,
  },
  categoryImageHeight: {
    alignSelf: "center",
    marginTop: hp("0.8%"),
    width: hp("10%"),
    height: hp("10%"),
  },
  categoryImageWidth: {
    alignSelf: "center",
    marginTop: wp("1.75%"),
    width: wp("20%"),
    height: wp("20%"),
  },
  categoryNameHeight: {
    textAlign: "center",
    fontSize: hp("1.55%"),
    fontFamily: "Comfortaa-Light",
    fontWeight: "bold",
    color: "#1e1c24",
  },
  categoryNameWidth: {
    textAlign: "center",
    paddingTop: wp("0.3%"),
    fontSize: wp("2.5%"),
    fontFamily: "Comfortaa-Light",
    fontWeight: "bold",
    color: "#1e1c24",
  },
});

export const loginStyles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    resizeMode: "cover",
  },
  mainContainer: {
    flex: 1,
    alignSelf: "center",
  },
  welcomeTextContainer: {
    alignSelf: "center",
    width: wp("90%"),
    marginTop: hp("9%"),
    marginBottom: hp("9%"),
  },
  firstText: {
    textAlign: "left",
    fontSize: hp("5.5%"),
    fontFamily: "Comfortaa-Regular",
  },
  secondText: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: hp("5.5%"),
    fontFamily: "Comfortaa-Regular",
  },
  inputContainer: {
    alignSelf: "center",
    marginBottom: hp("20%"),
  },
  inputField: {
    width: wp("90%"),
    height: hp("10%"),
    paddingLeft: wp("5%"),
    marginTop: hp("1.5%"),
    fontSize: hp("2.25%"),
    fontFamily: "Comfortaa-Light",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#ededed",
    color: "#ffffff",
    backgroundColor: "#1e1c24",
    opacity: 0.8,
  },
  inputErrorField: {
    borderWidth: 2,
    width: wp("90%"),
    height: hp("10%"),
    paddingLeft: wp("5%"),
    borderRadius: 20,
    marginTop: hp("1.5%"),
    opacity: 0.8,
    borderColor: "red",
    backgroundColor: "#1e1c24",
    color: "#ededed",
    fontSize: hp("2.25%"),
    fontFamily: "Comfortaa-Light",
  },
  footerContainer: {
    alignSelf: "center",
  },
  footerSmallContainer: {
    flexDirection: "row",
    marginBottom: hp("3%"),
    justifyContent: "center",
  },
  footerText: {
    paddingTop: hp("1.25%"),
    fontSize: hp("2.5%"),
    fontFamily: "Comfortaa-Regular",
  },
  boldText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: hp("3%"),
  },
});

export const signupStyles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    resizeMode: "cover",
  },
  mainContainer: {
    flex: 1,
    alignSelf: "center",
  },
  imageContainerHeight: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: hp("7%"),
    marginBottom: hp("2.2%"),
    borderWidth: 2,
    width: hp("24%"),
    height: hp("24%"),
    paddingLeft: hp("3.25%"),
    borderRadius: 180,
    opacity: 0.8,
    borderColor: "#ededed",
    backgroundColor: "#1e1c24",
  },
  imageContainerWidth: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: hp("7%"),
    marginBottom: hp("2.2%"),
    borderWidth: 2,
    width: wp("44%"),
    height: wp("44%"),
    paddingLeft: wp("6.25%"),
    borderRadius: 100,
    opacity: 0.8,
    borderColor: "#ededed",
    backgroundColor: "#1e1c24",
  },
  inputImageHeight: {
    width: hp("17%"),
    height: hp("17%"),
  },
  inputImageWidth: {
    width: wp("30%"),
    height: wp("30%"),
  },
  inputContainer: {
    alignSelf: "center",
    marginBottom: hp("6%"),
  },
  inputField: {
    borderWidth: 2,
    width: wp("90%"),
    height: hp("10%"),
    paddingLeft: wp("5%"),
    borderRadius: 20,
    marginTop: hp("1.5%"),
    fontSize: hp("2.25%"),
    fontFamily: "Comfortaa-Light",
    opacity: 0.8,
    borderColor: "#ededed",
    backgroundColor: "#1e1c24",
    color: "#ededed",
  },
  buttonContainer: {
    alignSelf: "center",
  },
  inputErrorField: {
    borderWidth: 2,
    width: wp("90%"),
    height: hp("10%"),
    paddingLeft: wp("5%"),
    borderRadius: 20,
    marginTop: hp("1.5%"),
    opacity: 0.8,
    borderColor: "red",
    backgroundColor: "#1e1c24",
    color: "#ededed",
    fontSize: hp("2.25%"),
    fontFamily: "Comfortaa-Light",

  },
});

export const subCategoriesStyles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    resizeMode: "cover",
  },
  mainContainer: {
    flex: 1,
    alignSelf: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: hp("3%"),
    marginBottom: hp("3%"),
    minWidth: wp("40%"),
    height: hp("10%"),
    borderRadius: 30,
    borderWidth: 2,
    backgroundColor: "#1e1c24",
    borderColor: "#ededed",
  },
  title: {
    marginTop: hp("2.75%"),
    fontSize: hp("2.5%"),
    marginLeft: wp("3.5%"),
    marginRight: wp("1.5%"),
    color: "#ededed",
  },
  titleIconHeight: {
    width: hp("5%"),
    height: hp("5%"),
    top: hp("2%"),
    left: wp("2.5%"),
  },
  titleIconWidth: {
    width: wp("12%"),
    height: wp("12%"),
    top: wp("4%"),
    left: wp("2.5%"),
  },
  subcategoryContainer: {
    alignSelf: "center",
    marginTop: hp("1%"),
    width: wp("85%"),
    height: hp("9%"),
  },
});

export const headerStyles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: hp("3%"),
    color: "#ededed",
    letterSpacing: 1,
    marginLeft: -60,
  },
  headerTextMain: {
    fontWeight: "bold",
    fontSize: hp("3%"),
    color: "#ededed",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: wp("2%"),
    color: "#ededed",
    fontSize: hp("4%"),
  },
  avatar: {
    height: hp("7%"),
    width: hp("7%"),
    position: "absolute",
    right: wp("2%"),
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "white",
  },
});

export const subCategoryStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#1e1c24",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  mainContainerText: {
    textAlign: "left",
    textAlignVertical: "center",
    paddingTop: hp("2.75%"),
    paddingLeft: wp("4%"),
    color: "#ededed",
    fontSize: hp("3%"),
    fontFamily: "Comfortaa-Bold",
  },
});

export const adStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#eee8e8",
    width: "100%",
    height: "100%",
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#565656"
  },
  adMainContainer: {
    flexDirection: "row",
  },
  adImage: {
    height: wp("27.2%"),
    width: wp("27.2%"),
    top: wp("1.36%"),
    left: wp("1.36%"),
    borderWidth: 2,
    borderColor: "#7d7d7d",
  },
  adMainText: {
    marginTop: 3,
    marginLeft: wp("2.72%"),
    width: wp("36.6%"),
    backgroundColor: "#eee8e8",
  },
  adTitleContainer: {
    borderBottomWidth: 0.5,
    borderColor: "#7d7d7d",
    marginBottom: hp("1%"),
  },
  adTitle: {
    textAlign: "center",
    fontSize: wp("3%"),
    marginTop: wp("1%"),
    fontFamily: "Comfortaa-Bold",
    color: "black",
  },
  descriptionSmall: {
    width: "100%",
    height: wp("19%"),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#7d7d7d",
    fontFamily: 'Roboto-Regular',
    backgroundColor: "white",
  },
  descriptionLarge: {
    width: "100%",
    height: wp("15.5%"),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#7d7d7d",
    fontFamily: 'Roboto-Regular',
    backgroundColor: "#f5f5f5",
  },
  descriptionText: {
    fontSize: wp("2.5%"),
    marginLeft: wp("0.85%"),
    marginRight: wp("0.85%"),
    color: "black",
    fontFamily: 'Roboto-Regular',
  },
  descriptionDetails: {
    alignSelf: "center",
  },
  descriptionDetailsText: {
    fontSize: wp("2.25%"),
    fontWeight: "bold",
    fontFamily: 'Roboto-Regular',
    textDecorationLine: "underline",
    color: "black",
  },
  detailsArrow: {
    alignSelf: "center",
    fontSize: wp("2.75%"),
    color: "black",
  },
  ownerNameContainer: {
    alignSelf: "flex-start",
    marginTop: wp("0.5%"),
  },
  ownerName: {
    fontSize: wp("2%"),
    fontFamily: 'Roboto-Regular',
    fontStyle: 'italic',
    color: "black",
  },
  adDetails: {
    marginTop: wp("2%"),
    marginLeft: wp("1.5%"),
    width: wp("20.4%"),
    backgroundColor: "#eee8e8",
  },
  priceContainer: {
    alignSelf: "center",
    marginTop: wp("0.3%"),
    height: wp("5.5%"),
    width: wp("17.7%"),
    borderRadius: 5,
    borderColor: "#7d7d7d",
    backgroundColor: "#7d7d7d",
  },
  priceValue: {
    textAlign: "center",
    marginTop: wp("1%"),
    fontSize: wp("2.75%"),
    fontFamily: 'Roboto-Regular',
    color: "black",
  },
  publishDateContainer: {
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: wp("2%"),
    width: wp("16.4%"),
    backgroundColor: "#eee8e8",
  },
  publishTitle: {
    fontSize: wp("2.5%"),
    fontFamily: 'Roboto-Light',
    color: "black",
  },
  publishDate: {
    fontSize: wp("2.5%"),
    color: "black",
  },
  location: {
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: wp("16.4%"),
    marginTop: wp("2%"),
    backgroundColor: "#eee8e8",
  },
  locationText: {
    fontSize: wp("2.5%"),
    fontFamily: 'Roboto-Bold',
    color: "black",
  },
  ratingStars: {
    flexDirection: "row",
    justifyContent: "center",
    width: wp("20.4%"),
    marginTop: wp("3%"),
  },
  likeText: {
    fontSize: wp("2.5%"),
    fontFamily: 'Roboto-Light',
    color: "black",
  },
  like: {
    marginLeft: wp("1.3%"),
    fontSize: wp("3%"),
    color: "black",
  },
  dislike: {
    marginLeft: wp("1.25%"),
    fontSize: wp("3%"),
    color: "black",
  },
  dislikeText: {
    marginLeft: wp("1.3%"),
    fontSize: wp("2.75%"),
    fontFamily: 'Roboto-Light',
    color: "black",
  },
});

export const firstRunStyles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    resizeMode: "cover",
  },
  mainContainer: {
    flex: 1,
    alignSelf: "center",
  },
  userContainer: {
    alignSelf: "center",
    marginTop: hp("10.5%"),
  },
  guestContainer: {
    alignSelf: "center",
    marginTop: hp("5%"),
  },
});

export const modalStyles = StyleSheet.create({
    blurView: {
      width:wp("100%"),
      height:hp("100%")
    },
    modalWrap: {
      alignSelf: "center",
      marginTop: hp("1%")
    },
    modal: {
      borderWidth:0,
      borderColor:"#d6d6d6"
    },
    modalInnerWrap: {
      backgroundColor:"#ededed",
      alignSelf: "center",
      width:wp("90%"),
      height: hp("90%"),
      borderRadius: 5
    },
    closeButtonContainer: {
      flexDirection: "row",
      justifyContent:"space-between"
    },
    closeButton: {
      marginTop:hp("0.5%"),
      marginRight:hp("0.5%")
    },
    titleContainer: {
      borderColor:"#d6d6d6",
      backgroundColor: "white",
      borderWidth: 1,
      borderRadius: 10,
      width: wp("86%"),
      height: hp("5%"),
      marginLeft: wp("2.5%"),
      marginRight: wp("2.5%"),
      marginBottom: hp("5%"),
      textAlign:"center",
      flexDirection: "row",
      flex:1,
      justifyContent: "space-between"
    },
    title: {
      fontSize: hp("2.5%"),
      color: "black",
      fontFamily: "Roboto-Bold",
      marginTop: hp("0.8%")
    },
    priceContainer: {
      height: hp("3%"),
      width: wp("20%"),
      backgroundColor: "black",
      marginTop: hp("0.8%"),
      marginRight: wp("1.5%"),
      borderRadius: 5
    },
    price: {
      marginTop: hp("0.5%"),
      color:"white",
      fontSize: hp("1.75%"),
      fontFamily: "Roboto-Bold",
      textAlign: "center"
    },
    centerdWrap :{
      alignSelf:"center"
    },
    basicUserInfo: {
      maxHeight: hp("50%"),
      marginBottom: wp("1%"),
      marginTop: hp("1%"),
      marginLeft: wp("2.5%"),
      marginRight: wp("2.5%"),
      backgroundColor: "white",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#d6d6d6"
    },
    profileImageBorderHeight: {
      alignSelf: "center",
      marginTop: hp("1.5%"),
      width: hp("16%"),
      height: hp("16%"),
      borderWidth: 1,
      borderColor: "#747474"
    },
    profileImageBorderWidth:{
      alignSelf: "center",
      marginTop: wp("3%"),
      width: wp("32%"),
      height: wp("32%"),
      borderWidth: 1,
      borderColor: "#d6d6d6"
    },  backgroundImageContainer: {
      flex: 1,
      resizeMode: "cover",
    },
    mainContainer: {
      alignSelf: "center",
      marginTop: hp("3%"),
      width: wp("90%"),
      height: wp("60%")
    },
    description: {
      minHeight: hp("33%"),
      marginBottom: hp("0.5%"),
      marginTop: hp("1%"),
      marginLeft: wp("2.5%"),
      marginRight: wp("2.5%"),
      paddingLeft: wp("2%"),
      paddingLeft: wp("1%"),
      paddingTop: wp("2%"),
      paddingBottom: wp("2%"),
      backgroundColor: "white",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#d6d6d6"
    },
    profileImageHeight: {
      alignSelf: "center",
      marginTop: hp("0.35%"),
      width: hp("15%"),
      height: hp("15%")
    },
    profileImageWidth:{
      alignSelf: "center",
      marginTop: wp("0.7%"),
      width: wp("30%"),
      height: wp("30%")
    },
    titleIconWidth: {
      width: wp("12%"),
      height: wp("12%"),
      top: wp("4%"),
      left: wp("2.5%"),
    },
    profileName: {
      alignSelf: "center",
      marginTop: hp("1.5%"),
      marginBottom: hp("0.5%"),
      fontSize: hp("3%"),
      fontWeight: "bold",
      fontFamily: "Roboto-Light",
      color: "black",
    },
    userLocation: {
      flexDirection: "row",
      alignSelf: "center",
      marginBottom: hp("0.25%"),
    },
    location: {
      marginLeft: wp("1%"),
      fontSize: wp("4%"),
      fontFamily: "Roboto-Light",
      color: "black",
    },
    userMail: {
      flexDirection: "row",
      alignSelf: "center",
      marginBottom: hp("0.5%"),
    },
    userOntact: {
      flexDirection: "row",
      alignSelf: "center",
      marginBottom: hp("0.5%"),
    },
    userRating: {
      flexDirection: "row",
      alignSelf: "center",
      marginBottom: hp("1.5%"),
    },
    ratingText: {
      fontSize: hp("2%"),
      fontFamily: "Roboto-Light",
      color: "black",
      marginLeft: wp("1%"),
      marginRight: wp("3%"),
    },
    likeComponent: {
      color: "black",
    },
    like: {
      fontSize: hp("2.75%"),
      color: "black"
    },
    dislikeComponent: {
      color: "black",
    },
    dislike: {
      fontSize: hp("2.75%"),
      color: "black",
    },
    userContact: {
      flexDirection: "row",
      alignSelf: "center",
    },
    userEmail: {
      flexDirection: "row",
      alignSelf: "center",
    },
    aboutUser: {
      marginBottom: hp("0.5%"),
      backgroundColor: "#1e1c24",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "black",
    },
    smallContainer: {
      marginBottom: hp("0.5%"),
      backgroundColor: "#1e1c24",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#ededed",
    },
    sectionName: {
      left: wp("2%"),
      marginTop: hp("1.5%"),
      marginBottom: hp("1.5%"),
      marginLeft: wp("2%"),
      marginRight: wp("2%"),
      fontSize: hp("2.5%"),
      color: "#ededed",
    },
    dashContainer: {
      marginLeft: wp("0.3%"),
      flexDirection: "row",
    },
    line: {
      textAlignVertical: "center",
      fontSize: hp("3%"),
      color: "#ededed",
    },
    userDetails: {
      paddingHorizontal: hp("1.25%"),
      paddingVertical: wp("2%"),
      marginHorizontal: wp("1.5%"),
      marginVertical: hp("0.5%"),
      borderRadius: 10,
      backgroundColor: "#1f1f2f",
    },
    details: {
      fontSize: hp("2%"),
      color: "#ededed",
    },
    commentTitle:{
      fontSize: hp("2%"),
      fontWeight: "bold",
      color: "#ededed",
    },
    commentUser:{
      fontSize: hp("2%"),
      fontWeight: "bold",
      marginTop: hp("0.5%"),
      marginLeft: wp("2%"),
      color: "#ededed",
    },
    commentTime:{
      fontSize: hp("2%"),
      marginTop: hp("0.5%"),
      marginLeft: wp("1%"),
      color: "#ededed",
    },
    commentText:{
      fontSize: hp("2%"),
      marginTop: hp("1%"),
      color: "#ededed",
    },
    arrow: {
      alignSelf: "center",
      fontSize: hp("3%"),
      color: "#ededed",
    },
    arrowSmall: {
      alignSelf: "center",
      marginTop: hp("0.5%"),
      fontSize: hp("3%"),
      color: "#ededed",
    },
    adText: {
      marginLeft: 2,
      marginRight: 2,
      fontFamily: "Roboto-Light"
    }
});

export const profileStyles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    resizeMode: "cover",
  },
  mainContainer: {
    alignSelf: "center",
    marginTop: hp("3%"),
    width: wp("90%"),
    minHeight: hp("80%")
  },
  editButton: {
    height: hp("5%"),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    textAlign: "center",
    backgroundColor: "#03d5ff",
    borderColor: "#ededed"
  },
  editButtonText: {
    marginTop: hp("1%"),
    color: "black",
    fontSize: hp("2%"),
    fontWeight: "bold",
    textAlign: "center"
  },
  basicUserInfo: {
    maxHeight: hp("50%"),
    marginBottom: wp("1%"),
    backgroundColor: "#ededed",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#606060"
  },
  profileImageHeight: {
    alignSelf: "center",
    marginTop: hp("1.5%"),
    width: hp("15%"),
    height: hp("15%"),
  },
  profileImageWidth:{
    alignSelf: "center",
    marginTop: wp("3%"),
    width: wp("30%"),
    height: wp("30%"),
  },
  titleIconWidth: {
    width: wp("12%"),
    height: wp("12%"),
    top: wp("4%"),
    left: wp("2.5%"),
  },
  profileName: {
    alignSelf: "center",
    marginTop: hp("1.5%"),
    marginBottom: hp("0.5%"),
    fontSize: hp("3%"),
    fontWeight: "bold",
    color: "black",
    fontFamily: "Roboto-Bold"
  },
  userLocation: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: hp("0.25%"),
  },
  location: {
    marginLeft: wp("1%"),
    fontSize: wp("4%"),
    fontFamily: "Roboto-Light",
    color: "black",
  },
  userMail: {
    flexDirection: "row",
    alignSelf: "center",
    fontFamily: "Roboto-Light",
    marginBottom: hp("0.5%"),
  },
  userOntact: {
    flexDirection: "row",
    alignSelf: "center",
    fontFamily: "Roboto-Light",
    marginBottom: hp("0.5%"),
  },
  userRating: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: hp("1.5%"),
  },
  ratingText: {
    fontSize: hp("2%"),
    fontFamily: "Roboto-Light",
    color: "black",
    marginLeft: wp("1%"),
    marginRight: wp("3%"),
  },
  likeComponent: {
    color: "black",
  },
  like: {
    fontSize: hp("2.75%"),
    color: "black"
  },
  dislikeComponent: {
    color: "black",
  },
  dislike: {
    fontSize: hp("2.75%"),
    color: "black",
  },
  userContact: {
    flexDirection: "row",
    alignSelf: "center",
  },
  userEmail: {
    flexDirection: "row",
    alignSelf: "center",
  },
  aboutUser: {
    marginBottom: hp("0.5%"),
    backgroundColor: "#ededed",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#606060",
  },
  smallContainer: {
    marginBottom: hp("0.5%"),
    backgroundColor: "#ededed",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#606060",
  },
  smallContainerBottom: {
    marginBottom: hp("5%"),
    backgroundColor: "#ededed",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#606060",
  },
  sectionName: {
    left: wp("2%"),
    marginTop: hp("1.5%"),
    marginBottom: hp("1.5%"),
    marginLeft: wp("2%"),
    marginRight: wp("2%"),
    fontSize: hp("2.5%"),
    textAlign: "center",
    fontFamily: "Roboto-Bold",
    color: "black",
  },
  dashContainer: {
    marginLeft: wp("0.3%"),
    flexDirection: "row",
  },
  line: {
    textAlignVertical: "center",
    fontSize: hp("3%"),
    color: "black",
  },
  userDetails: {
    paddingHorizontal: hp("1.25%"),
    paddingVertical: wp("2%"),
    marginHorizontal: wp("1.5%"),
    marginVertical: hp("0.5%"),
    borderRadius: 10,
    backgroundColor: "white",
  },
  details: {
    fontSize: hp("2%"),
    fontFamily: "Roboto-Light",
    color: "black",
  },
  commentTitle:{
    fontSize: hp("2%"),
    fontWeight: "bold",
    color: "black",
  },
  commentUser:{
    fontSize: hp("2%"),
    fontWeight: "bold",
    marginTop: hp("0.5%"),
    marginLeft: wp("2%"),
    color: "black",
  },
  commentTime:{
    fontSize: hp("2%"),
    marginTop: hp("0.5%"),
    marginLeft: wp("1%"),
    color: "black",
  },
  commentText:{
    fontSize: hp("2%"),
    marginTop: hp("1%"),
    color: "black",
  },
  arrow: {
    alignSelf: "center",
    fontSize: hp("3%"),
    color: "black",
  },
  arrowSmall: {
    alignSelf: "center",
    marginTop: hp("0.5%"),
    fontSize: hp("3%"),
    color: "black",
  }
});
export const adCreationStyles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    resizeMode: "cover",
  },
  mainContainer: {
    alignSelf: "center",
    marginTop: hp("2%"),
    width: wp("90%"),
    minHeight: hp("80%"),
    borderRadius: 10,
    backgroundColor: "#2d2d2d",
  },
  backForwardContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: hp("4%"),
    backgroundColor: "#1e1c24",
  },
  inputFieldContainer: {
    alignSelf: "center",
    marginLeft: wp("1%"),
    width: wp("82%"),
  },
  fieldName: {
    marginLeft: wp("1%"),
    marginTop: hp("1.25%"),
    fontSize: hp("1.55%"),
    fontFamily: "Roboto-Light",
    color: "#ededed",
  },
  adNameField: {
    marginTop: hp("0.75%"),
    width: wp("82%"),
    height: hp("4.5%"),
    paddingLeft: wp("1.5%"),
    fontSize: hp("1.9%"),
    fontFamily: "Roboto-Light",
    fontStyle: "italic",
    color: "#ededed",
    opacity: 0.8,
    backgroundColor: "#1e1c24",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "white",
  },
  adDescriptionField: {
    width: wp("82%"),
    marginTop: hp("0.75%"),
    paddingLeft: wp("1.5%"),
    fontSize: hp("1.9%"),
    fontFamily: "Roboto-Light",
    fontStyle: "italic",
    color: "#ededed",
    opacity: 0.8,
    backgroundColor: "#1e1c24",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  dropDownCatSubContainer: {
    marginTop: hp("0.75%"),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#1e1c24",
    height: hp("9%"),
  },
  dropDownCatContainer: {
    marginTop: hp("0.25%"),
    alignSelf: "center",
    width: wp("75%"),
    borderBottomWidth: 1,
    borderColor: "white",
    backgroundColor: "#1e1c24",
    height: hp("4%"),
  },
  dropDownSubContainer: {
    alignSelf: "center",
    width: wp("75%"),
    backgroundColor: "#1e1c24",
    height: hp("4%"),
    fontWeight: "bold",
  },
  priceRBContainer: {
    marginTop: hp("0.75%"),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#1e1c24",
    height: hp("9%"),
  },
  pickImageContainer: {
    alignSelf: "center",
    marginTop: hp("0.75%"),
    width: wp("82%"),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#1e1c24",
    opacity: 0.8,
    height: hp("4.5%"),
  },
  pickImageAdditional: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("75%"),
  },
  pickingImage: {
    paddingTop: hp("0.75%"),
    fontSize: hp("1.9%"),
    fontFamily: "Roboto-Light",
    color: "#ededed",
    fontStyle: "italic"
  },
  plusIcon: {
    fontSize: hp("2.25%"),
    color: "#ededed",
    paddingTop: hp("0.85%"),
  },
  inputFieldAdditionalContainer: {
    flexDirection: "row",
  },
  questionMarkIcon: {
    marginLeft: wp("1%"),
    fontSize: hp("2.25%"),
    color: "#ededed",
    paddingTop: hp("1.25%"),
  },
  dropDownTypeContainer: {
    marginTop: hp("0.75%"),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#1e1c24",
    height: hp("4.5%"),
  },
  typeCodeInput: {
    alignSelf: "center",
    textAlign: "center",
    marginTop: hp("0.75%"),
    width: wp("40%"),
    height: hp("4%"),
    paddingLeft: wp("1.5%"),
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ededed",
    fontSize: hp("2%"),
    fontStyle: "italic",
    fontFamily: "Roboto-Light",
    opacity: 0.8,
  },
});

export const aboutUsStyles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    resizeMode: "cover",
  },
  mainContainer: {
    alignSelf: "center",
    justifyContent: "space-between",
    width: wp("100%"),
    height: hp("88%"),
  },
  titleContainer: {
    alignContent: "center",
    marginTop: hp("5%"),
  },
  titleText: {
    alignSelf: "center",
    fontSize: hp("5%"),
    fontWeight: "600",
  },
  subtitleContainer: {
    alignSelf: "center",
    marginTop: hp("2%"),
    width: wp("90%"),
  },
  subtitleNameContainer: {
    borderBottomWidth: 1
  },
  subtitleText: {
    marginTop: hp("2%"),
    paddingLeft: wp("1.5%"),
    fontSize: hp("2.5%"),
    fontFamily: 'Roboto-Black',
  },
  mainText: {
    marginTop: hp("1.25%"),
    fontSize: hp("2.25%"),
    textAlign: "justify",
    fontFamily: 'Roboto-LightItalic',
    fontWeight: "400",
  },
  contactPartContainer: {
    marginBottom: hp("5%"),
  },
  contactText: {
    marginBottom: hp("1.25%"),
    fontSize: hp("2%"),
    fontFamily: 'Comfortaa-Regular',
    fontWeight: "600",
    textAlign: "center",
  },
});

export const contactUsStyles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    resizeMode: "cover",
  },
  mainContainer: {
    alignSelf: "center",
    marginTop: hp("2%"),
    width: wp("90%"),
    minHeight: hp("76%"),
    borderRadius: 10,
    backgroundColor: "#2d2d2d",
  },
  backForwardContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: hp("4%"),
    backgroundColor: "#1e1c24",
  },
  inputFieldContainer: {
    marginTop: hp("1%"),
    alignSelf: "center",
    marginLeft: wp("1%"),
    width: wp("82%"),
  },
  inputFieldContainerWithMargin: {
    alignSelf: "center",
    marginLeft: wp("1%"),
    marginTop: hp("2%"),
    width: wp("82%"),
  },
  fieldName: {
    marginLeft: wp("1%"),
    marginTop: hp("1.25%"),
    fontSize: hp("1.55%"),
    fontFamily: "Roboto-Light",
    color: "#ededed",
  },
  fieldNameBold: {
    marginLeft: wp("1%"),
    marginTop: hp("1%"),
    fontSize: hp("1.75%"),
    fontFamily: "Roboto-Bold",
    color: "#ededed",
  },
  adNameField: {
    marginTop: hp("0.75%"),
    width: wp("82%"),
    height: hp("4.5%"),
    paddingLeft: wp("1.5%"),
    fontSize: hp("1.9%"),
    fontFamily: "Roboto-Light",
    fontStyle: "italic",
    color: "#ededed",
    opacity: 0.45,
    backgroundColor: "#1e1c24",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  adDescriptionField: {
    width: wp("82%"),
    marginTop: hp("0.75%"),
    paddingLeft: wp("1.5%"),
    paddingTop: hp("0.35%"),
    fontSize: hp("1.9%"),
    fontFamily: "Roboto-Light",
    color: "#ededed",
    fontStyle: "italic",
    opacity: 0.45,
    backgroundColor: "#1e1c24",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  dropDownCatSubContainer: {
    marginTop: hp("0.75%"),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#1e1c24",
    height: hp("9%"),
  },
  dropDownCatContainer: {
    marginTop: hp("0.25%"),
    alignSelf: "center",
    width: wp("75%"),
    borderBottomWidth: 1,
    borderColor: "white",
    backgroundColor: "#1e1c24",
    height: hp("4%"),
  },
  dropDownSubContainer: {
    alignSelf: "center",
    width: wp("75%"),
    backgroundColor: "#1e1c24",
    height: hp("4%"),
    fontWeight: "bold",
  },
  priceRBContainer: {
    marginTop: hp("0.75%"),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#1e1c24",
    height: hp("9%"),
  },
  pickImageContainer: {
    alignSelf: "center",
    marginTop: hp("0.75%"),
    width: wp("82%"),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "white",
    opacity: 0.45,
    backgroundColor: "#1e1c24",
    height: hp("4.5%"),
  },
  pickImageAdditional: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("75%"),
  },
  pickingImage: {
    paddingTop: hp("0.65%"),
    fontSize: hp("1.9%"),
    fontFamily: "Roboto-Light",
    color: "#ededed",
    fontStyle: "italic",
  },
  plusIcon: {
    fontSize: hp("2.25%"),
    color: "#ededed",
    paddingTop: hp("0.85%"),
  },
  inputFieldAdditionalContainer: {
    flexDirection: "row",
  },
  questionMarkIcon: {
    marginLeft: wp("1%"),
    fontSize: hp("2.25%"),
    color: "#ededed",
    paddingTop: hp("1.25%"),
  },
  dropDownTypeContainer: {
    marginTop: hp("0.75%"),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#1e1c24",
    height: hp("4.5%"),
  },
  typeCodeInput: {
    alignSelf: "center",
    textAlign: "center",
    marginTop: hp("0.75%"),
    width: wp("40%"),
    height: hp("4%"),
    paddingLeft: wp("1.5%"),
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ededed",
    fontSize: hp("2%"),
    fontStyle: "italic",
    opacity: 0.8,
  },
});