import React, { useState } from "react"
// import About from '../public/about.js';
import Navbar from "./components/navbar.js"
import TextForm from './components/textForm.js';
import Alert from "D:/Next/my-demo/pages/components/alert.js"







function App() {
  const [mode, setMode] = useState("Light") //Wheather dark mode is enabled or not.
  const [alert, setAlert] = useState(null)


  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  let toggleMode = () => {
    if (mode === "Light") {
      setMode("dark")
      document.body.style.backgroundColor = "rgb(13 44 88)"
      document.body.style.color = "white"
      document.getElementById("myBox").style.backgroundColor = "grey"
      document.getElementById("myBox").style.color = "white"
      showAlert("Dark Mode has been enabled", "success")
      document.title = "TextUtils Dark Mode"
      


    }
    else {
      setMode("Light")
      document.body.style.backgroundColor = "#fffffffc"
      document.body.style.color = "black"
      document.getElementById("myBox").style.backgroundColor = "#fffffffc"
      document.getElementById("myBox").style.color = "black"
      showAlert("Light Mode has been enabled", "success")
      document.title = "TextUtils Light Mode"
   
    }
  }



  let redMode = () => {
    if (document.body.style.backgroundColor === "red") {
      setMode("white")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      document.getElementById("myBox").style.backgroundColor = "white"
      document.getElementById("myBox").style.color = "black"
    }
    else if (document.body.style.backgroundColor === "white") {
      setMode("dark")
      document.body.style.backgroundColor = "red"
      document.body.style.color = "black"
      document.getElementById("myBox").style.backgroundColor = "#eb7241"
      document.getElementById("myBox").style.color = "black"
    }
    else {
      setMode("dark")
      document.body.style.backgroundColor = "red"
      document.body.style.color = "black"
      document.getElementById("myBox").style.backgroundColor = "#eb7241"
      document.getElementById("myBox").style.color = "black"
    }
  }



  return (

    <>
<header>

    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
    
  </header>
    
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggle={toggleMode} trigger={redMode} />
      <Alert alert={alert} />
      <TextForm heading="Enter the Text to Analyze"/>
      
     

    </>

  )

}
export default App;
