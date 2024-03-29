// import React, { useState } from 'react';
// import './Timings.css';
// import { useNavigate } from 'react-router-dom';

// function Timings() {
//   const navigate = useNavigate();

//   const [rows, setRows] = useState([
//     {
//       ward: 'Ward 1',
//       timings: '8:00 AM - 10:00 AM',
//       duration: '2 hrs',
//       date: '2023-09-25',
//       isEditing: false,
//     },
//     {
//       ward: 'Ward 2',
//       timings: '9:30 AM - 11:30 AM',
//       duration: '2 hrs',
//       date: '2023-09-26',
//       isEditing: false,
//     },
//     {
//       ward: 'Ward 3',
//       timings: '10:00 AM - 12:00 PM',
//       duration: '2 hrs',
//       date: '2023-09-27',
//       isEditing: false,
//     },
//     // Add more initial rows as needed
//   ]);

//   const [selectedWard, setSelectedWard] = useState('');

//   const handleWardSelect = (event) => {
//     setSelectedWard(event.target.value);
//   };

//   const handleAddRow = () => {
//     if (selectedWard) {
//       const newRow = {
//         ward: selectedWard,
//         date: '',
//         timings: '',
//         duration: '',
//         isEditing: true,
//       };
//       setRows([...rows, newRow]);
//     }
//   };

//   const filteredRows = selectedWard
//     ? rows.filter((row) => row.ward === selectedWard)
//     : rows;

//   const handleEditRow = (index) => {
//     const updatedRows = [...rows];
//     updatedRows[index].isEditing = true;
//     setRows(updatedRows);
//   };

//   const handleSaveRow = (index) => {
//     const updatedRows = [...rows];
//     updatedRows[index].isEditing = false;
//     setRows(updatedRows);
//   };

//   const handleDeleteRow = (index) => {
//     const updatedRows = [...rows];
//     updatedRows.splice(index, 1);
//     setRows(updatedRows);
//   };

//   const handleLogin = () => {
//     navigate('/ComplaintBox');
//   };

//   const handleTiming = () => {
//     navigate('/Signedpage');
//   };
//   const calculateDuration = (start, end) => {
//     const startHour = parseInt(start.split(':')[0]);
//     const startMinute = parseInt(start.split(':')[1]);
//     const endHour = parseInt(end.split(':')[0]);
//     const endMinute = parseInt(end.split(':')[1]);

//     const totalStartMinutes = startHour * 60 + startMinute;
//     const totalEndMinutes = endHour * 60 + endMinute;
//     const durationMinutes = totalEndMinutes - totalStartMinutes;

//     const hours = Math.floor(durationMinutes / 60);
//     const minutes = durationMinutes % 60;

//     return `${hours} hrs ${minutes} mins`;
//   };

//   return (
//     <div className='Timings-page'>
//       <div className="title-bar">
//         <div className="title-bar-links">
//           <span>Home</span>
//           <span onClick={handleLogin}>ComplaintBox</span>
//           <span onClick={handleTiming}>Signedpage</span>
//         </div>
//         <div className="profile">
//           <img src="profile-image.jpg" alt="Profile" />
//           <span>UserEmail</span>
//         </div>
//       </div>

//       <div className="Timings-container">
//         <h1>Water Supply Timings - City Municipality</h1>

//         <div>
//           <label>Select Ward:</label>
//           <select value={selectedWard} onChange={handleWardSelect}>
//             <option value="">All Wards</option>
//             <option value="Ward 1">Ward 1</option>
//             <option value="Ward 2">Ward 2</option>
//             <option value="Ward 3">Ward 3</option>
//             {/* Add more options as needed */}
//           </select>
//         </div>

//         <table>
//           <thead>
//             <tr>
//               <th>date</th>
//               <th>start</th>
//               <th>end</th>
//               <th>Duration (hrs)</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredRows.map((row, index) => (
//               <tr key={index}>
//                 {/* --------------------------------------------- */}
//                 {/* <td>
//                   {row.isEditing ? (
//                     <input
//                       type="text"
//                       value={row.ward}
//                       onChange={(e) => {
//                         const updatedRows = [...rows];
//                         updatedRows[index].ward = e.target.value;
//                         setRows(updatedRows);
//                       }}
//                     />
//                   ) : (
//                     row.ward
//                   )}
//                 </td> */}
//                 {/* ------------------------------------------------------- */}
                
//                  <td>
//                   {row.isEditing ? (
//                     <input
//                       type="date"
//                       value={row.date}
//                       onChange={(e) => {
//                         const updatedRows = [...rows];
//                         updatedRows[index].date = e.target.value;
//                         setRows(updatedRows);
//                       }}
//                     />
//                   ) : (
//                     row.date
//                   )}
//                 </td>
//                 <td>
//                   {row.isEditing ? (
//                     <input
//                       type="time"
//                       value={row.date}
//                       onChange={(e) => {
//                         const updatedRows = [...rows];
//                         updatedRows[index].date = e.target.value;
//                         setRows(updatedRows);
//                       }}
//                     />
//                   ) : (
//                     row.date
//                   )}
//                 </td> 
//                 <td>
//                   {row.isEditing ? (
//                     <input
//                       type="time"
//                       value={row.timings}
//                       onChange={(e) => {
//                         const updatedRows = [...rows];
//                         updatedRows[index].timings = e.target.value;
//                         setRows(updatedRows);
//                       }}
//                     />
//                   ) : (
//                     row.timings
//                   )}
//                 </td> 
//                 {/* <td>------------------------------------------------------------------
//                   {row.isEditing ? (
//                     <input
//                       type="datetime-local"
//                       value={row.startTime}
//                       onChange={(e) => {
//                         const updatedRows = [...rows];
//                         updatedRows[index].startTime = e.target.value;
//                         setRows(updatedRows);
//                       }}
//                     />
//                   ) : (
//                     row.startTime
//                   )}
//                 </td> -------------------------------------------------------------*/}
//                 {/* <td>
//                   {row.isEditing ? (
//                     <input
//                       type="text"
//                       value={row.duration}
//                       onChange={(e) => {
//                         const updatedRows = [...rows];
//                         updatedRows[index].duration = e.target.value;
//                         setRows(updatedRows);
//                       }}
//                     />
//                   ) : (
//                     row.duration
//                   )}
//                 </td> */}
//                 <td>{row.duration}</td>
//                 <td>
//                   {row.isEditing ? (
//                     <button
//                       className="save-button"
//                       onClick={() => handleSaveRow(index)}
//                     >
//                       Save
//                     </button>
//                   ) : (
//                     <button
//                       className="edit-button"
//                       onClick={() => handleEditRow(index)}
//                     >
//                       Edit
//                     </button>
//                   )}
//                   <button
//                     className="extra-add">
//                     add
//                   </button>
//                   <button
//                     className="delete-button"
//                     onClick={() => handleDeleteRow(index)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <button className="add-button" onClick={handleAddRow}>
//           Add Row
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Timings;