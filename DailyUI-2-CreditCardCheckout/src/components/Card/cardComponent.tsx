export default function CardComponent() {
  return (
    <section className='card'>
      <svg className="wifiSvg">
        <use xlinkHref="#IoIosWifi"></use>
      </svg>
      <div>
        <svg className="chipSvg">
          <use xlinkHref="#FcSimCardChip"></use>
        </svg>
        <strong className='card--numbber'>XXXX XXXX XXXX XXXX</strong>
        <div>
          <p className='card--name'>FILIPE MARQUES DOS SANTOS</p>
          <p className='card--data'>00/00</p>
        </div>
      </div>
    </section>
  )
}
