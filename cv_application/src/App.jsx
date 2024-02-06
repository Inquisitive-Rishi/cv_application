import { useState } from "react"
import EducationForm from "./Forms/EducationForm"
import ExperienceForm from "./Forms/ExperienceForm"
import PersonalForm from "./Forms/PersonalForm"

function App() {
  const [educationOpen, setEducationOpen] = useState(false)
  const [experienceOpen, setExperienceOpen] = useState(false)

  function handleEducationDisplay(e) {
    e.preventDefault()
    setEducationOpen(prevState => !prevState)
  }

  function handleExperienceDisplay(e) {
    e.preventDefault()
    setExperienceOpen(prevState => !prevState)
  }

  return (
    <>
      <PersonalForm/>
      <EducationForm handleFormDisplay={handleEducationDisplay} open={educationOpen}/>
      <ExperienceForm handleFormDisplay={handleExperienceDisplay} open={experienceOpen}/>
    </>
  )
}

export default App
