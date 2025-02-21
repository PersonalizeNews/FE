import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Chat from './pages/Chat';
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
    path: "/chat",
    element: <Chat />,
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
