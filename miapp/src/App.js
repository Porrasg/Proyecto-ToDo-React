import './App.css';
import ToDo from './pages/ToDo/ToDo';

import SignUp from './pages/SignUp/SignUp';

// Importar los recursos de React Router Dom
import {createBrowserRouter , RouterProvider} from 'react-router-dom';

function App() {
  // crear las rutas de mi pagina
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp></SignUp>
    },
    {
      path: "/signup",
      element: <SignUp></SignUp>
    },
    {
      path: "/tareas/:nombre",
      element: <ToDo></ToDo>
    }
  ]) 
  
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
