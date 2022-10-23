import './cardComponent.scss'

export default function CardComponent() {
  return (
    <section className='card'>
      <strong className='card--numbber'></strong>
      <div>
        <p className='card--name'></p>
        <p className='card--data'></p>
      </div>
    </section>
  )
}
