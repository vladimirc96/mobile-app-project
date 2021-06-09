import { createAppContainer, createSwitchNavigator } from "react-navigation";
import DrawerNavigator from "./drawer";
import AuthStack from "./AuthStack";

export default createAppContainer(
  createSwitchNavigator(
    {
      Drawer: DrawerNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Drawer",
    }
  )
);
