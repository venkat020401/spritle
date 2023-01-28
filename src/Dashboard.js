import React from 'react'
import StudentDaseboard from './StudentDaseboard'
import TeachersDashboard from './TeachersDashboard'

function Dashboard({isVisible}) {
  return (
    <div>
        {
            isVisible ? <TeachersDashboard /> : <StudentDaseboard />
        }
      
    </div>
  )
}

export default Dashboard
