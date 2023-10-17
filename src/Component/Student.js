import React, { useContext} from 'react'
import {Link, useNavigate} from "react-router-dom"
import Store from '../StoreComponent/Store';

function Student() {
  const ContextData=useContext(Store);
  const navigate=useNavigate();
//   const[data,setData]=useState([
//     {
//         Name:"Niyaz Alam",
//         Age:"22",
//         Course:"MERN",
//         Batch:"february",
//         Change:"Edit"
//     },
//     {
//         Name:"Doe",
//         Age:"25",
//         Course:"MERN",
//         Batch:"November",
//         Change:"Edit"
//     },
//     {
//         Name:"Biden",
//         Age:"26",
//         Course:"MERN",
//         Batch:"September",
//         Change:"Edit"
//     },
//     {
//         Name:"Barar",
//         Age:"23",
//         Course:"MERN",
//         Batch:"September",
//         Change:"Edit"
//     },
//     {
//         Name:"Christ",
//         Age:"24",
//         Course:"MERN",
//         Batch:"October",
//         Change:"Edit"
//     },
//     {
//         Name:"Elent",
//         Age:"24",
//         Course:"MERN",
//         Batch:"November",
//         Change:"Edit"
//     },
//     {
//         Name:"Harshita Sharma",
//         Age:"25",
//         Course:"MERN",
//         Batch:"October",
//         Change:"Edit"
//     }
// ])

  return (
    <>
      <div className='topWork'>
        <h1 className='topWork-h1'>Student Details</h1>
        <button className='topWork-btn' onClick={()=>navigate("/addStu")} >Add New Student</button>
      </div>
      <div className="tableContainer">
      <table border="1px" className='table' cellSpacing="0">
        <thead>
          <tr className='tableHeading'>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr> 
        </thead>
        {
          ContextData.data.map((item,index)=>{
            return(
              <tbody key={index}>
                <tr>
                  <td>{item.Name}</td>
                  <td>{item.Age}</td>
                  <td>{item.Course}</td>
                  <td>{item.Batch}</td>
                  <td><Link to={`/editStu/${index}`} >{item.Change}</Link></td>
                </tr>
              </tbody>
            )
          })
        }
      </table>
      </div>
    </>
  )
}

export default Student
