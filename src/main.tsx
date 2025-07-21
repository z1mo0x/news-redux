import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store/store.tsx'
import Posts from './pages/Posts/Posts.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/posts',
    element: <Posts />
  },

])

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <div className="container">
      <RouterProvider router={router} />
    </div>
  </Provider>
)
