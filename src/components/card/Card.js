import './Card.css'

export default function Card(items) {    
  return (
    <div className={`card ${items.background}`}>
      <div className="card-body">
        <img src="images/circle.svg" alt="bg-circle-img" className="bg-circle-img" />
        <h4 className=''>
            <span>{items.title}</span>
            {items.icon}
        </h4>
        <h2 className=''>{items.number}</h2>
        <h6 className=''>{items.des}</h6>
      </div>
    </div>
  )
}
