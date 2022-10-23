import FormComponent from "./components/FormComponent/formComponent"
import CardComponent from "./components/Card/cardComponent"
import Svgs from "./assets/svg_defs"

function App() {
  return (
    <>
      <Svgs/>
      <div className="section-form">
        <FormComponent/>
      </div>
      <div className="section-card">
        <CardComponent/>
      </div>
    </>
  )
}

export default App
