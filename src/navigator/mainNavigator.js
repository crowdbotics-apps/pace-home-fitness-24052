import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps196427Navigator from '../features/Maps196427/navigator';
import Settings196405Navigator from '../features/Settings196405/navigator';
import Settings196390Navigator from '../features/Settings196390/navigator';
import NotificationList196389Navigator from '../features/NotificationList196389/navigator';
import Maps196388Navigator from '../features/Maps196388/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps196427: { screen: Maps196427Navigator },
Settings196405: { screen: Settings196405Navigator },
Settings196390: { screen: Settings196390Navigator },
NotificationList196389: { screen: NotificationList196389Navigator },
Maps196388: { screen: Maps196388Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
