import { Outlet } from "react-router-dom";
import Header from "./component/header";
import OrderSucess from "./component/orderSucess";

function App() {
  return (
    <>
       <Header />
       <Outlet/>
    </>
  )
}

export default App;
