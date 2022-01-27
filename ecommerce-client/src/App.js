import { AuthContext } from "./authContext/AuthContext";
import { Navigation } from "./routes/Navigation";
import { tokenAuth } from "./config/authTokenHeaders";
import { RegisterProductContext } from "./registerProductContext/RegisterProductContext";
import { CartContext } from "./cartContext/Cartcontext";
import { EndBuyContext } from "./endBuyContext/EndBuyContext";

function App() {
  const token = localStorage.getItem("token");
  if (token) {
    tokenAuth(token);
  }

  return (
    <AuthContext>
      <RegisterProductContext>
        <CartContext>
          <EndBuyContext>
            <Navigation />
          </EndBuyContext>
        </CartContext>
      </RegisterProductContext>
    </AuthContext>
  );
}

export default App;
