
export default function ExperienceForm({handleChange, handleSubmit, handleFormDisplay, open}) {
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="flex justify-between items-center">
          <legend>Experience</legend>
          <button className="font-bold text-2xl" onClick={handleFormDisplay}>{open ? "+" : "-"}</button>
        </div>
        {open && 
        <div>
          <label htmlFor='company'>company:</label>
          <br />
          <input type='text' id='company' placeholder="Random Company" name='company' onChange={handleChange}/>
          <br />
          <label htmlFor='position'>Position:</label>
          <br />
          <input type='text' id='position' placeholder="position-title" name='position-title' onChange={handleChange}/>
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
          <label htmlFor='description'>Description:</label>
          <br />
          <textarea name="description" id="description" cols="28" rows="5" placeholder="This is a sample text..."></textarea>
          <br />
        </div>
        }
      </fieldset>
    </form>
  )
}
