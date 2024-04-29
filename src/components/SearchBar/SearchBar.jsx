import React from 'react'

function SearchBar() {
  return (
    <div className='flex gap-4 my-10 justify-center px-10'>
      <select className='w-64 py-3 pl-4 bg-zinc font-semibold rounded-md'>
        <option value=""disabled hidden selected>Job Role</option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Andriod Developer">Andriod Developer</option>
        <option value="Developer Adovcate">Developer Adovcate</option>    
      </select>

      <select className='w-64 py-3 pl-4 bg-zinc font-semibold rounded-md'>
        <option value=""disabled hidden selected>Job Type</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract Basis">Contract Basis</option>           
      </select>

      <select className='w-64 py-3 pl-4 bg-zinc font-semibold rounded-md'>
        <option value=""disabled hidden selected>Location</option>
        <option value="Remote">Remote</option>
        <option value="In-Office">In-Office</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <select className='w-64 py-3 pl-4 bg-zinc font-semibold rounded-md'>
        <option value=""disabled hidden selected>Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="Juinor-Lavel">Juinor-Lavel</option>
        <option value="Mid-Level">Mid-Level</option>
        <option value="Senoir-Level">Senoir-Level</option>        
      </select>
      <button className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
    </div>
  )
}

export default SearchBar
