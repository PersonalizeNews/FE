import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Send from './pages/Send';
import Contact from './pages/Contact';
import Login from './pages/Login'
import Notfound from './pages/NotFound'
import { LoadingProvider } from './contexts/LoadingContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/send",
    element: <Send />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

function App() {

  return (
    <LoadingProvider>
      <RouterProvider router={router} />
    </LoadingProvider>
  )
}

export default App
