import React, {useEffect, useState} from 'react'
import {  useNavigate, useParams } from 'react-router-dom'

import './index.css'

const DocProfile = () => {

  const {id} = useParams()
  const [doctor, setDoctor] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    fetch('/dummy.json')
    .then((res) => res.json())
    .then((data) => {
      const selectedDoc = data.find(
        (doc) => doc.id === parseInt(id)
      );
      setDoctor(selectedDoc)
    }).catch((err) => 
      console.error('Error fetching doc : ', err)
    )
  }, [id])

  if(!doctor){
    return <div>Loading doc profile.....</div>
  }


  const bookingAppoint = () => {
      navigate('/patient/form')
  }

  
  return (
    <div className='docprofilemain-container'>
        <h1>Doctor Details</h1>
        <div className='profile-container'>
            <img src={doctor.image} alt={doctor.name} />
            <div className='details-container-of-doc'>
                <h1>
                    Name : {doctor.name}
                </h1>
                <p>Specialization : {doctor.specialization}</p>
                <p>availability : {doctor.availability}</p>
                <p>time : {doctor.time}</p>
                <p>bio : {doctor.bio}</p>
                <button onClick={bookingAppoint} className='bookign-buttn'>Book An Appointment</button>
            </div>
        </div>
    </div>
  )
}

export default DocProfile