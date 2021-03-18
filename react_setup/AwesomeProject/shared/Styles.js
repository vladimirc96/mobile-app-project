import { StyleSheet } from "react-native";
import { withTheme } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
    marginTop: hp("2.5%"),
    marginBottom: hp("1%"),
    width: wp("100%"),
    height: hp("6%"),
    paddingTop: hp("0.7%"),
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
    marginTop: hp("2%"),
    alignSelf: "center",
    width: hp("25%"),
    height: hp("25%"),
  },
  inputImageWidth: {
    marginTop: wp("6%"),
    alignSelf: "center",
    width: wp("52%"),
    height: wp("52%"),
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
    backgroundColor: "#87cefa",
    opacity: 0.99,
  },
  editProfileButtonText: {
    textAlign: "center",
    marginTop: hp("1%"),
    color: "#ededed",
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
    borderRadius: 30,
    opacity: 0.9,
    backgroundColor: "#1e1c24",
  },
  categoryImageHeight: {
    alignSelf: "center",
    marginTop: hp("1%"),
    width: hp("10%"),
    height: hp("10%"),
  },
  categoryImageWidth: {
    alignSelf: "center",
    marginTop: wp("2%"),
    width: wp("20%"),
    height: wp("20%"),
  },
  categoryNameHeight: {
    textAlign: "center",
    paddingTop: hp("0.3%"),
    fontSize: hp("1.9%"),
    fontFamily: "Comfortaa-Bold",
    color: "#ededed",
  },
  categoryNameWidth: {
    textAlign: "center",
    paddingTop: wp("0.4%"),
    fontSize: wp("2.5%"),
    fontFamily: "Comfortaa-Bold",
    color: "#ededed",
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
    marginTop: hp("7.3%"),
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
    marginTop: hp("7.3%"),
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
    color: "#ffffff",
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
    color: "#ffffff",
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
    backgroundColor: "#3f3e42",
    width: "100%",
    height: "100%",
    borderRadius: 5,
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
    borderColor: "#ededed",
  },
  adMainText: {
    marginTop: 3,
    marginLeft: wp("2.72%"),
    width: wp("36.6%"),
    backgroundColor: "#3f3e42",
  },
  adTitleContainer: {
    borderBottomWidth: 0.5,
    borderColor: "#ededed",
    marginBottom: hp("1%"),
  },
  adTitle: {
    textAlign: "center",
    fontSize: wp("3%"),
    marginTop: wp("1%"),
    fontFamily: "Comfortaa-Bold",
    color: "#ededed",
  },
  descriptionSmall: {
    width: "100%",
    height: wp("19%"),
    borderRadius: 5,
    fontFamily: 'Roboto-Regular',
    backgroundColor: "#1e1c24",
  },
  descriptionLarge: {
    width: "100%",
    height: wp("15.5%"),
    borderRadius: 5,
    fontFamily: 'Roboto-Regular',
    backgroundColor: "#1e1c24",
  },
  descriptionText: {
    fontSize: wp("2.5%"),
    marginLeft: wp("0.85%"),
    marginRight: wp("0.85%"),
    color: "#ededed",
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
    color: "#ededed",
  },
  detailsArrow: {
    alignSelf: "center",
    fontSize: wp("2.75%"),
    color: "#ededed",
  },
  ownerNameContainer: {
    alignSelf: "flex-start",
    marginTop: wp("0.5%"),
  },
  ownerName: {
    fontSize: wp("2%"),
    fontFamily: 'Roboto-Thin',
    fontStyle: 'italic',
    color: "#ededed",
  },
  adDetails: {
    marginTop: wp("2%"),
    marginLeft: wp("1.5%"),
    width: wp("20.4%"),
    backgroundColor: "#3f3e42",
  },
  priceContainer: {
    alignSelf: "center",
    marginTop: wp("0.3%"),
    height: wp("5.5%"),
    width: wp("17.7%"),
    borderRadius: 5,
    backgroundColor: "black",
  },
  priceValue: {
    textAlign: "center",
    marginTop: wp("1%"),
    fontSize: wp("2.75%"),
    fontFamily: 'Roboto-Regular',
    color: "#ededed",
  },
  publishDateContainer: {
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: wp("2%"),
    width: wp("16.4%"),
    backgroundColor: "#3f3e42",
  },
  publishTitle: {
    fontSize: wp("2.5%"),
    fontFamily: 'Roboto-Light',
    color: "#ededed",
  },
  publishDate: {
    fontSize: wp("2.5%"),
    color: "#ededed",
  },
  location: {
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: wp("16.4%"),
    marginTop: wp("2%"),
    backgroundColor: "#3f3e42",
  },
  locationText: {
    fontSize: wp("2.5%"),
    fontFamily: 'Roboto-Bold',
    color: "#ededed",
  },
  ratingStars: {
    flexDirection: "row",
    justifyContent: "center",
    width: wp("20.4%"),
    marginTop: wp("3%"),
  },
  likeText: {
    fontSize: wp("2.75%"),
    fontFamily: 'Roboto-Light',
    color: "#ededed",
  },
  like: {
    marginLeft: wp("1.36%"),
    fontSize: wp("2.75%"),
    color: "#ededed",
  },
  dislike: {
    marginLeft: wp("1.36%"),
    fontSize: wp("2.75%"),
    color: "#ededed",
  },
  dislikeText: {
    marginLeft: wp("1.36%"),
    fontSize: wp("2.75%"),
    fontFamily: 'Roboto-Light',
    color: "#ededed",
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
