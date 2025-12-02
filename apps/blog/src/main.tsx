import { createRoot } from "react-dom/client";

const App = () => (
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" className="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img
        src={"https://avatars.githubusercontent.com/u/85546022?v=4"}
        className="logo vanilla"
        alt="TypeScript logo"
      />
    </a>
    <div className="card">
      Hello
    </div>
  </div>
);

createRoot(document.getElementById("app")!).render(<App />);