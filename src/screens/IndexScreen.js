import { createStackNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';
import { FadeFromBottomAndroid } from 'react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/TransitionPresets';

const navigator = createStackNavigator(
{
    Index: IndexScreen
}, 
{
    initialRouteName: 'Index',
    defaultNavigationOptions: {
        title: 'Blogs'
    }
});

export default createAppContainer(navigator);