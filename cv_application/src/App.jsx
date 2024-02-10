import { useState } from "react"
import EducationForm from "./Forms/EducationForm"
import ExperienceForm from "./Forms/ExperienceForm"
import PersonalForm from "./Forms/PersonalForm"
import Resume from "./Resume"

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
    <div className="flex gap-10">
      <div>
        <PersonalForm/>
        <EducationForm handleFormDisplay={handleEducationDisplay} open={educationOpen}/>
        <ExperienceForm handleFormDisplay={handleExperienceDisplay} open={experienceOpen}/>
      </div>
      <Resume/>
    </div>
  )
}

export default App
