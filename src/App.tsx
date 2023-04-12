import "./styles/index.css";
import { Route, Routes } from "react-router-dom";
import UserDashboard from "./views/UserDashboard";
import AdminDashboard from "./views/AdminDashboard";
import Login from "./components/Login";
import Layout from "./views/Layout";
import RequestSingle from "./views/RequestSingle";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Login />}></Route>
          <Route path="/user" element={<UserDashboard />}></Route>
          <Route path="/admin" element={<AdminDashboard />}></Route>
          <Route path="/requests/:requestId" element={<RequestSingle />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
