import { Toaster } from "react-hot-toast";
import { ThemModeProvider } from "./context/Themecontext";
import Layout from "./Layout";

function App() {
  return (
    <ThemModeProvider>
      <Toaster />
      <Layout />
    </ThemModeProvider>
  );
}

export default App;
