/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import Card from './components/Card.jsx'
import About from './components/About.jsx'
import Nav from './components/Nav.jsx'
import Filters from './components/Filters.jsx'
import img1 from "./assets/grey-jacket.jpg"
import img2 from './assets/yellow-shirt.jpg'
import img3 from './assets/green-shirt.jpg'
import Wrapper from './components/Wrapper.jsx'
import Columns from './components/Columns.jsx'
import {useState} from "react"

function App() {
  const profiles = [
    {name: "Bob Smith", title: "Project Manager", description: "The description goes here", img: img1},
    {name: "Jennifer Ma", title: "UX Designer", description: "The description goes here", img: img2},
    {name: "Jackson Williams", title: "Web Developer", description: "The description goes here", img: img3},
    {name: "Jackson Williams", title: "Web Developer", description: "The description goes here", img: img3}


  ]
  const titles = [...new Set(profiles.map(profile => profile.title))]
  const [title, setTitle] = useState("")
  const handleChange = (event) => {
    setTitle(event.target.value)
    console.log(title);
  }
  

  /* const [clicked, setClicked] = useState("false");
  const handleClick = () => {
    setClicked(prev => !prev);
  } */

  const [search, setSearch] = useState("")
  const handleSearch = (event) => {
    setSearch(event.target.value)
    console.log(search);
  }

  const handleClick = () => {
    setTitle("")
    setSearch("")
  }

  const filteredProfiles = profiles.filter(profile => 
    ((!title || profile.title === title) && (profile.name.toLowerCase().includes(search.toLowerCase())))
  )

  return (
    <>
      <Nav />
      <Wrapper id="header">
        <h1>Profile App</h1>
      </Wrapper>
      <Wrapper id="about">
        <About />
      </Wrapper>
      <Filters titles={titles} onChange={handleChange} searchName={handleSearch} clear={handleClick} title={title} search={search} />
      <Columns id="profiles">
        
        {
            filteredProfiles.map((profile, index) => (
              <Card key={index} name={profile.name} title={profile.title} description={profile.description} img={profile.img} />
            ))
          }
      </Columns>
          
    </>
  )
}

export default App;
