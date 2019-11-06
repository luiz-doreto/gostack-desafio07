import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import Cart from './pages/Cart';

const Routes = createAppContainer(
    createSwitchNavigator(
        {
            Main,
            Cart,
        },
        {
            headerLayoutPreset: 'center',
            headerBackTitleVisible: false,
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#191920',
                },
                headerTintColor: '#FFF',
            },
        }
    )
);

export default Routes;
