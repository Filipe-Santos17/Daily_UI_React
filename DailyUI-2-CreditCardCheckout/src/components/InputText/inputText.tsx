import "./inputText.scss"

type Props = {
  labelName : string
  idInput : string
}

export default function InputText({labelName, idInput}:Props): JSX.Element {
  return (
    <>
      <label htmlFor={idInput} className="label">{labelName}</label>
      <input type="text" name={idInput} id={idInput} className="input"/>
    </>
  )
}
