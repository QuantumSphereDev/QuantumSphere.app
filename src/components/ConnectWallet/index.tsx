import { useWeb3Modal } from "@web3modal/wagmi/react";

const ConnectWallet = () => {
  const { open: openModal } = useWeb3Modal();

  return (
    <div className="w-full min-h-full flex justify-center items-center">
      <button
        className="flex justify-center items-center rounded-full bg-gradient-to-r from-[#491c89] to-[#7e33e0] py-2 px-6 font-medium text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_rgba(126,51,224,0.8)] animate-gradient hover:animate-none"
        onClick={() => {
          openModal({ view: 'Connect' })
        }}
      >
        Connect Wallet
      </button>
    </div>
  )
}

export default ConnectWallet;