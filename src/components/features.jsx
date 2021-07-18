export const Features = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Services</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}><img src={d.icon} className='img-responsive' alt='' />{' '}</i>
                  <h3>{d.title}</h3>
                  <p>{d.description}</p>
                    <ul>
                      <li>{d.menu_1} {d.price_1}</li>
                      <li>{d.menu_2}</li>
                      <li>{d.menu_3}</li>
                      <li>{d.menu_4}</li>
                    </ul>
                    <ul>
                      <li>{d.price_2}</li>
                      <li>{d.price_3}</li>
                      <li>{d.price_4}</li>
                    </ul>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
