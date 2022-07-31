import React from "react";

export function Accordion(props){
    
    return (<>
    <AccordionTitle title = {props.title}/>
    <AccordionBody/>
    </>);
  }
  
  const AccordionTitle = (props) => {
    
    console.log("AccordionTitle is rendering")
    return (<><h1>{props.title}</h1></>)
  }
  
  const AccordionBody = () => {
    console.log("AccordionBody is rendering")
    return (<div>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>SCSS</li>
        <li>GIT</li>
        <li>JS</li>
        <li>TypeScript</li>
      </ul>
    </div>)
  }