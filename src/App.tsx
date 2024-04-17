import { ListView } from "./components/ListView";
import "./App.css";
import { useUndoRedoListeners } from "./hooks/useUndoRedoListeners";

function App() {
  useUndoRedoListeners();
  return (
    <div className="app">
      <ListView></ListView>
    </div>
  );
}

export default App;
