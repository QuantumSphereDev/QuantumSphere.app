import { Connector, useAccount, useConnect } from "wagmi";
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useWalletStore } from "../store";

import TopUpDialog from "../components/TopUpDialog";
import { useEffect, useState } from "react";

const Header = (props: {
  sidebarDesktopOpen: string | boolean | undefined;
  sidebarMobileOpen: string | boolean | undefined;
  setSidebarMobileOpen: (arg0: boolean) => void;
}) => {

  const { address, connector } = useAccount();
  const { connectAsync, connectors } = useConnect();
  const { open: openModal } = useWeb3Modal();
  const { isConnectedToWallet, balance } = useWalletStore() as { isConnectedToWallet: boolean, balance: number };

  const [isOpenTopUpModal, setOpenTopUpModal] = useState<boolean>(false);

  const handleWalletConnect = async (connector: Connector) => {
    await connectAsync({ connector: connector });
  }

  useEffect(() => {
    if (isConnectedToWallet) {
      connectors.map((matchedConnector) => {
        if (matchedConnector.id === connector?.id) {
          handleWalletConnect(matchedConnector);
        }
      })
    }
  }, [isConnectedToWallet]);

  return (
    <header className="sticky top-0 z-999 flex w-full bg-gradient-to-r from-[#180938] to-[#321364]">
      <div className={`flex flex-grow items-center px-4 shadow-2 md:px-6 2xl:px-11 justify-between lg:justify-end ${isConnectedToWallet ? "h-[80px]" : "h-[60px]"}`}>
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarMobileOpen(!props.sidebarMobileOpen);
            }}
            className="z-99999 block rounded-sm px-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-white delay-[0] duration-200 ease-in-out dark:bg-white ${!props.sidebarDesktopOpen && '!w-full delay-300'
                    }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-white delay-150 duration-200 ease-in-out dark:bg-white ${!props.sidebarDesktopOpen && 'delay-400 !w-full'
                    }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-white delay-200 duration-200 ease-in-out dark:bg-white ${!props.sidebarDesktopOpen && '!w-full delay-500'
                    }`}
                ></span>
              </span>
            </span>
          </button>
        </div>
        {isConnectedToWallet && <div className="flex items-center">
          <div
            className="flex justify-center items-center rounded-full bg-[#57239a] px-6 py-1 text-md text-white mr-3"
          >
            ${parseFloat(String(balance * 2357.76)).toFixed(2)}
          </div>
          <button
            className="flex justify-center items-center rounded-full bg-[#7e33e0] px-6 py-1 text-md text-white transition-transform duration-300 ease-in-out transform hover:scale-90"
            onClick={() => { setOpenTopUpModal(true) }}
          >
            Top Up
          </button>
          <div className="border-r h-[45px] mx-4" />
          <button
            className="flex justify-center items-center rounded-full bg-[#7e33e0] px-4 py-1 text-md text-white transition-transform duration-300 ease-in-out transform hover:scale-90"
            onClick={() => {
              openModal({ view: 'Account' })
            }}
          >
            {address?.slice(0, 9)}...
          </button>
        </div>}
      </div>
      <TopUpDialog
        isOpen={isOpenTopUpModal}
        onClose={() => { setOpenTopUpModal(false) }}
      />
    </header>
  );
};

export default Header;
