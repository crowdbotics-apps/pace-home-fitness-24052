import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen10208196Navigator from '../features/BlankScreen10208196/navigator';
import BlankScreen9208195Navigator from '../features/BlankScreen9208195/navigator';
import Settings8197984Navigator from '../features/Settings8197984/navigator';
import UserProfile196446Navigator from '../features/UserProfile196446/navigator';
import Maps196427Navigator from '../features/Maps196427/navigator';
import Settings196390Navigator from '../features/Settings196390/navigator';
import Maps196388Navigator from '../features/Maps196388/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen10208196: { screen: BlankScreen10208196Navigator },
BlankScreen9208195: { screen: BlankScreen9208195Navigator },
Settings8197984: { screen: Settings8197984Navigator },
UserProfile196446: { screen: UserProfile196446Navigator },
Maps196427: { screen: Maps196427Navigator },
Settings196390: { screen: Settings196390Navigator },
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
