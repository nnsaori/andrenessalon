export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='img/about.jpg' className='img-responsive' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>About Us</h2>
              <h3>Why Choose Us?</h3>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <p>Call or text <a href='tel:425-923-3000'>425-923-3000</a> today to schedule your next appointment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
