import { useState } from "react";
import Home from "./pages/Home";
import SignUp from "./pages/SignUP";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import Profile from "./pages/Profile";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>qeiijip</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
