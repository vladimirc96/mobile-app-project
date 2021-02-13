import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
// stacks
import CategoriesStack from './categoriesStack';
import Drawer from "../components/Drawer";

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator(
  {
    Categories: {
      screen: CategoriesStack,
    },
  },
  {
    contentComponent: Drawer,
  }
);

export default createAppContainer(RootDrawerNavigator);
