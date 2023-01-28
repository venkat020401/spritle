import "./App.css";
import "./sbadmin.css";
import TeachersDashboard from "./TeachersDashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Portal from "./Portal";
import Createaccount from "./Createaccount";
import StudentDaseboard from "./StudentDaseboard";
import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import History from "./History";

function App() {

  const [isVisible, setVisible] = useState(true);

  useEffect(() => {

    const data = window.localStorage.getItem('visible');
    if (data !== null) setVisible(JSON.parse(data))

  }, []);

  useEffect(() => {

    window.localStorage.setItem('visible', JSON.stringify(isVisible));

  }, [isVisible]);

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login setVisible={setVisible} />} />
        <Route path="create-account" element={<Createaccount />} />
        <Route path="/portal" element={<Portal isVisible={isVisible} />}>
          <Route path="calculator" element={<Dashboard isVisible={isVisible} />} />
          <Route path="teachers-dashboard" element={<TeachersDashboard />} />
          <Route path="student-dashboard" element={<StudentDaseboard />} />
          <Route path="History" element={<History isVisible={isVisible} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
