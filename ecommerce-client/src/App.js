import { AuthContext } from "./authContext/AuthContext";
import { Navigation } from "./routes/Navigation";
import { tokenAuth } from "./config/authTokenHeaders";
import { RegisterProductContext } from "./registerProductContext/RegisterProductContext";
import { CartContext } from "./cartContext/Cartcontext";

function App() {
  const token = localStorage.getItem("token");
  if (token) {
    tokenAuth(token);
  }

  return (
    <AuthContext>
      <RegisterProductContext>
        <CartContext>
          <Navigation />
        </CartContext>
      </RegisterProductContext>
    </AuthContext>
  );
}

export default App;
