import { RouterProvider } from "react-router-dom";
import Router from "./Components/Route/Router";

function App() {
  return (
    <div className="md:mx-10">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
