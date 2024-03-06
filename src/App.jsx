import React, { useState, useEffect } from 'react'
import './App.css'
import { useGlitch } from 'react-powerglitch'
import Carousel from './components/Carousel/Carousel'
import Stepper from './components/Stepper/Stepper'
import House from './components/House/House'
import Gallery from './components/Gallery/Gallery'
import { getData } from "../src/getResume.js";

const App = () => {
  const [isInDeny, setisInDeny] = useState(true)
  const [step, setStep] = useState(0)
  const [hueLevel, setHueLevel] = useState(0)
  const glitch = useGlitch();
  const [experiences, setExperience] = useState([])

  const toggleDeny = () => {
    setisInDeny(isInDeny ? false : true)
    setHueLevel(hueLevel == 180 ? 0 : 180)
    setStep(step == 0 ? 1 : 0)

  }

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getData();
        setExperience(res.record.experiences)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <h1 className={`border-2 w-40 rounded-lg border-slate-50 ${isInDeny ? 'underline' : 'line-through'} text-3xl font-bold`}>
        {isInDeny ? "Hello World!❤️" : "Bye World!"}
      </h1>
      <Carousel isInDeny={isInDeny} hueLevel={hueLevel} glitch={glitch} />
      <button type="button"
        onClick={toggleDeny}
        className="
      hue-rotate-180 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 m-4 drop-shadow-md 
      hover:drop-shadow-xl px-4 py-2 font-semibold text-sm bg-white text-slate-700 
      border border-slate-300 rounded-md shadow-sm ring-2 ring-offset-slate-50 ring-pink-500 ring-offset-2 
      dark:bg-slate-700 dark:text-slate-200 dark:border-transparent dark:ring-offset-slate-900">
        {isInDeny ? "Assume" : "Deny"}
      </button>

      <House />
      <Gallery />
      {isInDeny ?
        null
        :
        <Stepper step={step} />
      }
      <div className={`border-2 w-40 rounded-lg border-slate-50 font-bold`}>
        {experiences.map(xp => <div key={xp.id}>{xp.company}</div>)}
      </div>
    </>
  )
}

export default App
