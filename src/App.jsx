
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Details from './components/Details/Details';
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from './components/Layout/Layout'
import Categories from './components/Categories/Categories'
import Platforms from './components/Platforms/Platforms'
import Sort from './components/Sort/Sort'
import UserInfoProvider from './context/userInfo'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import HomeSlider from './components/HomeSlider/HomeSlider'
import NotFound from './components/NotFound/NotFound';



export default function App() {
  let client=new QueryClient();
 /* let router=createBrowserRouter([
    {path:`/`,element:<Layout/>,children:[
      {path:`/`,element:<ProtectedRoute><HomeSlider/></ProtectedRoute>},
      {path:`/home`,element:<ProtectedRoute><Home/></ProtectedRoute>},
    
       {path:`/:id`,element:<ProtectedRoute><Details/></ProtectedRoute>},
      {path:`/categories/:type`,element:<ProtectedRoute><Categories/></ProtectedRoute>},
      {path:`/Platforms/:type`,element:<ProtectedRoute><Platforms/></ProtectedRoute>},
      {path:`/Sort/:type`,element:<ProtectedRoute><Sort/></ProtectedRoute>},
     
      {path:`/register`,element:<Register/>},
      {path:`/login`,element:<Login/>},
      { path: `*`, element: <NotFound /> },
     
  ]},

 ])
*/
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <ProtectedRoute><HomeSlider /></ProtectedRoute> },
      { path: '/home', element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: '/categories/:type', element: <ProtectedRoute><Categories /></ProtectedRoute> },
      { path: '/platforms/:type', element: <ProtectedRoute><Platforms /></ProtectedRoute> },
      { path: '/sort/:type', element: <ProtectedRoute><Sort /></ProtectedRoute> },
      { path: '/:id', element: <ProtectedRoute><Details /></ProtectedRoute> },
      { path: '/register', element: <Register /> },
      { path: '/login', element: <Login /> },
      { path: '*', element: <NotFound /> }, // Ensure this is at the end
    ],
  },
 
]);


  return <>
  <QueryClientProvider client={client}>
  <UserInfoProvider>
   
 <RouterProvider router={router}/>

 </UserInfoProvider>
 </QueryClientProvider>
  </>
}


