import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import AllRoutes from "./pages/AllRoutes";

function App() {
  const [userpic, setuserpic] = useState(false);
  useEffect(() => {
    let pic = localStorage.getItem("pictures");
    if (pic) {
      setuserpic(pic);
    } else {
      setuserpic(false);
    }
  }, []);
  return (
    <div className="App">
      <Navbar userpic={userpic} setuserpic={setuserpic} />
      <AllRoutes setuserpic={setuserpic}/>
    </div>
  );
}

export default App;
