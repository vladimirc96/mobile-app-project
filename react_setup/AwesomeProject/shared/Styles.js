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
    height: hp("7%"),
    paddingTop: hp("0.85%"),
    backgroundColor: "#1e1c24",
    borderColor: "#ededed",
  },
  numberOfAdsContainer: {
    height: 20,
  },
  titleText: {
    color: "#ededed",
    textAlign: "center",
    fontSize: 25,
  },
  adContainer: {
    alignSelf: "center",
    marginTop: hp("1%"),
    height: hp("16%"),
    width: wp("90%"),
  },
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
    paddingTop: hp("1.5%"),
    color: "#ededed",
    fontSize: 20,
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
    paddingTop: hp("1.5%"),
    color: "#ededed",
    fontSize: 20,
    fontFamily: "Comfortaa-Bold",
  },
  firstRunButtonContainer: {
    width: wp("70%"),
    height: hp("37%"),
    borderRadius: 30,
    backgroundColor: "#1e1c24",
    opacity: 0.9,
  },
  inputImage: {
    marginTop: 20,
    alignSelf: "center",
    width: 140,
    height: 140,
  },
  firstRunButtonText: {
    textAlign: "center",
    paddingTop: hp("5%"),
    color: "#ededed",
    fontSize: 20,
    fontFamily: "Comfortaa-Bold",
  },
  AdvButtonContainer: {
    alignSelf: "center",
    width: wp("92%"),
    height: hp("9%"),
    borderRadius: 20,
    backgroundColor: "#1e1c24",
    opacity: 0.99,
  },
  AdvButtonText: {
    textAlign: "center",
    marginTop: hp("1.5%"),
    color: "#ededed",
    fontSize: 20,
    fontFamily: "Comfortaa-Bold",
  },
});

export const categoriesStyles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    resizeMode: "cover",
  },
  mainContainer: {
    alignSelf: "center",
    marginBottom: hp("4%"),
    marginTop: hp("8%"),
  },
  categoryRowContainer: {
    flexDirection: "row",
  },
  category: {
    marginBottom: hp("1%"),
    marginRight: wp("2%"),
    marginLeft: wp("2"),
    width: wp("28%"),
    height: hp("15%"),
    borderRadius: 30,
    opacity: 0.9,
    backgroundColor: "#1e1c24",
  },
  categoryImage: {
    alignSelf: "center",
    marginTop: 15,
    width: 50,
    height: 50,
  },
  categoryName: {
    textAlign: "center",
    paddingTop: 3,
    fontSize: 10,
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
    fontSize: 40,
    fontFamily: "Comfortaa-Regular",
  },
  secondText: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 40,
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
    marginTop: hp("2%"),
    borderRadius: 20,
    borderWidth: 2,
    opacity: 0.8,
    borderColor: "#ededed",
    backgroundColor: "#1e1c24",
  },
  footerContainer: {
    alignSelf: "center",
    fontFamily: "Comfortaa-Regular",
  },
  footerSmallContainer: {
    flexDirection: "row",
    marginBottom: hp("3%"),
    justifyContent: "center",
  },
  footerText: {
    fontSize: 18,
  },
  boldText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 18,
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
  imageContainer: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: hp("7.3%"),
    marginBottom: hp("2.2%"),
    borderWidth: 2,
    width: wp("44%"),
    height: hp("24%"),
    paddingLeft: wp("6.7%"),
    borderRadius: 80,
    opacity: 0.8,
    borderColor: "#ededed",
    backgroundColor: "#1e1c24",
  },
  inputImage: {
    width: wp("30%"),
    height: hp("17%"),
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
    marginTop: hp("2%"),
    opacity: 0.8,
    borderColor: "#ededed",
    backgroundColor: "#1e1c24",
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
    marginTop: hp("2%"),
    opacity: 0.8,
    borderColor: "red",
    backgroundColor: "#1e1c24",
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
    width: wp("55%"),
    height: hp("10%"),
    paddingTop: hp("3%"),
    borderRadius: 30,
    borderWidth: 2,
    backgroundColor: "#1e1c24",
    borderColor: "#ededed",
  },
  titleIcon: {
    width: 40,
    height: 40,
    bottom: 10,
    left: 8,
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
    fontSize: 20,
    color: "#ededed",
    letterSpacing: 1,
    marginLeft: -60,
  },
  headerTextMain: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#ededed",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 5,
    color: "#ededed",
    fontSize: 40,
  },
  avatar: {
    height: 45,
    width: 45,
    position: "absolute",
    right: 5,
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
    paddingTop: 12,
    paddingLeft: 10,
    color: "#ededed",
    fontSize: 18,
    fontFamily: "Comfortaa-Bold",
  },
});

