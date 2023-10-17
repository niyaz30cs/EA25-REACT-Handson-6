import React, { useContext } from 'react'
import Store from '../StoreComponent/Store'
import { useNavigate, useParams } from 'react-router-dom';

function EditStudent() {

  const navigate = useNavigate();
  const editData = useContext(Store);
  console.log(editData);
  const index = useParams().id;
  console.log(index);
  console.log(editData.data[index]);
  const editObj = {
    Name: editData.data[index].Name,
    Age: editData.data[index].Age,
    Course: editData.data[index].Course,
    Batch: editData.data[index].Batch,
    Change: editData.data[index].Change,
  }

  const handleChange = (e) => {
    editObj[e.target.name] = e.target.value;
  }


  const handleClick = () => {
    console.log(editObj);
    editData.data[index] = editObj;
    navigate("/student");
  }

  return (
    <>
    <h1 className='middle'>Student Edit Data</h1>
    <div className='mainForn'>
      <form className='editForm'>
        <div className='twoInput'>
          <div className='inputBox'>
            <label htmlFor='name' className='label'>Name:</label>
            <input type='text' name='Name' id='name' placeholder={editData.data[index].Name} className='editInput' onChange={handleChange} />
          </div>
          <div className='inputBox'>
            <label htmlFor='age' className='label'>Age:</label>
            <input type='number' name='Age' id='age' placeholder={editData.data[index].Age} className='editInput' onChange={handleChange} />
          </div>
        </div>
        <div className='twoInput'>
          <div className='inputBox'>
            <label htmlFor='course' className='label'>Course:</label>
            <input type='text' name='Course' id='course' placeholder={editData.data[index].Course} className='editInput' onChange={handleChange} />
          </div>
          <div className='inputBox'>
            <label htmlFor='batch' className='label'>Batch:</label>
            <input type='text' name='Batch' id="batch" placeholder={editData.data[index].Batch} className='editInput' onChange={handleChange} />
          </div>
        </div>
        <div className='twoInput'>
          <button type='button' className='editBtn2' onClick={handleClick}>Update</button>
          <button type='button' className='editBtn1' onClick={()=>navigate(-1)}>Cancle</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default EditStudent
