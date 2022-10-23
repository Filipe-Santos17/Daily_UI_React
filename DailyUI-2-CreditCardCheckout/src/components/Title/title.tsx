type Props = {
  children : string
}

export default function Title({children}:Props): JSX.Element {
  return <h1 className="title">{children}</h1>
}
