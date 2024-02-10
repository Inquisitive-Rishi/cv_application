import DeleteButton from "../buttons/DeleteButton";
import SubmitButton from "../buttons/SubmitButton";

export default function EducationForm({handleChange, handleSubmit, handleFormDisplay, open}) {
  return (
    <form onSubmit={handleSubmit} className="min-w-[330px]">
      <fieldset>
        <div className="flex justify-between items-center">
          <legend>Education</legend>
          <button className="font-bold text-2xl" onClick={handleFormDisplay}>{open ? "-" : "+"}</button>
        </div>
        {open && 
        <div>
          <label htmlFor='school'>School:</label>
          <br />
          <input type='text' id='school' placeholder="Random School" name='school' onChange={handleChange}/>
          <br />
          <label htmlFor='study-title'>Study Title:</label>
          <br />
          <input type='text' id='study-title' placeholder="study-title" name='study-title' onChange={handleChange}/>
          <br />
          <div>
            <div>
              <label htmlFor='from'>from</label>
              <br />
              <input type='text' id='from' placeholder="21-04-2021" name='from' onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor='to'>To</label>
              <br />
              <input type='text' id='to' placeholder="21-04-2024" name='to' onChange={handleChange}/>
            </div>
          </div>
          <div className="flex gap-2">
            <DeleteButton txt="Delete" alt="trash img" />
            <SubmitButton txt="Submit"/>
          </div>
        </div>
        }
      </fieldset>
    </form>
  )
}
