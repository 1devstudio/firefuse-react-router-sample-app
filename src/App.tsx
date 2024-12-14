import './App.css'
import {Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import {ProtectedRoutes} from "./components/ProtectedRoutes.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<ProtectedRoutes/>}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App
