import { AuthContext } from "./authContext/AuthContext";
import { Navigation } from "./routes/Navigation";
import { tokenAuth } from "./config/authTokenHeaders";
import { RegisterProductContext } from "./registerProductContext/RegisterProductContext";

function App() {
  const token = localStorage.getItem("token");
  if (token) {
    tokenAuth(token);
  }

  console.log("token ok", token);

  return (
    <AuthContext>
      <RegisterProductContext>
        <Navigation />
      </RegisterProductContext>
    </AuthContext>
  );
}

export default App;
