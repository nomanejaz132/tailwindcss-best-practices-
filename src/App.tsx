import {
  ChevronDown,
  Code,
} from "lucide-react";
import { Button } from "./components/buttoncva";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Button intent="primary" size="medium">
        <Code className="w-4 h-4" />
        Code
        <ChevronDown className="w-4 h-4 -mr-1" />
      </Button>
    </div>
  );
}

export default App;
