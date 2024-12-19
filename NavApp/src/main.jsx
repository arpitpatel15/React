import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from './componants/About/About.jsx'
import Home from './componants/Home/Home.jsx'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Contact from './componants/Contact/Contect.jsx'
import User from './componants/User/User.jsx'
import Github from './componants/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout/>,
//     children : [
//       {
//         path : "",
//         element:<Home />
//       },
//       {
//         path : "about",
//         element:<About/>
//       },
//       {
//         path : "contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}></Route>
      <Route path='github' element={<Github/>}></Route>
      //we can also nested routing in Route
      {/* <Route path='contact' element={<Contact/>}/> 
            <Route path='phoneno' element={<Phoneno/>}/>
            url : contact/phoneno
          </Route>*/}
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
