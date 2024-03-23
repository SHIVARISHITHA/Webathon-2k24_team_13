// import React, { useState } from 'react';

// function Alumnilogin() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     birthday: '',
//     gender: '',
//     state: '',
//     city: '',
//     pincode: '',
//     course: '',
//     email: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here, e.g., send data to the server
//     console.log(formData);
//     // Reset form data
//     setFormData({
//       firstName: '',
//       lastName: '',
//       birthday: '',
//       gender: '',
//       state: '',
//       city: '',
//       pincode: '',
//       course: '',
//       email: ''
//     });
//   };

//   return (
//     <div className='container mt-5 ml-50 mb-10'>
//       <h1 className='display-1 text-secondary'>Alumni Registration Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div className='mb-3'>
//           <label htmlFor='firstName' className='form-label'>First Name</label>
//           <input type='text' className='form-control' id='firstName' name='firstName' value={formData.firstName} onChange={handleChange} required />
//         </div>
//         <div className='mb-3'>
//           <label htmlFor='lastName' className='form-label'>Last Name</label>
//           <input type='text' className='form-control' id='lastName' name='lastName' value={formData.lastName} onChange={handleChange} required />
//         </div>
//         <div className='mb-3'>
//           <label htmlFor='birthday' className='form-label'>Birthday</label>
//           <input type='date' className='form-control' id='birthday' name='birthday' value={formData.birthday} onChange={handleChange} required />
//         </div>
//         <div className='mb-3'>
//           <label className='form-label'>Gender</label>
//           <div className='form-check'>
//             <input className='form-check-input' type='radio' name='gender' id='female' value='Female' onChange={handleChange} />
//             <label className='form-check-label' htmlFor='female'>Female</label>
//           </div>
//           <div className='form-check'>
//             <input className='form-check-input' type='radio' name='gender' id='male' value='Male' onChange={handleChange} />
//             <label className='form-check-label' htmlFor='male'>Male</label>
//           </div>
//           <div className='form-check'>
//             <input className='form-check-input' type='radio' name='gender' id='other' value='Other' onChange={handleChange} />
//             <label className='form-check-label' htmlFor='other'>Other</label>
//           </div>
//         </div>
//         <div className='row'>
//           <div className='col-md-6 mb-3'>
//             <label htmlFor='state' className='form-label'>State</label>
//             <input type='text' className='form-control' id='state' name='state' value={formData.state} onChange={handleChange} required />
//           </div>
//           <div className='col-md-6 mb-3'>
//             <label htmlFor='city' className='form-label'>City</label>
//             <input type='text' className='form-control' id='city' name='city' value={formData.city} onChange={handleChange} required />
//           </div>
//         </div>
//         <div className='mb-3'>
//           <label htmlFor='pincode' className='form-label'>Pincode</label>
//           <input type='text' className='form-control' id='pincode' name='pincode' value={formData.pincode} onChange={handleChange} required />
//         </div>
//         <div className='mb-3'>
//           <label htmlFor='course' className='form-label'>Course</label>
//           <input type='text' className='form-control' id='course' name='course' value={formData.course} onChange={handleChange} required />
//         </div>
//         <div className='mb-3'>
//           <label htmlFor='email' className='form-label'>Email ID</label>
//           <input type='email' className='form-control' id='email' name='email' value={formData.email} onChange={handleChange} required />
//         </div>
//         <button type='submit' className='btn btn-primary'>Submit</button>
//         <button type='reset' className='btn btn-secondary ms-2'>Reset</button>
//       </form>
//     </div>
//   );
// }

// export default Alumnilogin;
import React, { useState } from 'react';

function Alumnilogin() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    gender: '',
    state: '',
    city: '',
    pincode: '',
    course: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server
    console.log(formData);
    // Reset form data
    setFormData({
      firstName: '',
      lastName: '',
      birthday: '',
      gender: '',
      state: '',
      city: '',
      pincode: '',
      course: '',
      email: ''
    });
  };

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
	<div className="flex flex-col items-center">
		<h1 className="text-3xl font-semibold">Sign Up</h1>
		
	</div>
	<div className="form-group">
		<div className="form-field">
			<label className="form-label">Email address</label>

			<input placeholder="Type here" type="email" className="input max-w-full" />
			<label className="form-label">
				<span className="form-label-alt">Please enter a valid email.</span>
			</label>
		</div>
        <div className="form-field">
			<label className="form-label">Roll no</label>

			<input placeholder="Type here" type="rollno" className="input max-w-full" />
			<label className="form-label">
				<span className="form-label-alt"></span>
			</label>
		</div>
        <div className="form-field">
			<label className="form-label">Graduation Year</label>

			<input placeholder="Type here" type="year" className="input max-w-full" />
			<label className="form-label">
				<span className="form-label-alt"></span>
			</label>
		</div>
        <div className="form-field">
			<label className="form-label">Linkedin URL</label>

			<input placeholder="Type here" type="url" className="input max-w-full" />
			<label className="form-label">
				<span className="form-label-alt"></span>
			</label>
		</div>
        
		<div className="form-field">
			<label className="form-label">Password</label>
			<div className="form-control">
				<input placeholder="Type here" type="password" className="input max-w-full" />
			</div>
		</div>
		<div className="form-field pt-5">
			<div className="form-control justify-between">
				<button type="button" className="btn btn-primary w-full">Sign up</button>
			</div>
		</div>

		
	</div>
</div>
  );
}

export default Alumnilogin;

