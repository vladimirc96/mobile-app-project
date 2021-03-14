import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
// stacks
import CategoriesStack from "./categoriesStack";
import AboutUsStack from "./aboutUsStack";
import Drawer from "../components/Drawer";

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator(
  {
    Categories: {
      screen: CategoriesStack,
    },
    AboutUs: {
      screen: AboutUsStack,
    },
  },
  {
    contentComponent: Drawer,
  }
);

export default createAppContainer(RootDrawerNavigator);
