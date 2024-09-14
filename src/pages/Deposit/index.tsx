import { useEffect, useState } from "react";
import { useSendTransaction } from "wagmi";
import { useLocation, useNavigate } from "react-router-dom";
import { parseEther } from 'viem'
import toast from "react-hot-toast";

import { useWalletStore } from "../../store";

type Network = {
  title: string,
  icon: any
}

const Deposit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isPending, isSuccess, sendTransaction } = useSendTransaction();
  const { balance, setBalance } = useWalletStore() as { balance: number; setBalance: (balance: number) => void };

  const [method, setMethod] = useState<number>(0);

  const networks: Network[] = [
    {
      title: "Ethereum (ERC20)",
      icon: <svg width={29} height={29} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_305_4074)">
          <path d="M14.5 29C22.5081 29 29 22.5081 29 14.5C29 6.49187 22.5081 0 14.5 0C6.49187 0 0 6.49187 0 14.5C0 22.5081 6.49187 29 14.5 29Z" fill="#5F7EDD" />
          <path d="M14.4985 18.4498L9.62646 15.5715L14.4985 22.4387L19.3748 15.5715L14.4985 18.4498Z" fill="white" />
          <path d="M19.3719 14.6479L14.4985 17.5276L9.625 14.6479L14.4985 6.56128L19.3719 14.6479Z" fill="white" />
          <path d="M19.372 14.6479L14.4985 12.4323V6.56128L19.372 14.6479Z" fill="#C1CCF7" />
          <path d="M19.3749 15.5716L14.4985 22.4388V18.4498L19.3749 15.5716Z" fill="#C1CCF7" />
          <path d="M14.4985 12.4323V17.5276L9.62646 14.6479L14.4985 12.4323Z" fill="M14.4985 12.4323V17.5276L9.62646 14.6479L14.4985 12.4323Z" />
          <path d="M19.372 14.6479L14.4985 17.5276V12.4323L19.372 14.6479Z" fill="M19.372 14.6479L14.4985 17.5276V12.4323L19.372 14.6479Z" />
        </g>
      </svg>
    },
    {
      title: "USDT (ERC20)",
      icon: <svg width={29} height={29} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_305_4074)">
          <path d="M14.5 29C22.5081 29 29 22.5081 29 14.5C29 6.49187 22.5081 0 14.5 0C6.49187 0 0 6.49187 0 14.5C0 22.5081 6.49187 29 14.5 29Z" fill="#59AF99" />
          <path d="M16.0053 12.7151V11.0026H19.9014V8.30127H9.08876V11.0026H12.9951V12.7151C9.72241 12.8731 7.26611 13.53 7.26611 14.3101C7.26611 15.0902 9.71951 15.7499 12.9951 15.9051V21.5601H16.0053V15.9051C19.2779 15.7485 21.7342 15.0916 21.7342 14.3101C21.7342 13.5285 19.2852 12.8731 16.0053 12.7151ZM14.5002 15.4063C10.9564 15.4063 8.08391 14.8582 8.08391 14.1984C8.08391 13.6315 10.1763 13.1544 12.9922 13.0268V14.9611C13.4765 14.9829 13.9796 14.9959 14.4973 14.9959C15.0149 14.9959 15.521 14.9829 16.0024 14.9611V13.0268C18.8183 13.1544 20.9106 13.6315 20.9106 14.1984C20.9164 14.8654 18.044 15.4063 14.5002 15.4063Z" fill="white" />
        </g>
      </svg>
    }
  ];

  const transferMoney = async () => {
    if (location.state.network === 0) {
      sendTransaction({ to: import.meta.env.VITE_CLIENT_ADDRESS, value: parseEther((location.state.price).toString()) });
    } else {
      sendTransaction({ to: import.meta.env.VITE_CLIENT_ADDRESS, value: parseEther((location.state.price * 0.00042).toString()) });
    }
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success("Top Up completed successfully");
      let currentBalance = balance;
      if (location.state.network === 0) {
        currentBalance += location.state.price * 2357.76;
        setBalance(currentBalance);
      } else {
        currentBalance += location.state.price;
        setBalance(currentBalance);
      }
      navigate("/");
    }
  }, [isSuccess]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-9999">
      <div className="bg-[#180b33] w-11/12 md:w-1/2 max-h-screen px-4 py-6 rounded-2xl shadow-[0_0_15px_rgba(150,75,250,0.8)] flex flex-col items-center overflow-y-auto no-scrollbar">
        <span className="text-3xl text-white font-bold">Top Up Balance</span>
        <span className="mt-1 font-medium text-[#7e33e0] mt-3">Payment</span>
        <div className="w-full flex-col px-5 mt-12">
          <div className="w-full flex gap-5">
            <div
              className="group relative w-[50%] h-[140px] shadow-[0_0_5px_rgba(150,75,250,0.8)] flex flex-col justify-center items-center rounded-2xl cursor-pointer"
              onClick={() => { setMethod(0) }}
            >
              <svg
                width="80"
                viewBox="0 0 502 502"
                fill={method === 0 ? "#7e33e0" : "#ffffff"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M135.751,240.508h143.032c21.987,0,39.876-17.889,39.876-39.876s-17.888-39.876-39.876-39.876H135.752l18.417-18.417 c7.531-7.532,11.679-17.546,11.679-28.197s-4.148-20.665-11.679-28.197c-15.548-15.548-40.846-15.548-56.395,0l-86.102,86.102 c-7.634,7.634-11.775,17.782-11.67,28.585c-0.105,10.803,4.036,20.951,11.67,28.585l86.102,86.102 c7.774,7.774,17.986,11.661,28.197,11.661c10.212,0,20.424-3.887,28.197-11.662c7.531-7.532,11.679-17.546,11.679-28.197 c0-10.652-4.148-20.665-11.679-28.196L135.751,240.508z M140.025,301.176c-7.749,7.75-20.36,7.75-28.109,0l-86.102-86.102 c-3.818-3.817-5.882-8.901-5.813-14.313c0.001-0.086,0.001-0.172,0-0.258c-0.069-5.412,1.995-10.495,5.813-14.313l86.102-86.102 c3.875-3.875,8.965-5.813,14.055-5.813c5.09,0,10.18,1.938,14.054,5.814c3.755,3.754,5.822,8.745,5.822,14.055 c0,5.309-2.068,10.3-5.822,14.054l-35.488,35.488c-2.859,2.86-3.715,7.162-2.167,10.898c1.548,3.736,5.195,6.173,9.239,6.173 h167.174c10.959,0,19.876,8.917,19.876,19.876s-8.916,19.876-19.876,19.876H111.61c-4.045,0-7.691,2.436-9.239,6.173 c-1.548,3.736-0.693,8.037,2.167,10.897l35.488,35.489c3.754,3.753,5.821,8.744,5.821,14.054 C145.847,292.431,143.779,297.422,140.025,301.176z"></path> <path d="M490.328,272.784l-86.102-86.102c-15.549-15.548-40.847-15.548-56.395,0c-7.531,7.532-11.679,17.546-11.679,28.197 c0,10.652,4.148,20.665,11.679,28.196l18.417,18.417H223.217c-21.987,0-39.876,17.889-39.876,39.876s17.888,39.876,39.876,39.876 h143.032l-18.417,18.417c-7.531,7.532-11.679,17.546-11.679,28.197s4.148,20.665,11.679,28.197 c7.774,7.774,17.986,11.661,28.197,11.661s20.423-3.887,28.197-11.66l86.102-86.102c7.634-7.634,11.775-17.782,11.67-28.585 C502.103,290.566,497.962,280.418,490.328,272.784z M481.998,301.497c0.069,5.412-1.995,10.495-5.813,14.313l-86.102,86.102 c-7.749,7.75-20.36,7.75-28.109,0c-3.755-3.754-5.822-8.745-5.822-14.055c0-5.309,2.068-10.3,5.822-14.054l35.488-35.488 c2.859-2.86,3.715-7.162,2.167-10.898c-1.548-3.736-5.195-6.173-9.239-6.173H223.217c-10.959,0-19.876-8.917-19.876-19.876 c0-10.959,8.916-19.876,19.876-19.876v-0.001h167.172c4.045,0,7.691-2.436,9.239-6.173c1.548-3.736,0.693-8.037-2.167-10.897 l-35.488-35.489c-3.754-3.753-5.821-8.744-5.821-14.054c0-5.309,2.068-10.3,5.822-14.054c7.749-7.75,20.36-7.75,28.109,0 l86.102,86.102c3.818,3.817,5.882,8.901,5.813,14.313C481.997,301.325,481.997,301.411,481.998,301.497z"></path> <path d="M131.591,103.93c-3.905-3.905-10.237-3.904-14.142,0l-48.833,48.833c-3.905,3.906-3.905,10.237,0,14.143 c1.953,1.953,4.511,2.929,7.071,2.929c2.559,0,5.118-0.976,7.071-2.93l48.833-48.833 C135.496,114.167,135.496,107.835,131.591,103.93z"></path> <path d="M47.542,173.837l-8.768,8.769c-3.906,3.905-3.905,10.237,0,14.142c1.953,1.953,4.512,2.929,7.071,2.929 c2.559,0,5.118-0.976,7.071-2.929l8.768-8.769c3.906-3.905,3.905-10.236,0-14.142C57.779,169.931,51.447,169.932,47.542,173.837z "></path> </g> </g> </g> </g>
              </svg>
              <span className={`text-lg font-medium ${method === 0 ? 'text-[#7e33e0]' : 'text-white'}`}>Transfer</span>
            </div>
            <div
              className="group relative w-[50%] h-[140px] shadow-[0_0_5px_rgba(150,75,250,0.8)] flex flex-col justify-center items-center gap-y-3 rounded-2xl cursor-pointer"
              onClick={() => { setMethod(1) }}
            >
              <svg
                width="65"
                viewBox="0 0 285.938 285.938"
                fill={method === 1 ? "#7e33e0" : "#ffffff"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M217.969,103.125h-46.875v9.375h46.875c7.753,0,14.063,6.309,14.063,14.063v18.872 c-3.928-2.977-8.766-4.809-14.063-4.809h-150c-7.753,0-14.063-6.309-14.063-14.063s6.31-14.063,14.063-14.063h51.563v-9.375 H67.969c-12.923,0-23.438,10.514-23.438,23.438V262.5c0,12.923,10.514,23.438,23.438,23.438h150 c12.923,0,23.438-10.514,23.438-23.438v-14.063v-65.625v-18.75v-37.5C241.406,113.639,230.892,103.125,217.969,103.125z M232.031,239.063h-56.25c-12.923,0-23.438-10.514-23.438-23.438s10.514-23.438,23.438-23.438h56.25V239.063z M232.031,182.813 h-56.25c-18.094,0-32.813,14.723-32.813,32.813s14.719,32.813,32.813,32.813h56.25V262.5c0,7.753-6.309,14.063-14.063,14.063h-150 c-7.753,0-14.063-6.309-14.063-14.063V145.303c3.919,2.948,8.789,4.697,14.063,4.697h150c7.753,0,14.063,6.309,14.063,14.063 V182.813z"></path> <rect x="67.969" y="121.875" width="150" height="9.375"></rect> <circle style={{ fill: 'none' }} cx="142.969" cy="89.063" r="37.5"></circle> <path d="M147.656,103.125h-9.375c-2.583,0-4.688-2.105-4.688-4.688h-9.375 c0,7.753,6.309,14.063,14.063,14.063v4.688h9.375V112.5c7.753,0,14.063-6.309,14.063-14.063s-6.309-14.063-14.063-14.063h-9.375 c-2.583,0-4.688-2.105-4.688-4.688S135.698,75,138.281,75h9.375c2.583,0,4.688,2.105,4.688,4.688h9.375 c0-7.753-6.309-14.063-14.063-14.063v-4.688h-9.375v4.688c-7.753,0-14.063,6.309-14.063,14.063s6.309,14.063,14.063,14.063h9.375 c2.583,0,4.688,2.105,4.688,4.688S150.239,103.125,147.656,103.125z"></path> <path d="M161.719,215.625c0,7.753,6.309,14.063,14.063,14.063s14.063-6.309,14.063-14.063 s-6.309-14.063-14.063-14.063S161.719,207.872,161.719,215.625z M180.469,215.625c0,2.587-2.105,4.688-4.688,4.688 s-4.688-2.1-4.688-4.688s2.105-4.688,4.688-4.688S180.469,213.038,180.469,215.625z"></path> <rect x="138.281" width="9.375" height="37.5"></rect> <rect x="171.094" y="14.063" width="9.375" height="37.5"></rect> <rect x="105.469" y="23.438" width="9.375" height="28.125"></rect> </g> </g> </g>
              </svg>
              <span className={`text-lg font-medium ${method === 1 ? 'text-[#7e33e0]' : 'text-white'}`}>Wallet Transfer</span>
            </div>
          </div>
          {
            method === 0 && <div className="w-full shadow-[0_0_5px_rgba(150,75,250,0.8)] mt-5 rounded-2xl px-8 py-10">
              <div className="flex flex-col">
                <span className="mt-1 text-[#7e33e0]">Network Name</span>
                <div
                  className="min-h-[35px] mt-3 rounded-xl shadow-[0_0_5px_rgba(150,75,250,0.8)] text-white flex items-center gap-2 px-3 py-2"
                >
                  {networks[location.state.network].icon}
                  {networks[location.state.network].title}
                </div>
              </div>
              <div className="mt-4">
                <span className="mt-4 text-[#7e33e0]">Total Amount of {networks[location.state.network].title}</span>
                <div
                  className="min-h-[35px] mt-3 rounded-xl shadow-[0_0_5px_rgba(150,75,250,0.8)] text-white flex items-center gap-2 px-3 py-3"
                >
                  {location.state.network === 0 ? parseFloat((location.state.price / 2357.76).toString()).toString() : location.state.price.toString()}
                </div>
              </div>
              <div className="mt-4">
                <span className="mt-4 text-[#7e33e0]">Address</span>
                <div
                  className="min-h-[35px] mt-3 rounded-xl shadow-[0_0_5px_rgba(150,75,250,0.8)] text-white flex items-center gap-2 px-3"
                >
                  <span>{import.meta.env.VITE_CLIENT_ADDRESS}</span>
                </div>
              </div>

              <div className="flex mt-4 ml-3 gap-3">
                <div className="w-[15px] h-[15px] rounded-[50%] bg-[#7e33e0] mt-[5px]"></div>
                <span className="text-[#7e33e0]">Please double-check the recipient address and total amount before transferring</span>
              </div>

              <div className="flex justify-center mt-7">
                <span className="text-[#7e33e0]">Faster and more secure: use the QR code</span>
              </div>

              <div className="flex justify-center rounded-2xl mt-4 py-6 shadow-[0_0_5px_rgba(150,75,250,0.8)]">
                <img
                  src="/QR.png"
                  alt="QR Code"
                  className="w-[200px]" />
              </div>

              <div className="flex flex-col items-center mt-8 gap-4">
                <span className="text-[#7e33e0]">Once you have completed the transfer, please click the button below.</span>
                {!isPending ? <button
                  className={`flex w-full justify-center items-center rounded-md py-2 px-6 font-medium transition-transform duration-300 ease-in-out transform bg-[#7e33e0] text-white hover:shadow-[0_0_20px_rgba(126,51,224,0.8)] animate-gradient hover:animate-none}`}
                  onClick={() => {
                    transferMoney();
                  }}
                >
                  Transfered
                </button> : <div className="flex flex-col gap-2 items-center">
                  <div className="h-10 w-10 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent" />
                  <span className="text-[#7e33e0]">Your transaction is processing</span>
                </div>}
              </div>
            </div>
          }

          {
            method === 1 && <div className="mt-5">
              <span className="text-[#7e33e0]">Total Payment</span>
              <div
                className="min-h-[35px] mt-3 rounded-xl shadow-[0_0_5px_rgba(150,75,250,0.8)] text-white flex items-center gap-2 px-3 cursor-pointer"
              >
                {location.state.network === 0 ? parseFloat((location.state.price / 2357.76).toString()).toString() : location.state.price.toString()}
              </div>
              <div className="mt-5">
                {!isPending ? <button
                  className={`flex w-full justify-center items-center rounded-md py-2 px-6 font-medium transition-transform duration-300 ease-in-out transform bg-[#7e33e0] text-white hover:shadow-[0_0_20px_rgba(126,51,224,0.8)] animate-gradient hover:animate-none}`}
                  onClick={() => {
                    transferMoney();
                  }}
                >
                  Pay
                </button> : <div className="flex flex-col gap-2 items-center">
                  <div className="h-10 w-10 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent" />
                  <span className="text-[#7e33e0]">Your transaction is processing</span>
                </div>}
              </div>
            </div>
          }
        </div>
      </div>
    </div >
  )
}

export default Deposit;