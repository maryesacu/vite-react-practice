import React, { useEffect } from 'react'
import femaleProfile from "../images/femaleProfile.jpg"
import maleProfile from "../images/maleProfile.jpg"

interface CardProps {
  id: number
  fullName: string
  designation: string
  gender: string
  teamName: string
}
export const CardEmployee = ( {employee, selectedTeam, handleEmployeeCardClick}: any ) => {
  useEffect(() => {

  
  console.log('a',employee)
  }, [])

  const handleClick = () => {
    console.log(employee.teamName)
    handleEmployeeCardClick(employee)
  }
  return (
    <div id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{ cursor: 'pointer' }} onClick={ handleClick }>
      {(employee.gender === 'male') ? <img style={{borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} src={maleProfile} className="card-image-top" />
        : <img style={{borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} src={femaleProfile} className="card-image-top" />}
      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text"><b>Designation:</b> {employee.designation}</p>
      </div>
    </div>
  )
}
