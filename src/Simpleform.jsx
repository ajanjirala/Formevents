import React, { useState } from 'react'

const SimpleForm = () => {

  const [name, setName] = useState('')
  const [output, setOutput] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    setOutput(name)
  }

  return (
    <div className="form-page">

      <div className="form-container">

        <h1>Simple Form</h1>

        <p className="form-description">
          Enter your name below
        </p>

        <form onSubmit={handleSubmit}>

          <label>Enter your name</label>

          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <button type="submit">
            Submit
          </button>

        </form>

        {output && (
          <div className="output-box">
            <h3>Output</h3>
            <p>Hello, {output}!</p>
          </div>
        )}

      </div>

    </div>
  )
}

export default SimpleForm