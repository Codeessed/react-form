import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './components/name/index'
import Age from './components/age/index'
import Job from './components/job/index'
import Experience from './components/experience/index'
import Height from './components/height/index'




function App() {

  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [job, setJob] = useState("")
  const [experience, setExperience] = useState(0)
  const [height, setHeight] = useState(0)
  const [print, setPrint] = useState(false)


  //these functions get the value of each input and sets it to each states
  function getName(desc:any){
    setName(desc.target.value)
  }
  function getAge(desc:any){
    setAge(desc.target.value)
  }
  function getJob(desc:any){
    setJob(desc.target.value)
  }
  function getExperience(desc:any){
    setExperience(desc.target.value)
  }
  function getHeight(desc:any){
    setHeight(desc.target.value)
  }


  return (
    <div>
      <div>
        <form>
            <input type="text" placeholder="Name" id="n" onChange={getName}/>
        </form>
      </div>
      <div>
        <form>
            <input type="number" placeholder="Age" onChange={getAge}/>
        </form>
      </div>
      <div>
        <form>
            <input type="text" placeholder="Job" onChange={getJob}/>
        </form>
      </div>
      <div>
        <form>
            <input type="number" placeholder="Years of experience" onChange={getExperience}/>
        </form>
      </div>
      <div>
        <form>
            <input type="number" placeholder="height" onChange={getHeight}/>
        </form>
      </div>
      <div>
        <button onClick={()=>setPrint(true)} >
          Submit
        </button>
      </div>

      {/* this updates states on click of the button, prints when printState is trueand print state is only true when button is clicked */}
      {
        print?
        <div>
          <Name value={name}/>
          <Age value={age}/>
          <Job value={job}/>
          <Experience value={experience}/>
          <Height value={height}/>
      </div>
      :null
      }

    </div>
  );
}

export default App;
