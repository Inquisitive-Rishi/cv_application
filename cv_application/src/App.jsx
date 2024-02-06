import { useState } from "react"
import EducationForm from "./Forms/EducationForm"
import ExperienceForm from "./Forms/ExperienceForm"
import PersonalForm from "./Forms/PersonalForm"

function App() {
  const [open, setOpen] = useState(true)

  function handleFormDisplay(e) {
    e.preventDefault()
    setOpen(prevState => !prevState)
  }

  return (
    <>
      <PersonalForm/>
      <EducationForm handleFormDisplay={handleFormDisplay} open={open}/>
      <ExperienceForm handleFormDisplay={handleFormDisplay} open={open}/>
    </>
  )
}

export default App
