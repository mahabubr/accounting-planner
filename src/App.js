import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Route/Route';

function App() {
  return (
    <div>
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
