import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

const client = new ApolloClient({
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <section>
        <Header />
      </section>
      <section>
        <Outlet />
      </section>
      <section>
        <Footer />
      </section>
    </ApolloProvider>
  );
}

export default App;
