import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from 'react';
import { AuthRoute } from "@/components/AuthRoute";
// 导入路由
import CRMLayout from "@/pages/Layout";
import Login from "@/pages/Login";
import Test from "@/pages/Test";
import LoginTest from "@/pages/LoginTest";

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoute><CRMLayout /></AuthRoute>,
    children: [
      
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/logintest',
    element: <LoginTest />
  },
  {
    path: '/test',
    element: <Test />
  }
]);

export default router;