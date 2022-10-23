import FormComponent from "./components/FormComponent/formComponent"
import CardComponent from "./components/Card/cardComponent"

function App() {
  return (
    <>
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
