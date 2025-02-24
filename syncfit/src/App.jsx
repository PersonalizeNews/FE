import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Emotion from './pages/Emotion';
import Contact from './pages/Contact';
import Login from './pages/Login'
import Notfound from './pages/NotFound'
import OAuthCallback from './pages/OAuthCallback';
import { LoadingProvider } from './contexts/LoadingContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/emotion",
    element: <Emotion />,
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
    path: "/auth/kakao/callback",
    element: <OAuthCallback />,
  },
  {
    path: "*",
    element: <Notfound />,
  }
]);

function App() {

  return (
    <LoadingProvider>
      <RouterProvider router={router} />
    </LoadingProvider>
  )
}

export default App
