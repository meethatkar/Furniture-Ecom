import React from 'react'
import Contact_dets from '../components/Contact/Contact_dets'
import { useForm } from 'react-hook-form'
import MapFile from '../components/Contact/MapFile';

const Contact = () => {


  const {register, handleSubmit, formState: { errors } } = useForm();

  const submitForm = (data)=>{
    
    alert("form submitted: ",data);
  }

  return (
    <div className='py-[2%] w-screen px-[5vw] text-center'>
      <h2 className='text-[3vw] tracking-tight font-medium'> Get In Touch With Us </h2>
      <p className='text-[1vw] text-black/50'> For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. <br /> Our Staff Always Be There To Help You Out. Do Not Hesitate! </p>
      <div id="form-div" className='w-full my-[5%] flex justify-center'>
        <div id="part-1" className='w-4/12'>
          <Contact_dets />
        </div>
        <form id="part-2" onSubmit={handleSubmit(submitForm)} className='w-8/12 text-start'>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <label htmlFor="name" className="block text-black text-xl font-normal mb-2">Your name *</label>
              <input type="text" id="name" placeholder="John Doe" className="w-full p-3 border border-gray-300 rounded"
                {...register("name", {required: "Name is required"})}
              />
              {errors.name && <p className='text-red-400'> {errors.name.message} </p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-black text-xl font-normal mb-2">Your E-mail *</label>
              <input type="email" id="email" placeholder="Your@email.com" className="w-full p-3 border border-gray-300 rounded"
                {...register("email", {required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Enter valid Email"}})}
              />
              {errors.email && <p className='text-red-400'> {errors.email.message} </p>}
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="subject" className="block text-black text-xl font-normal mb-2">Subject</label>
            <input type="text" id="subject" placeholder="This is an optional" className="w-full p-3 border border-gray-300 rounded" 
              {...register("subject", {required: "Subject is required", minLength: {value: 6, message: "subject must be greater then 6 letters"}})}
            />
            {errors.subject && <p className='text-red-400'> {errors.subject.message} </p>}
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-black text-xl font-normal mb-2">Message *</label>
            <textarea id="message" rows="5" placeholder="Hi! I'd like to ask about..." className="w-full p-3 border border-gray-300 rounded resize-none"
              {...register("message", {required: "message is required", minLength: {value: 50, message: "length must be grater then 50 characters"}})}
            ></textarea>
            {errors.message && <p className='text-red-400'> {errors.message.message} </p>}
          </div>

          <button className="bg-[#B88E2F] text-white px-8 py-3 rounded text-lg font-medium" type='submit'>Submit</button>
        </form>
      </div>
      <div id="map-div">
        <MapFile/>
      </div>
    </div>
  )
}

export default Contact