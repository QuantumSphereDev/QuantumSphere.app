import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useMachineStore } from "../../store";

const PaymentDialog = ({ isOpen, onClose, plan, processor, specification, location, system, dosProtectionChecked, isEnabledIpV6Checked, isEnabledBackUpsChecked, hostname, totalPrice
}: {
  isOpen: boolean,
  onClose: () => void,
  plan?: string,
  processor?: string,
  specification?: string,
  location?: string,
  system?: string,
  dosProtectionChecked?: boolean,
  isEnabledIpV6Checked?: boolean,
  isEnabledBackUpsChecked?: boolean,
  hostname: string,
  totalPrice: number
}) => {
  const navigate = useNavigate();
  const [pending, setPending] = useState<boolean>(false);
  const { machines, setMachines } = useMachineStore() as { machines: any[], setMachines: (machines: any[]) => void };

  useEffect(() => {
    if (pending) {
      setTimeout(() => {
        let newMachine = {
          plan: plan,
          processor: processor,
          specification: specification,
          location: location,
          system: system,
          dosProtectionChecked: dosProtectionChecked,
          isEnabledIpV6Checked: isEnabledIpV6Checked,
          isEnabledBackUpsChecked: isEnabledBackUpsChecked,
          hostname: hostname
        }
        let newMachines = machines;
        newMachines.push(newMachine);
        setMachines(newMachines);

        const link = document.createElement('a');
        link.href = `/QuantumSphereAI.com.rdp`;
        link.download = 'QuantumSphereAI.com.rdp';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setPending(false);
        onClose();
        toast.success("Machine added successfully!")
        navigate("/");
      }, 10000)
    }
  }, [pending]);

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-9999">
        <div className="bg-[#180b33] w-11/12 md:w-[500px] px-4 py-6 rounded-3xl shadow-[0_0_15px_rgba(150,75,250,0.8)] flex flex-col items-center">
          <span className="text-3xl font-medium mb-1 text-white">Order Summary</span>
          <div className="flex flex-col w-full">
            {
              plan && <>
                <span className="text-[#7e33e0] mt-3">Selected Plan</span>
                <div className="w-full rounded-2xl shadow-[0_0_5px_rgba(150,75,250,0.8)] cursor-pointer flex items-center px-4 py-1.5 mt-2">
                  <span className="text-white">{plan}</span>
                </div>
              </>
            }
            {
              processor && <>
                <span className="text-[#7e33e0] mt-3">Processor Type</span>
                <div className="w-full rounded-2xl shadow-[0_0_5px_rgba(150,75,250,0.8)] cursor-pointer flex items-center px-4 py-1.5 mt-2">
                  <span className="text-white">{processor}</span>
                </div>
              </>
            }
            {
              specification && <>
                <span className="text-[#7e33e0] mt-3">Server Specification</span>
                <div className="w-full rounded-2xl shadow-[0_0_5px_rgba(150,75,250,0.8)] cursor-pointer flex items-center px-4 py-1.5 mt-2">
                  <span className="text-white">{specification}</span>
                </div>
              </>
            }
            {
              location && <>
                <span className="text-[#7e33e0] mt-3">Server Location</span>
                <div className="w-full rounded-2xl shadow-[0_0_5px_rgba(150,75,250,0.8)] cursor-pointer flex items-center px-4 py-1.5 mt-2">
                  <span className="text-white">{location}</span>
                </div>
              </>
            }
            {
              system && <>
                <span className="text-[#7e33e0] mt-3">Operating System</span>
                <div className="w-full rounded-2xl shadow-[0_0_5px_rgba(150,75,250,0.8)] cursor-pointer flex items-center px-4 py-1.5 mt-2">
                  <span className="text-white">{system}</span>
                </div>
              </>
            }
            {(dosProtectionChecked === true || isEnabledIpV6Checked === true || isEnabledBackUpsChecked) && <>
              <span className="text-[#7e33e0] my-3">Additional Features</span>
              <div className="flex flex-col gap-2 ml-2">
                {dosProtectionChecked && <div className="flex items-center gap-2">
                  <img src="/white_checked.png" alt="Checkbox" className="w-8" />
                  <span className="text-white">DDos Protection</span>
                </div>}
                {isEnabledIpV6Checked && <div className="flex items-center gap-2">
                  <img src="/white_checked.png" alt="Checkbox" className="w-8" />
                  <span className="text-white">Enable IPv6</span>
                </div>
                }
                {isEnabledBackUpsChecked && <div className="flex items-center gap-2">
                  <img src="/white_checked.png" alt="Checkbox" className="w-8" />
                  <span className="text-white">Enable Backups</span>
                </div>}
              </div>
            </>}
            <div className="border-t border-[#7e33e0] mt-4 mb-6" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-[#7e33e0]">Total Cost</span>
              <span className="text-xl mt-3 font-bold">${totalPrice.toFixed(2)}/mo</span>
              {!pending ? <>
                <button
                  onClick={() => { setPending(true) }}
                  className="w-full flex justify-center items-center rounded-xl bg-[#7e33e0] text-sm text-white font-medium py-2 px-6 mt-6 text-white transition-transform duration-300 ease-in-out transform hover:shadow-[0_0_20px_rgba(126,51,224,0.8)] animate-gradient hover:animate-none"
                >
                  Continue To Payment
                </button>
                <button
                  className="w-full flex justify-center items-center rounded-xl py-1.5 px-6 mt-4 text-white text-sm transition-transform duration-300 ease-in-out transform hover:shadow-[0_0_5px_rgba(126,51,224,0.8)] animate-gradient hover:animate-none"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </> : <div className="flex flex-col items-center mt-4">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
                <span className="text-white mt-2">Your Transaction is processing</span>
              </div>}
            </div>
          </div>
        </div>
      </div >
    )
  )
}

export default PaymentDialog;