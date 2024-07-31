import { AboutCar } from './components/AboutCar'
import { AboutMe } from './components/AboutMe'
import { AboutMikky } from './components/AboutMikky'
import { AboutMedved } from './components/AboutMedved'
import { Header } from './components/Header'

export const App = () => {
  return <div>
    <Header />
    <AboutMe />
    <AboutMikky />
    <AboutCar />
    <AboutMedved />
  </div>
}