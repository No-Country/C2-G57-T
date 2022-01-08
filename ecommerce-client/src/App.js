import { AuthContext } from "./authContext/AuthContext";
import { Navigation } from "./routes/Navigation";

function App() {
  return (
    <AuthContext>
      <Navigation />
    </AuthContext>
  );
}

export default App;
