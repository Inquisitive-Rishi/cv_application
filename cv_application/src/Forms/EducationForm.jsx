export default function EducationForm({handleChange, handleSubmit}) {
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Education</legend>
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
      </fieldset>
    </form>
  )
}
