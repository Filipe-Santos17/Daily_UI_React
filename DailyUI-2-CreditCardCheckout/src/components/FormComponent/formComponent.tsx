import InputText from "../InputText/inputText"


export default function FormComponent() {
  return (
    <form>
      <div>
        <InputText
          labelName="Name on card"
          idInput="id_name"
        />
      </div>
      <div>
        <InputText
          labelName="Card Number"
          idInput="id_number"
        />
      </div>
      <div>
        <InputText
          labelName="Expiry date"
          idInput="id_date"
        />
        <InputText
          labelName="CVV"
          idInput="id_cvv"
        />
      </div>
    </form>
  )
}
