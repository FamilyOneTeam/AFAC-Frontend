import WelcomeScreen from "./features/welcome/page";
import AuthLayout from "./layouts/auth.layout";

function App() {
  return (
    <AuthLayout>
      <WelcomeScreen />
    </AuthLayout>
  );
}

export default App
