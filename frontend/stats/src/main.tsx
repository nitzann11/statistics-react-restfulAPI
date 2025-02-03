import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { store } from "./Redux/state"; 
import { ToastContainer } from 'react-toastify';
import { Routing } from './Components/RoutingArea/Routing.tsx';


createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
        <ToastContainer theme='dark' /> 
            <Routing/>
        </BrowserRouter>
    </Provider>
)
