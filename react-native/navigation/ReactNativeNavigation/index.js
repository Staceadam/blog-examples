import { Navigation } from 'react-native-navigation'
import Home from './navigation/screens/Home'
import Profile from './navigation/screens/Profile'

Navigation.registerComponent('Home', () => Home)
Navigation.registerComponent('Profile', () => Profile)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home'
            }
          }
        ]
      }
    }
  })
})
