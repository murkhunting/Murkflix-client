import React from "react";
import "./app.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages//home/Home";
import Watch from "./pages/watch/Watch";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import AdminList from "./pages/adminList/AdminList";
import AdminListlist from "./pages/adminListlist/AdminListlist";
import AdminListnew from "./pages/adminListnew/AdminListnew";
import AdminMovie from "./pages/adminMovie/AdminMovie";
import AdminMovielist from "./pages/adminMovielist/AdminMovielist";
import AdminMovienew from "./pages/adminMovienew/AdminMovienew";

function App() {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/signup" />}
        />
        <Route
          path="/signup"
          element={!user ? <SignUp /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        {user && (
          <>
            <Route path="/movies" element={<Home type="movies" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch" element={<Watch />} />
          </>
        )}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/listlist" element={<AdminListlist />} />
        <Route path="/admin/list" element={<AdminList />} />
        <Route path="/admin/listnew" element={<AdminListnew />} />
        <Route path="/admin/movie" element={<AdminMovie />} />
        <Route path="/admin/movielist" element={<AdminMovielist />} />
        <Route path="/admin/movienew" element={<AdminMovienew />} />
      </Routes>
    </Router>
  );
}

export default App;
