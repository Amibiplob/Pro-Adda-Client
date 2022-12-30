import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Router from "./Components/Route/Router";

function App() {
  return (
    <div className="md:mx-10">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
