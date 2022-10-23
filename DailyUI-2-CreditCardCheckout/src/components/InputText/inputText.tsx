type Props = {
  labelName : string
  idInput : string
  data: string | number
  setData: Function
}

export default function InputText({labelName, idInput, data ,setData}:Props): JSX.Element {

  function handleDataChange(e: React.ChangeEvent<HTMLInputElement>){
    const newData = e.currentTarget.value
    setData(newData)
  }

  return (
    <>
      <label htmlFor={idInput} className="label">{labelName}</label>
      <input 
        type="text" 
        name={idInput} 
        id={idInput} 
        className="input" 
        value={data} 
        onChange={handleDataChange}
      />
    </>
  )
}
