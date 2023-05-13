import { Layout } from "./layout";
import { About, Contact, Home, Services, Values } from "./pages";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <About />
        <Values />
        <Services />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
