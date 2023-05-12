import { Layout } from "./layout";
import { About, Home, Values } from "./pages";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <About />
        <Values />
      </Layout>
    </>
  );
}

export default App;
