import CursorProvider from "./components/Cursor";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <CursorProvider>
      <AppLayout />
    </CursorProvider>
  );
}

export default App;
