import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const DoctorsDetails = () => {

    const [doctors, setDoctors] = useState([])
    const [searchingdoc, setsearchingdoc] = useState('')
    const [filteringDoc, setfilteringDoc] = useState([])
    
    useEffect(() => {
    
    fetch('/dummy.json')
    .then(response => {
        if(!response){
            throw new Error('Network Error')
        }
        return response.json();
    } )
    .then(data => setDoctors(data))
    .catch(err=> console.log('Error in fetching data :', err))
}, [])
    const onSerchingDoc = (event) => {
        const searchInp = event.target.value.toLowerCase()
        setsearchingdoc(searchInp)
        const findingDoc = doctors.filter( doc => doc.name.toLowerCase().includes(searchInp) || doc.specialization.toLowerCase().includes(searchInp))
        
        setfilteringDoc(findingDoc)
    }
 
        const  displayingDocs = searchingdoc ? filteringDoc : doctors ; 

  return (
    <div>
        <input type='search' placeholder='Search Here' className='search-input' onChange={onSerchingDoc}/>
        {displayingDocs.length ===0 ? (
            <h1>No docs found here</h1>
        ):(<ul className='unordered-list-container'>
            {( searchingdoc ? filteringDoc : doctors).map(eachDoc => (
                <li className='list-items' key={eachDoc.id}>
                    <Link to={`/profile/${eachDoc.id}`} state={{doctor:eachDoc}}>
                        <img className='doc-img' src={eachDoc.image} width={200} height={200} alt={eachDoc.name} />
                        <div className='doc-name-container'>
                        <h3> <span>Name</span> : {eachDoc.name}</h3>
                        <p> <span>Specialization</span> : {eachDoc.specialization}</p>
                        <p> <span>Availability</span> : {eachDoc.availability} </p>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>)}
        
    </div>
  )
}

export default DoctorsDetails
