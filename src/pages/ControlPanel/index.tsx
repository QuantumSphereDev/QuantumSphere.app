import { useMachineStore, useWalletStore } from "../../store";

const ControlPanel = () => {

  const { balance } = useWalletStore() as { balance: number };
  const { machines } = useMachineStore() as { machines: any[] };

  return (
    <div className="w-full h-full flex flex-col px-8 py-6">
      <span className="text-xl font-medium text-white">Dashboard</span>
      <div className="w-fit rounded-2xl shadow-[0_0_10px_rgba(150,75,250,0.8)] mt-5 flex flex-col px-5 py-5">
        <span className="text-md font-medium">Current Balance</span>
        <div className="flex mt-2">
          <span className="text-2xl text-white">${parseFloat(String(balance * 2357.76)).toFixed(2)}</span>
          <button
            className="flex justify-center items-center rounded-lg bg-[#7e33e0] px-6 py-1 ml-5 text-sm text-white transition-transform duration-300 ease-in-out transform hover:scale-90"
          >
            View
          </button>
        </div>
      </div>
      {machines?.length > 0 ? <div>
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0 border border-[#94a3b8] shadow-[0_0_5px_rgba(150,75,250,0.8)] mt-6">
            <thead>
              <tr className="text-white">
                <th className="border-r border-[#94a3b8] px-2 py-3">Processor</th>
                <th className="border-r border-[#94a3b8] px-2 py-3">Plan</th>
                <th className="border-r border-[#94a3b8] px-2 py-3">Specification</th>
                <th className="border-r border-[#94a3b8] px-2 py-3">Location</th>
                <th className="border-r border-[#94a3b8] px-2 py-3">System</th>
                <th colSpan={3} className="border-r border-[#94a3b8] px-2 py-3">Additional Features</th>
                <th className="px-2 py-3">Hostname</th>
              </tr>
              <tr>
                <th className="border-r border-[#94a3b8] px-2 py-3"></th>
                <th className="border-r border-[#94a3b8] px-2 py-3"></th>
                <th className="border-r border-[#94a3b8] px-2 py-3"></th>
                <th className="border-r border-[#94a3b8] px-2 py-3"></th>
                <th className="border-r border-[#94a3b8] px-2 py-3"></th>
                <th className="border-r border-t border-[#94a3b8] px-2 py-2 text-center text-white text-sm">DDos Protection</th>
                <th className="border-r border-t border-[#94a3b8] px-2 py-2 text-center text-white text-sm">Enable IPv6</th>
                <th className="border-r border-t border-[#94a3b8] px-2 py-2 text-center text-white text-sm">Enable Backups</th>
                <th className="border-t border-[#94a3b8] px-2 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {machines?.map((machine: any, index: number) => (
                <tr key={index}>
                  <td className="border-r border-t border-[#94a3b8] px-2 py-3">{machine.processor}</td>
                  <td className="border-r border-t border-[#94a3b8] px-2 py-3">{machine.plan}</td>
                  <td className="border-r border-t border-[#94a3b8] px-2 py-3">{machine.specification}</td>
                  <td className="border-r border-t border-[#94a3b8] px-2 py-3">{machine.location}</td>
                  <td className="border-r border-t border-[#94a3b8] px-2 py-3">{machine.system}</td>
                  <td className="border-r border-t border-[#94a3b8] text-center">
                    {machine.dosProtectionChecked && <img src="/white_checked.png" alt="Checked" className="w-6 inline-block" />}
                  </td>
                  <td className="border-r border-t border-[#94a3b8] text-center">
                    {machine.isEnabledIpV6Checked && <img src="/white_checked.png" alt="Checked" className="w-6 inline-block" />}
                  </td>
                  <td className="border-r border-t border-[#94a3b8] text-center">
                    {machine.isEnabledBackUpsChecked && <img src="/white_checked.png" alt="Checked" className="w-6 inline-block" />}
                  </td>
                  <td className="border-t border-[#94a3b8] px-2 py-3">{machine.hostname}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> : <div className="w-full h-[200px] rounded-2xl shadow-[0_0_10px_rgba(150,75,250,0.8)] mt-8 flex justify-center items-center">
        <span>No data to display</span>
      </div>
      }
    </div >
  );
}

export default ControlPanel;