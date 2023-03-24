import CursorProvider from "./components/Cursor";
import AppLayout from "./layouts/AppLayout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CursorProvider>
        <AppLayout />
      </CursorProvider>
    </BrowserRouter>
  );
}

export default App;
