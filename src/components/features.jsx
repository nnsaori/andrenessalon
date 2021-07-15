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
                  <div>
                    <ul>
                      <li>{d.text_1}</li>
                      <li>{d.text_2}</li>
                      <li>{d.text_3}</li>
                    </ul>
                  </div>
                  </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
