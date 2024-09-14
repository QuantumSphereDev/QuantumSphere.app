import { http } from 'wagmi';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { mainnet } from 'wagmi/chains';

export const projectId = import.meta.env.VITE_PROJECT_ID as string;

export const metadata = {
  name: 'Quantum Sphere AI',
  description: 'A platform for Cloud Service',
  url: 'http://localhost:5173',
  icons: [''],
}

export const config = defaultWagmiConfig({
  chains: [
    mainnet,
  ],
  projectId,
  metadata,
  transports: {
    [mainnet.id]: http(''),
  }
}
)