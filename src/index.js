import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CampaignerDashboard from './features/users/CampaignerDashboard';
import AdminDashboard from './features/users/adminDashboard';
import Login from './features/users/Login';
import Home from './shared/Home';
import CreateCampaign from './features/users/CreateCampaign';
import AddRegistrations from './features/users/AddRegistrations';
import RegMembers from './features/users/RegMembers';
import Campaigns from './features/users/Campaigns';
import Campaigners from './features/users/Campaigners';
import TotalReg from './features/users/TotalReg';
import RegByCamp from './features/users/RegByCamp';
const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/adminDashboard",
        element:<AdminDashboard></AdminDashboard>
      },
      {
        path:"/campaignerDashboard",
        element:<CampaignerDashboard></CampaignerDashboard>,
        children:[
          {
            path:'/campaignerDashboard/reg',
            element:<RegMembers></RegMembers>
          },
          {
            path:'/campaignerDashboard/campaigns',
            element:<Campaigns></Campaigns>
          },
        ]
       
      },
      {
        path:'/campaigns',
        element:<Campaigns></Campaigns>
      },
     
      {
        path:"/logout",
        element:<Login></Login>
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/createcampaign",
        element:<CreateCampaign></CreateCampaign>
      },
      {
        path:"/addregistration/:cname/:tname",
        element:<AddRegistrations></AddRegistrations>
      },
      {
        path:"/campaigners",
        element:<Campaigners></Campaigners>
      },
      {
        path:"/totalreg",
        element:<TotalReg></TotalReg>
      },
      {
        path:"/regbycamp/:cname",
        element:<RegByCamp></RegByCamp>
      },
     
      
    ]
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
    <RouterProvider router={router} />
   </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
