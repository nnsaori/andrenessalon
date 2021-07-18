import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-6'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Call or text to schedule your next appointment.
                </p>
              </div>
              <div className='contact-info'>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>
                <a href={props.data ? 'tel:' + props.data.phone : 'loading'}>{props.data ? props.data.phone : 'loading'}</a>
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                
                <a target="_blank" href={props.data ? 'mailto:' + props.data.email + '?subject=New+appointment' : 'loading'}>{props.data ? props.data.email : 'loading'}</a>
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>{' '}
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
          </div>
          </div>
          <div className='col-md-6'>
              <iframe frameborder="0" scrolling="no" src="http://maps.google.com/maps?hl=en&amp;source=hp&amp;ie=UTF8&amp;q=salon&amp;fb=1&amp;gl=us&amp;hq=salon&amp;hnear=Marysville,+WA&amp;view=map&amp;cid=1037344670146820418&amp;ved=0CAwQpQY&amp;ei=mBYBS4P6DZCciAOGiJyWBw&amp;ll=48.052511,-122.183118&amp;spn=0.004303,0.006437&amp;z=16&amp;iwloc=A&amp;output=embed" width="100%" height="70%"></iframe>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a target="_blank" href={props.data ? props.data.instagram : '/'}>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                  <li>
                      <a target="_blank" href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
