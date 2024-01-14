import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/Router';
import '../src/assets/css/common.css';

function App() {
  return (
    <>
   <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
