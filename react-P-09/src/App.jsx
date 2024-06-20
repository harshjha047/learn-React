import { useState,useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './Context/Theme'
import ThemeBth from './Components/ThemeBth'
import Card from './Components/Card'

function App() {
const [themeMode, setThemeMode] = useState("light")
const darkTheme=()=>{
setThemeMode("dark")
}
const lightTheme=()=>{
setThemeMode("light")
}

useEffect(() => {
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
}, [themeMode])

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBth/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

    </ThemeProvider>
  )
}

export default App
