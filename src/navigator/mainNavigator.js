import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen37208735Navigator from '../features/BlankScreen37208735/navigator';
import BlankScreen36208237Navigator from '../features/BlankScreen36208237/navigator';
import BlankScreen32208234Navigator from '../features/BlankScreen32208234/navigator';
import BlankScreen35208232Navigator from '../features/BlankScreen35208232/navigator';
import BlankScreen34208231Navigator from '../features/BlankScreen34208231/navigator';
import BlankScreen33208230Navigator from '../features/BlankScreen33208230/navigator';
import CopyOfBlankScreen29208229Navigator from '../features/CopyOfBlankScreen29208229/navigator';
import BlankScreen31208228Navigator from '../features/BlankScreen31208228/navigator';
import BlankScreen30208227Navigator from '../features/BlankScreen30208227/navigator';
import BlankScreen29208226Navigator from '../features/BlankScreen29208226/navigator';
import BlankScreen28208225Navigator from '../features/BlankScreen28208225/navigator';
import BlankScreen27208224Navigator from '../features/BlankScreen27208224/navigator';
import BlankScreen26208223Navigator from '../features/BlankScreen26208223/navigator';
import BlankScreen25208222Navigator from '../features/BlankScreen25208222/navigator';
import BlankScreen24208221Navigator from '../features/BlankScreen24208221/navigator';
import BlankScreen23208220Navigator from '../features/BlankScreen23208220/navigator';
import BlankScreen22208219Navigator from '../features/BlankScreen22208219/navigator';
import BlankScreen21208218Navigator from '../features/BlankScreen21208218/navigator';
import BlankScreen20208217Navigator from '../features/BlankScreen20208217/navigator';
import BlankScreen19208216Navigator from '../features/BlankScreen19208216/navigator';
import BlankScreen18208215Navigator from '../features/BlankScreen18208215/navigator';
import BlankScreen17208214Navigator from '../features/BlankScreen17208214/navigator';
import BlankScreen16208213Navigator from '../features/BlankScreen16208213/navigator';
import BlankScreen15208212Navigator from '../features/BlankScreen15208212/navigator';
import BlankScreen14208210Navigator from '../features/BlankScreen14208210/navigator';
import BlankScreen13208209Navigator from '../features/BlankScreen13208209/navigator';
import BlankScreen12208201Navigator from '../features/BlankScreen12208201/navigator';
import CopyOfBlankScreen10208200Navigator from '../features/CopyOfBlankScreen10208200/navigator';
import BlankScreen10208196Navigator from '../features/BlankScreen10208196/navigator';
import BlankScreen9208195Navigator from '../features/BlankScreen9208195/navigator';
import UserProfile196446Navigator from '../features/UserProfile196446/navigator';
import Maps196427Navigator from '../features/Maps196427/navigator';
import Settings196390Navigator from '../features/Settings196390/navigator';
import Maps196388Navigator from '../features/Maps196388/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen37208735: { screen: BlankScreen37208735Navigator },
BlankScreen36208237: { screen: BlankScreen36208237Navigator },
BlankScreen32208234: { screen: BlankScreen32208234Navigator },
BlankScreen35208232: { screen: BlankScreen35208232Navigator },
BlankScreen34208231: { screen: BlankScreen34208231Navigator },
BlankScreen33208230: { screen: BlankScreen33208230Navigator },
CopyOfBlankScreen29208229: { screen: CopyOfBlankScreen29208229Navigator },
BlankScreen31208228: { screen: BlankScreen31208228Navigator },
BlankScreen30208227: { screen: BlankScreen30208227Navigator },
BlankScreen29208226: { screen: BlankScreen29208226Navigator },
BlankScreen28208225: { screen: BlankScreen28208225Navigator },
BlankScreen27208224: { screen: BlankScreen27208224Navigator },
BlankScreen26208223: { screen: BlankScreen26208223Navigator },
BlankScreen25208222: { screen: BlankScreen25208222Navigator },
BlankScreen24208221: { screen: BlankScreen24208221Navigator },
BlankScreen23208220: { screen: BlankScreen23208220Navigator },
BlankScreen22208219: { screen: BlankScreen22208219Navigator },
BlankScreen21208218: { screen: BlankScreen21208218Navigator },
BlankScreen20208217: { screen: BlankScreen20208217Navigator },
BlankScreen19208216: { screen: BlankScreen19208216Navigator },
BlankScreen18208215: { screen: BlankScreen18208215Navigator },
BlankScreen17208214: { screen: BlankScreen17208214Navigator },
BlankScreen16208213: { screen: BlankScreen16208213Navigator },
BlankScreen15208212: { screen: BlankScreen15208212Navigator },
BlankScreen14208210: { screen: BlankScreen14208210Navigator },
BlankScreen13208209: { screen: BlankScreen13208209Navigator },
BlankScreen12208201: { screen: BlankScreen12208201Navigator },
CopyOfBlankScreen10208200: { screen: CopyOfBlankScreen10208200Navigator },
BlankScreen10208196: { screen: BlankScreen10208196Navigator },
BlankScreen9208195: { screen: BlankScreen9208195Navigator },
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
