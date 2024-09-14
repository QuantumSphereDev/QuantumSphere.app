import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

type Network = {
  title: string,
  icon: any
}

const TopUpDialog = ({ isOpen, onClose }: {
  isOpen: boolean,
  onClose: () => void
}) => {

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

  const dropDownRef = useRef(null);
  const navigate = useNavigate();
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);
  const [network, setNetwork] = useState<Network | null>(null);

  const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-9999">
        <div className="bg-[#180b33] w-11/12 md:w-[500px] px-4 py-6 rounded-3xl shadow-[0_0_15px_rgba(150,75,250,0.8)] flex flex-col items-center">
          <span className="text-3xl tracking-wide font-medium text-white">Top Up Balance</span>
          <span className="text-lg mt-1 text-[#7e33e0]">Request Amount</span>
          <div className="flex flex-col mt-8 w-full px-3">
            <span className="text-lg mt-1 text-[#7e33e0]">Network name</span>
            <div className="relative mt-3">
              <div
                className="min-h-[45px] rounded-xl shadow-[0_0_5px_rgba(150,75,250,0.8)] text-white flex items-center gap-2 px-3 py-3 cursor-pointer"
                onClick={() => { setExpanded(!isExpanded) }}
              >
                {network?.icon}
                {network?.title}
              </div>
              {isExpanded && <div
                ref={dropDownRef}
                className={`absolute left-0 group w-full z-99 rounded-2xl bg-[#30184f] cursor-pointer ${network === null ? 'top-[50px]' : 'top-[60px]'}`}
              >
                {networks?.map((network: any, index: number) => (
                  <div
                    key={index}
                    className={`text-white px-4 py-2 hover:bg-[#44197c] flex items-center gap-3 ${index === 0 ? "rounded-t-2xl" : index === networks?.length - 1 ? "rounded-b-2xl" : ""}`}
                    onClick={() => {
                      setNetwork(network);
                      setExpanded(false);
                    }}
                  >
                    {network.icon}
                    {network.title}
                  </div>
                ))}
              </div>}
            </div>
            <div className="mt-7">
              <span className="text-[#7e33e0]">Total Amount  in USDT</span>
              <div className="flex items-center gap-3 mt-3">
                <button
                  className="flex justify-center items-center rounded-full bg-[#7e33e0] px-8 py-2 text-md text-white transition-transform duration-300 ease-in-out transform hover:scale-90"
                  onClick={() => setPrice(50)}
                >
                  $50
                </button>
                <button
                  className="flex justify-center items-center rounded-full bg-[#7e33e0] px-8 py-2 text-md text-white transition-transform duration-300 ease-in-out transform hover:scale-90"
                  onClick={() => setPrice(100)}
                >
                  $100
                </button>
                <button
                  className="flex justify-center items-center rounded-full bg-[#7e33e0] px-8 py-2 text-md text-white transition-transform duration-300 ease-in-out transform hover:scale-90"
                  onClick={() => setPrice(200)}
                >
                  $200
                </button>
                <div className="flex items-center">
                  <span className="text-white">$</span>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="min-h-[40px] w-full rounded-xl text-white bg-transparent px-3 shadow-[0_0_10px_rgba(150,75,250,0.8)] flex items-center ml-4 outline-none"
                  />
                </div>
              </div>
              <div className="mt-10">
                <button
                  disabled={network === null || price === 0}
                  className={`flex w-full justify-center items-center rounded-md py-2 px-6 font-medium transition-transform duration-300 ease-in-out transform ${network === null || price === 0
                    ? 'bg-[#3d196c] cursor-not-allowed'
                    : 'bg-[#7e33e0] text-white hover:shadow-[0_0_20px_rgba(126,51,224,0.8)] animate-gradient hover:animate-none'
                    }`}
                  onClick={() => {
                    const randomUUId = generateUUID();
                    navigate(
                      `/deposit/${randomUUId}`,
                      {
                        state: {
                          network: network?.title === 'Ethereum (ERC20)' ? 0 : 1,
                          price: price
                        }
                      }
                    );
                    setNetwork(null);
                    setPrice(0);
                    onClose();
                  }}
                >
                  Continue To Payment
                </button>
                <button
                  className="w-full flex justify-center items-center rounded-md py-1.5 px-6 mt-4 text-white text-white transition-transform duration-300 ease-in-out transform hover:shadow-[0_0_5px_rgba(126,51,224,0.8)] animate-gradient hover:animate-none"
                  onClick={() => {
                    setNetwork(null);
                    setPrice(0);
                    onClose();
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  )
}

export default TopUpDialog;