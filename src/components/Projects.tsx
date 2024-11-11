import React from 'react'
import Heading from './Heading'
import Card from './Card'
import Image from 'next/image'
const data =[
  {
    id:0,
    title: "Todo List",
    desc: "A React & TypeScript based app for managing and organize",
    img: "",
    tags: ["React", "Node", "CSS", "Typescript"],
  },

  {
    id:1,
    title: "Countdown Timer",
    desc: "A Next.js and Typescript powered website to track time",
    img: "",
    tags: ["Next.JS", "Node", "CSS", "Typescript"],
  },
  {
    id:2,
    title: "E-commerce website",
    desc: "A React & TypeScript based app for managing and organize",
    img:"",
    tags: ["Next.JS", "Node", "CSS", "Typescript"],
  },

  {
    id:3,
    title: "Currency Converter Project",
    desc: "A simple HTML and Typescript powered tool for converting",
    img: "",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },

  {
    id:4,
    title: "Static Interactive Resume",
    desc: "A Typescript-based interactive resume built with HTML and",
    img: "",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },

  {
    id:5,
    title: "Simple Calculator Project",
    desc: "A basic HTML CSS and Typescript calculator for performing",
    img: "",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },

]


const Projects = () => { 
  return (
    <div id='project' className='container pt-32'>
      <Heading title={'My Projects'} />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card
        key={el.id} 
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
          
      
        
        
        
        /> ))}
      </div>
    </div>
  )
}

export default Projects
