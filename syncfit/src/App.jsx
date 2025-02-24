import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Emotion from './pages/Emotion';
import Contact from './pages/Contact';
import MyPage from './pages/MyPage'
import Notfound from './pages/NotFound'
import OAuthCallback from './pages/OAuthCallback';
import { LoadingProvider } from './contexts/LoadingContext';
import { AuthProvider } from './contexts/AuthContext';
import WishList from './pages/WishList';

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
    path: "/wishlist",
    element: <WishList />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
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
    <AuthProvider>
      <LoadingProvider>
        <RouterProvider router={router} />
      </LoadingProvider>
    </AuthProvider>
  )
}

export default App
