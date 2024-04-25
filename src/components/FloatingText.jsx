import React,{useContext,useEffect} from 'react'
import { darkModeContext } from '../App';
import "../assets/Components.css"

const FloatingText = () => {

    const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => {
        const darkModeValue2 = localStorage.getItem("darkModeValue");
        setDarkMode(darkModeValue2)
    }, []);


  return (
    <div className={darkMode?"bg-dark text-warning border-top border-2 border-primary":"bg-warning text-black border-top border-2 border-success"}>
        <div className="floatingtextcontainer">
            <div className="floatingtextcontaineritem"><h4><b>FLASH NEWS:</b> </h4></div>
            <div className="floatingtextcontaineritem"><p><b>Online applications for New Adam Batch</b></p></div>
            <div className="floatingtextcontaineritem"><p><b>First Year Student Induction Program 2023</b></p></div>
            <div className="floatingtextcontaineritem"><p><b>M. Tech Admissions 2023</b></p></div>
        </div>
    </div>
  )
}

export default FloatingText
