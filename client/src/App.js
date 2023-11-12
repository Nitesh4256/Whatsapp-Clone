import "./App.css";
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./components/contaxt/AccountProvider";
function App() {
  const clientId =
    "943381364014-174lrpqd0rhf3i811pchf1pfenp0rjai.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId} className="App">
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
