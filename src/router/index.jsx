import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from 'react';
import { AuthRoute } from "@/components/AuthRoute";
// 导入路由
import CRMLayout from "@/pages/Layout";
import Login from "@/pages/Login";
import Test from "@/pages/Test";
import Test1 from "@/pages/Test1";
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
  },
  {
    path: '/test1',
    element: <Test1 />
  }
]);

export default router;