export const adStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#3f3e42",
    width: "100%",
    height: "100%",
  },
  adMainContainer: {
    flexDirection: "row",
  },
  adImage: {
    height: hp("14.5%"),
    width: wp("27.2%"),
    top: hp("0.7%"),
    left: wp("1.36%"),
    borderWidth: 2,
    borderColor: "#ededed",
  },
  adMainText: {
    marginLeft: wp("2.72%"),
    width: wp("36.6%"),
    height: hp("14.5%"),
    backgroundColor: "#3f3e42",
  },
  adTitle: {
    textAlign: "left",
    fontSize: 14,
    fontFamily: "Comfortaa-Bold",
    color: "#ededed",
  },
  ownerContainer: {
    flexDirection: "row",
  },
  leftDashContainer: {
    marginLeft: wp("0.3%"),
    flexDirection: "row",
  },
  line: {
    textAlignVertical: "center",
    fontSize: 5,
    color: "#ededed",
  },
  descriptionSmall: {
    width: "100%",
    height: hp("9.5%"),
    borderRadius: 5,
    backgroundColor: "#1e1c24",
  },
  descriptionLarge: {
    width: "100%",
    height: hp("7%"),
    borderRadius: 5,
    backgroundColor: "#1e1c24",
  },
  descriptionText: {
    fontSize: 8,
    marginLeft: wp("0.85%"),
    marginRight: wp("0.85%"),
    color: "#ededed",
  },
  descriptionDetails: {
    alignSelf: "center",
  },
  descriptionDetailsText: {
    fontSize: 8,
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#ededed",
  },
  detailsArrow: {
    alignSelf: "center",
    fontSize: 10,
    color: "#ededed",
  },
  ownerNameContainer: {
    alignSelf: "flex-start",
    marginTop: hp("0.14%"),
  },
  ownerName: {
    fontSize: 8,
    color: "#ededed",
  },
  adDetails: {
    marginTop: hp("0.7%"),
    marginLeft: wp("1.36%"),
    width: wp("20.4%"),
    height: hp("14.5%"),
    backgroundColor: "#3f3e42",
  },
  priceContainer: {
    alignSelf: "center",
    marginTop: hp("0.14%"),
    height: hp("2.6%"),
    width: wp("17.7%"),
    backgroundColor: "black",
  },
  priceValue: {
    textAlign: "center",
    marginTop: hp("0.27%"),
    fontSize: 10,
    color: "#ededed",
  },
  publishDateContainer: {
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: hp("0.6%"),
    width: wp("16.4%"),
    backgroundColor: "#3f3e42",
  },
  publishTitle: {
    fontSize: 8,
    color: "#ededed",
  },
  publishDate: {
    fontSize: 8,
    color: "#ededed",
  },
  location: {
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: wp("16.4%"),
    marginTop: hp("1.36%"),
    backgroundColor: "#3f3e42",
  },
  locationText: {
    fontSize: 8,
    color: "#ededed",
  },
  ratingStars: {
    flexDirection: "row",
    justifyContent: "center",
    width: wp("20.4%"),
    marginTop: hp("2%"),
  },
  likeText: {
    fontSize: 9,
    color: "#ededed",
  },
  like: {
    marginLeft: wp("1.36%"),
    color: "#ededed",
  },
  dislike: {
    marginLeft: wp("1.36%"),
    color: "#ededed",
  },
  dislikeText: {
    marginLeft: wp("1.36%"),
    fontSize: 9,
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
    marginTop: hp("11%"),
  },
  guestContainer: {
    alignSelf: "center",
    marginTop: hp("5%"),
  },
});
