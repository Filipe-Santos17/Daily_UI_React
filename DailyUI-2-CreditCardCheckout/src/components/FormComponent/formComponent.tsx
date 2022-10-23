import {useState} from "react"
import InputText from "../InputText/inputText"
import Title from "../Title/title"
import Button from "../Button/button"

export default function FormComponent() {
  //Use State Methods
  const [nameData, setNameData] = useState("")
  const [numberData, setNumberData] = useState(Number)
  const [expiryData, setExpiryData] = useState(Number)
  const [cvvData, setCvvData] = useState(Number)

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
            data={nameData}
            setData={setNameData}
          />
        </div>
        <div className="form-one">
          <InputText
            labelName="Card Number"
            idInput="id_number"
            data={numberData}
            setData={setNumberData}
          />
        </div>
        <div className="form-two">
          <div>
            <InputText
              labelName="Expiry date"
              idInput="id_date"
              data={expiryData}
              setData={setExpiryData}
            />
          </div>
          <div>
            <InputText
              labelName="CVV"
              idInput="id_cvv"
              data={cvvData}
              setData={setCvvData}
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
