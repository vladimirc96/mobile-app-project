import React from "react";
import { ImageBackground, Image, View } from "react-native";
import { AdvButton } from "./../components/Buttons";
import { categoriesStyles } from "./../shared/Styles";
import Category from "./../components/Category";

const categories = [
  { id: 1, name: "Majstori i zanati" },
  { id: 2, name: "Računari, mobilni telefoni i bela tehnika" },
  { id: 3, name: "Privatni časovi" },
  { id: 4, name: "Prevodi i izrada radova" },
  { id: 5, name: "Prevoz" },
  { id: 6, name: "Muzika i oprema" },
  { id: 7, name: "Fotografija i video" },
  { id: 8, name: "Dizajn, umetnosti i štampa" },
  { id: 9, name: "Lepota, nega i tretmani" },
  { id: 10, name: "Održavanje i kućni poslovi" },
];

export default class Categories extends React.Component {
  render() {
    const backgroundImage = require("./../assets/images/logInBackground.jpg");
    const categoryList = categories.map((category) => (
      <View style={categoriesStyles.singleCategoryContainer} key={category.id}>
        <Category
          onPress={() =>
            this.props.navigation.navigate("SubCategories", {
              categoryId: category.id,
            })
          }
          title={category.name}
        />
      </View>
    ));
    const rows = [];
    for (var i = 0; i < categories.length; i += 3) {
      rows.push(
        <View style={categoriesStyles.categoryRowContainer} key={i}>
          {categoryList.slice(i, i + 3)}
        </View>
      );
    }
    return (
      <ImageBackground
        style={categoriesStyles.backgroundImageContainer}
        source={backgroundImage}
      >
        <View style={categoriesStyles.mainContainer}>
          {rows}
          <AdvButton title={"Postavite oglas"} />
        </View>
      </ImageBackground>
    );
  }
}
