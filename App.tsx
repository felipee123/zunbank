import Home from "./src/screens/main";
import { Roboto_700Bold,Roboto_500Medium,Roboto_400Regular, useFonts } from '@expo-google-fonts/roboto';


export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular
  });

  if(!fontsLoaded){
    return null;
  }
  return <Home></Home>
 
}


