import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const Form = () => {

    const navigate = useNavigate()

    const [patient, setPatient] = useState([])
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    
    
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [dateError, setDateError] = useState('')

  const [confirmation, setConfirmation] = useState('')

    const formSubmission = event => {
        event.preventDefault()

        let isValid = true

        
        if(email === ''){
            setEmailError(' * Email is required')
            isValid =false
        }
        else{
            setEmailError('')
        }
        if(name === ''){
            setNameError(' * Name is required')
            isValid = false
        }
        else{
            setNameError('')
        }
        if(date === ''){
            setDateError(' * Date is required')
            isValid = false
        }
        else{
            setDateError('')
        }
        if(isValid){
            const details = {
               name,
               email,
               date
            }
            setPatient(prev => [...prev, details])

            setName('')
            setEmail('')
            setDate('')
            setConfirmation('Patient details submitted successfully!')
            setTimeout( () => {
                    navigate('/')
            }, 3000 )
        }
        
    }

    const patientNameChange = (event) => {
        setName(event.target.value)
        setConfirmation('')
    }

    const patientEmailChange = (event) => {
        setEmail(event.target.value)
        setConfirmation('')
    }

    const settingDate = (event) => {
        setDate(event.target.value)
        setConfirmation('')
    }


  return (
    <div className='form-container'>
        <h1>Submit the patient form</h1>
        <form onSubmit={formSubmission} className='form'>
            <label htmlFor='patientName'>
                Patient Name
            </label>
            <input id='patientName' value={name} onChange={patientNameChange} type='text' placeholder='Enter patient name' /> <br />
            {nameError && <p className='error'>{nameError}</p>}

            
            <label htmlFor='email' >
                Email
            </label>
            <input id='email' placeholder='Enter patient email' value={email} onChange={patientEmailChange} type='email' /> <br />
            {emailError && <p className='error'>{emailError}</p>}
            
            <label htmlFor='date'>
                Date
            </label>
            <input id='date' type='date' value={date} onChange={settingDate} /> <br />
            {dateError && <p className='error'>{dateError}</p>}
            <button className='submit-button'>Submit</button>
        </form>
        {confirmation && <p>{confirmation}</p>}
    </div>
  )
}

export default Form

