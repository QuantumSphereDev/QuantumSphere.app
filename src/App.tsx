import { WagmiProvider } from 'wagmi';
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import routes from './routes';
import { useWalletStore } from './store';
import { metadata, projectId, config } from './lib/config';

import DefaultLayout from './layout/DefaultLayout';
import ConnectWallet from './components/ConnectWallet';

const queryClient = new QueryClient();

createWeb3Modal({
  metadata,
  wagmiConfig: config,
  projectId,
  enableAnalytics: true
})

function App() {
  const { isConnectedToWallet } = useWalletStore() as { isConnectedToWallet: boolean };

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          containerClassName="overflow-auto"
        />
        <Routes>
          <Route element={<DefaultLayout />}>
            {routes.map((routes, index) => {
              const { path, component: Component } = routes;
              return (
                <Route
                  key={index}
                  path={path}
                  element={
                    <>
                      {isConnectedToWallet ? <Component /> : <ConnectWallet />}
                    </>
                  }
                />
              );
            })}
          </Route>
        </Routes>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
