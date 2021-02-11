import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import CategoriesStack from './categoriesStack';
import FirstRunStack from './firstRunStack'
;
// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
    Categories: {
    screen: CategoriesStack,
    },
});

export default createAppContainer(RootDrawerNavigator);