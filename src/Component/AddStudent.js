import React, { useContext } from 'react'
import Store from '../StoreComponent/Store'
import { useNavigate } from 'react-router-dom';

function AddStudent() {
  const addData = useContext(Store);
  const navigate = useNavigate();
  const newObj = {
    Name: "",
    Age: "",
    Course: "",
    Batch: "",
    Change:"Edit"
  }

  const handleChange = (e) => {
    newObj[e.target.name] = e.target.value;
  }

  const handleClick = () => {
    addData.data.push(newObj);
    navigate(-1);
  }

  return (
    <>
    <h1 className='middle'>Add New Student</h1>
    <div className='mainForn'>
      <form className='editForm'>
        <div className='twoInput'>
          <div className='inputBox'>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='Name' id='name' onChange={handleChange} placeholder='Name' className='editInput' />
          </div>
          <div className='inputBox'>
            <label htmlFor='age'>Age:</label>
            <input type='number' name='Age' id='age' onChange={handleChange} placeholder='Age' className='editInput' />
          </div>
        </div>
        <div className='twoInput'>
          <div className='inputBox'>
            <label htmlFor='course'>Course:</label>
            <input type='text' name='Course' id='course' onChange={handleChange} placeholder='Course' className='editInput' />
          </div>
          <div className='inputBox'>
            <label htmlFor='batch'>Batch:</label>
            <input type='text' name='Batch' id='batch' onChange={handleChange} placeholder='Batch' className='editInput' />
          </div>
        </div>
        <div className='twoInput'>
          <button type='button' onClick={handleClick} className='editBtn2'>Add</button>
          <button type='button' className='editBtn1' onClick={()=>navigate(-1)}>Cancle</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default AddStudent
