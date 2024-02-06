export default function PersonalForm({handleSubmit, handleChange}) {

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Details</legend>
          <label htmlFor='fullName'>full name:<span className="text-red-600">*</span></label>
          <br />
          <input type='text' id='fullName' placeholder="Rishi Raj" name='full_name' onChange={handleChange}/>
          <br />
          <label htmlFor='email'>Email:</label>
          <br />
          <input type='email' id='email' placeholder="xyz@example.com" name='email' onChange={handleChange}/>
          <br />
          <label htmlFor='phone'>Phone:</label>
          <br />
          <input type='number' id='phone' placeholder="phone" name='phone' onChange={handleChange}/>
          <br />
        </fieldset>
      </form>
    </div>
  )
}
