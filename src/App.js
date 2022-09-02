import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FeedPage from "./components/Dashboard/FeedPage";
import JobPage from "./components/Dashboard/JobPage";
import NotificationPage from "./components/Dashboard/NotificationPage";
import PostPage from "./components/Dashboard/PostPage";
import PostPageDetails from "./components/Dashboard/PostPageDetails";
import ProfilePage from "./components/Dashboard/ProfilePage";
import LandingPage from "./components/LandingPage";
import NotFoundPage from "./components/NotFoundPage";
import SignInPage from "./components/SignInPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/post" element={<PostPage />} />
        <Route exact path="/post/:id" element={<PostPageDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
