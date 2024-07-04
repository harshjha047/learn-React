import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import './index.css'
import { Provider } from 'react-redux'
import store from './Store/Store'
import {AddPost, AllPost, EditPost, Home, Login, Post, SignUp} from './pages'
import {Protected}from './components'

const router = createBrowserRouter([
  {
   path: '/',
   element: <App/>,
   children:[
    {
    path:"/",
    element:<Home/>
   },
   {
    path:"/login",
    element:(
    <Protected authentication={false}>
      <Login/>
      </Protected>
      )
   },
   {
    path:"/signup",
    element:(
      <Protected authentication={false}>
        <SignUp/>
      </Protected>
    )
   },
   {
    path:"/addpost",
    element:(
      <Protected authentication>
        <AddPost/>
      </Protected>
    )
   },
   {
    path:"allpost",
    element:(
      <Protected authentication>
        <AllPost/>
      </Protected>
    )
   },
   {
    path:"editpost/:slug",
    element:(
      <Protected authentication>
        <EditPost/>
      </Protected>
    )
   },
   {
    path:"post/:slug",
    element:(
      <Protected authentication>
        <Post/>
      </Protected>
    )
   },

  ] 
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
    
  </React.StrictMode>
)
