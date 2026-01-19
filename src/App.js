import Main from "./components/Main"
import style from "./style/style.css"
import animations from "./style/animations.css"
import ribbon from "./style/ribbon.css"
import Ribbon from "./components/Ribbon"

const App = () => {
  return (
    <div className="App">
      <Ribbon />
      <Main />
    </div>
  )
}

export default App
