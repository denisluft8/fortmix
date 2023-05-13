import { Layout } from "./layout";
import { About, Home, Services, Values } from "./pages";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <About />
        <Values />
        <Services />
      </Layout>
    </>
  );
}

export default App;
