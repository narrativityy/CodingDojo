import React from 'react'

const Form = () => {
  return (
    <form>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" id="title" />
        <br />

        <label htmlFor="price">Price: </label>
        <input type="number" name="price" id="price" />
        <br />

        <label htmlFor="description">Description: </label>
        <input type="text" name="description" id="description" />
        <br />

        <button>Create</button>
    </form>
  )
}

export default Form