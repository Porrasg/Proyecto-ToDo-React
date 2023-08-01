import './App.css';
import ToDo from './pages/ToDo/ToDo';

import SignUp from './pages/SignUp/SignUp';
import NotFound from './pages/NotFound/NotFound';

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
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]) 
  
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
