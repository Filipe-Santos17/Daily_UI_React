//import { ButtonHTMLAttributes } from "react"

type Props = {
  children : string
}

export default function Button({children} : Props) : JSX.Element {
  return <button type="submit" className="btn">{children}</button>
}
