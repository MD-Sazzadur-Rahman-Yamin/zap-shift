import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import AboutUs from "../Pages/About Us/AboutUs";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRouter from "./PrivateRouter";
import BeARider from "../Pages/BeARider/BeARider";
import SendParcel from "../Pages/SendParcel/SendParcel";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels/MyParcels";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../Pages/Dashboard/Payment/PaymentCancelled";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import ApproveRiders from "../Pages/Dashboard/ApproveRiders/ApproveRiders";
import UserManagement from "../Pages/Dashboard/UserManagement/UserManagement";
import AdminOnlyRouter from "./AdminOnlyRouter";
import AssignRiders from "../Pages/Dashboard/AssignRiders/AssignRiders";
import RiderOnlyRouter from "./RiderOnlyRouter";
import AssignedDeliveries from "../Pages/Dashboard/AssignedDeliveries/AssignedDeliveries";
import CompletedDeliveries from "../Pages/Dashboard/CompletedDeliveries/CompletedDeliveries";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about-us",
        Component: AboutUs,
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "be-a-rider",
        element: (
          <PrivateRouter>
            <BeARider></BeARider>
          </PrivateRouter>
        ),
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "send-parcel",
        element: (
          <PrivateRouter>
            <SendParcel></SendParcel>
          </PrivateRouter>
        ),
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    errorElement: <Error></Error>,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRouter>
        <DashboardLayout></DashboardLayout>
      </PrivateRouter>
    ),
    errorElement: <Error></Error>,
    children: [
      {
        path: "my-parcels",
        Component: MyParcels,
      },
      {
        path: "payment/:parcelId",
        Component: Payment,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancelled",
        Component: PaymentCancelled,
      },
      {
        path: "payment-history",
        Component: PaymentHistory,
      },
      //rider only routes
      {
        path: "assigned-deliveries",
        element: (
          <RiderOnlyRouter>
            <AssignedDeliveries></AssignedDeliveries>
          </RiderOnlyRouter>
        ),
      },
      {
        path: "completed-deliveries",
        element: (
          <RiderOnlyRouter>
            <CompletedDeliveries></CompletedDeliveries>
          </RiderOnlyRouter>
        ),
      },
      //admin only routes
      {
        path: "approve-riders",
        element: (
          <AdminOnlyRouter>
            <ApproveRiders></ApproveRiders>
          </AdminOnlyRouter>
        ),
      },
      {
        path: "user-management",
        element: (
          <AdminOnlyRouter>
            <UserManagement></UserManagement>
          </AdminOnlyRouter>
        ),
      },
      {
        path: "assign-riders",
        element: (
          <AdminOnlyRouter>
            <AssignRiders></AssignRiders>
          </AdminOnlyRouter>
        ),
      },
    ],
  },
]);
export default router;
