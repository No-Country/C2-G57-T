import { AuthContext } from "./authContext/AuthContext";
import { Navigation } from "./routes/Navigation";
import { tokenAuth } from "./config/authTokenHeaders";

function App() {
  const token = localStorage.getItem("token");
  if (token) {
    tokenAuth(token);
  }

  console.log('token ok', token )

  return (
    <AuthContext>
      <Navigation />
    </AuthContext>
  );
}

export default App;
