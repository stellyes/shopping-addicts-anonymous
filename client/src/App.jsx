import { Outlet } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Header from './components/Header';

const client = new ApolloClient({
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
        <Header />
        <Outlet />
    </ApolloProvider>
  );
};

export default App;