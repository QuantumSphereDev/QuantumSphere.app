import { useState } from "react";

import Dropdown from "../../common/Dropdown";
import { Country, CloudGPUCountries } from "../../lib/country";
import CountryDropdown from "../../common/CountryDropdown";
import PaymentDialog from "../../components/PaymentDialog";
import { calculatePrice } from "../../lib/price";

const CloudGPU = () => {
  const specifications = ["NVIDIA A16 - 2 vCPUs 8 GB RAM 50 GB NVMe", "NVIDIA A100 - 1 vCPUs 6 GB RAM 70 GB NVMe", "NVIDIA A16 - 2 vCPUs 16 GB RAM 80 GB NVMe", "NVIDIA A40 - 1 vCPUs 5 GB RAM 90 GB NVMe", "NVIDIA A100 - 1 vCPUs 12 GB RAM 140 GB NVMe", "NVIDIA A100 - 2 vCPUs 15 GB RAM 170 GB NVMe", "NVIDIA A16 - 3 vCPUs 32 GB RAM 170 GB NVMe", "NVIDIA A40 - 2 vCPUs 10 GB RAM 180 GB NVMe", "NVIDIA A100 - 3 vCPUs 30 GB RAM 350 GB NVMe", "NVIDIA A16 - 6 vCPUs 64 GB RAM 350 GB NVMe", "NVIDIA A40 - 4 vCPUs 20 GB RAM 360 GB NVMe", "NVIDIA A40 - 6 vCPUs 30 GB RAM 550 GB NVMe", "NVIDIA A100 - 6 vCPUs 60 GB RAM 700 GB NVMe", "NVIDIA A16 - 12 vCPUs 128 GB RAM 700 GB NVMe", "NVIDIA A40 - 12 vCPUs 60 GB RAM 1110 GB NVMe", "NVIDIA A40 - 24 vCPUs 256 GB RAM 1200 GB NVMe"];
  const systems = ["Ubuntu 20.04 LTS x64", "Rocky Linux x64", "AlmaLinux x64", "Debian 11 x64 (bullseye)", "Arch Linux x64", "CentOS 9 Stream x64", "Ubuntu 22.04 LTS x64", "Windows Core 2019 Datacenter x64", "Windows Core 2022 Datacenter x64", "Windows 2019 Datacenter x64", "Windows 2022 Datacenter x64", "AlmaLinux 9 x64", "Rocky Linux 9 x64", "Debian 12 x64 (bookworm)", "Ubuntu 24.04 LTS x64"];

  const [processor, setProcessor] = useState<string>("");
  const [specification, setSpecification] = useState<string>("");
  const [country, setCountry] = useState<Country | null>(null);
  const [system, setSystem] = useState<string>("");
  const [dosProtectionChecked, setDosProtectionChecked] = useState<boolean>(false);
  const [isEnabledIpV6Checked, setEnableIpV6Checked] = useState<boolean>(false);
  const [isEnabledBackUpsChecked, setIsEnabledBackUpsChecked] = useState<boolean>(false);
  const [hostname, setHostname] = useState<string>("");
  const [isOpenDlg, setOpenDlg] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const handleSpecificationItemClick = (item: string) => {
    setSpecification(item);
  }

  const handleCountryItemClick = (item: Country) => {
    setCountry(item);
  }

  const handleSystemItemClick = (item: string) => {
    setSystem(item);
  }

  return (
    <div className="w-full min-h-full flex flex-col px-8 py-6">
      <span className="text-xl font-medium text-[#9ca3af]">Products</span>
      <span className="text-white text-2xl">Cloud GPU</span>
      <div className="h-full rounded-3xl shadow-[0_0_15px_rgba(150,75,250,0.8)] mt-5 mb-10 flex flex-col px-5 py-4">
        <span className="text-[#9ca3af] text-lg font-medium">Select the processor type you want to deploy the server *</span>
        <div className="flex gap-5 mt-4">
          <div
            className="group w-[250px] h-[140px] shadow-[0_0_10px_rgba(150,75,250,0.8)] flex justify-center items-center rounded-2xl cursor-pointer"
            onClick={() => { setProcessor("nvidia") }}>
            <img src="/nvidia_gray.png" alt="Intel White" className="w-35 group-hover:hidden block" />
            <img src="/nvidia_pink.png" alt="Intel Pink" className="w-35 hidden group-hover:block" />
          </div>
        </div>

        {
          processor !== "" && <div className="mt-4 flex flex-col">
            <span className="text-[#9ca3af] text-lg font-medium">Select the server specification *</span>
            <Dropdown
              className="mt-4"
              items={specifications}
              selectedItem={specification}
              itemClick={handleSpecificationItemClick}
              dlgClassName="fixed top-[300px] max-w-[1400px] max-h-[570px] overflow-y-auto no-scrollbar"
            />
          </div>
        }

        {
          specification !== "" && <div className="mt-4 flex flex-col">
            <span className="text-[#9ca3af] text-lg font-medium">Choose the Country(Data Center) *</span>
            <CountryDropdown
              className="mt-4"
              items={CloudGPUCountries}
              country={country}
              itemClick={handleCountryItemClick}
              dlgClassName="mt-1 absolute"
            />
          </div>
        }

        {
          country !== null && <div className="mt-4 flex flex-col">
            <span className="text-[#9ca3af] text-lg font-medium">Choose Operating System *</span>
            <Dropdown
              className="mt-4"
              items={systems}
              selectedItem={system}
              itemClick={handleSystemItemClick}
              dlgClassName="fixed bottom-[20px] max-w-[1400px] max-h-[780px] overflow-y-auto no-scrollbar"
            />
          </div>
        }

        {
          system !== "" && (<>
            <div className="mt-6 flex flex-col">
              <span className="text-[#9ca3af] text-lg font-medium">Additional Features</span>
              <div className="flex flex-col gap-4 mt-4 ml-8">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setDosProtectionChecked(!dosProtectionChecked) }} style={{ userSelect: "none" }}>
                  <input
                    type="checkbox"
                    checked={dosProtectionChecked}
                    className="h-5 w-5 cursor-pointer"
                  />
                  <span className="text-white">DDos Protection</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setEnableIpV6Checked(!isEnabledIpV6Checked) }} style={{ userSelect: "none" }}>
                  <input
                    type="checkbox"
                    checked={isEnabledIpV6Checked}
                    className="h-5 w-5 text-green-500 border-gray-300 rounded focus:ring focus:ring-green-300 transition duration-200 ease-in-out hover:bg-gray-700 checked:bg-green-500 checked:border-transparent"
                  />
                  <span className="text-white">Enable IPV6</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setIsEnabledBackUpsChecked(!isEnabledBackUpsChecked) }} style={{ userSelect: "none" }}>
                  <input
                    type="checkbox"
                    checked={isEnabledBackUpsChecked}
                    className="h-5 w-5 text-green-500 border-gray-300 rounded focus:ring focus:ring-green-300 transition duration-200 ease-in-out hover:bg-gray-700 checked:bg-green-500 checked:border-transparent"
                  />
                  <span className="text-white">Enable Backups</span>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              <span className="text-[#9ca3af] text-lg font-medium">Hostname</span>
              <input
                type="text"
                value={hostname}
                onChange={(e) => { setHostname(e.target.value) }}
                className="min-h-[45px] rounded-xl shadow-[0_0_10px_rgba(150,75,250,0.8)] flex items-center px-4 ml-4 outline-none" />
            </div>
          </>
          )
        }

        {
          hostname !== "" && <div className="flex flex-col">
            <div className="border-t border-white my-8" />
            <button
              onClick={() => {
                setOpenDlg(true);
                let price = calculatePrice({
                  type: 3,
                  specification,
                  location: country?.title,
                  system,
                  isEnabledIpV6Checked,
                });
                setTotalPrice(price);
              }}
              className="flex justify-center items-center rounded-xl bg-gradient-to-r from-[#491c89] to-[#7e33e0] py-2 px-6 font-medium text-white transition-transform duration-300 ease-in-out transform hover:shadow-[0_0_20px_rgba(126,51,224,0.8)] animate-gradient hover:animate-none">
              PROCEED ORDER
            </button>
          </div>
        }
      </div>
      <PaymentDialog
        isOpen={isOpenDlg}
        onClose={() => { setOpenDlg(false) }}
        processor={processor}
        specification={specification}
        location={country?.title}
        system={system}
        dosProtectionChecked={dosProtectionChecked}
        isEnabledIpV6Checked={isEnabledIpV6Checked}
        isEnabledBackUpsChecked={isEnabledBackUpsChecked}
        hostname={hostname}
        totalPrice={totalPrice} />
    </div>
  );
}

export default CloudGPU;