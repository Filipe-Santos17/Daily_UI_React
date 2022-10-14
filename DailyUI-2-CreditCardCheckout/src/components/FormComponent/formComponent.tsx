import InputText from "../InputText/inputText"
import Title from "../Title/title"
import Button from "../Button/button"
import "./formComponent.scss"

export default function FormComponent() {
  return (
    <form>
      <Title
        children="Payment Details"
      />
      <div>
        <div className="form-one">
          <InputText
            labelName="Name on card"
            idInput="id_name"
          />
        </div>
        <div className="form-one">
          <InputText
            labelName="Card Number"
            idInput="id_number"
          />
        </div>
        <div className="form-two">
          <div>
            <InputText
              labelName="Expiry date"
              idInput="id_date"
            />
          </div>
          <div>
            <InputText
              labelName="CVV"
              idInput="id_cvv"
            />
          </div>
        </div>
        <Button
          children="Pay"          
        />
      </div>
    </form>
  )
}
