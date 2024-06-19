import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contect from './components/Contect.jsx'
import GitHub,{githubInfoLoader} from './components/GitHub.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>,
//     children:[{
//       path:"",
//       element:<Home/>
//     },
//     {
//       path:"/about",
//       element:<About/>
//     },
//     {
//       path:"/contect",
//       element:<Contect/>
//     },
//     {
//       path:"/gitHub",
//       element:<GitHub/>
//     },
//   {}]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contect' element={<Contect/>}/>
      <Route loader = {githubInfoLoader} path='/gitHub' element={<GitHub/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
