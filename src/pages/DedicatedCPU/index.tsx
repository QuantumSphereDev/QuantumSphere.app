import { useState } from "react";

import Dropdown from "../../common/Dropdown";
import CountryDropdown from "../../common/CountryDropdown";
import { Country, SharedCPUCountries } from "../../lib/country";
import PaymentDialog from "../../components/PaymentDialog";
import { calculatePrice } from "../../lib/price";

const DedicatedCPU = () => {
  const plans = ["General Purpose Optimized Cloud", "CPU Optimized Cloud", "Memory Optimized Cloud", "Storage Optimized Cloud"];
  const specifications = ["AMD | 30 GB NVMe 1 vCPUs", "AMD | 50 GB NVMe 2 vCPUs", "AMD | 80 GB NVMe 4 vCPUs", "AMD | 160 GB NVMe 8 vCPUs", "AMD | 320 GB NVMe 16 vCPUs", "AMD | 480 GB NVMe 24 vCPUs", "AMD | 640 GB NVMe 32 vCPUs", "AMD | 768 GB NVMe 40 vCPUs", "AMD | 960 GB NVMe 64 vCPUs", "AMD | 1280 GB NVMe 96 vCPUs"];
  const systems = ["Windows 2016 Standard x64", "Windows 2019 Standard x64", "Ubuntu 20.04 LTS x64", "Fedora CoreOS Stable", "Fedora CoreOS Next", "Fedora CoreOS Testing", "FreeBSD 13 x64", "Rocky Linux x64", "AlmaLinux x64", "Debian 11 x64 (bullseye)", "Windows 2022 Standard x64", "Windows Core 2022 Standard x64", "Windows Core 2016 Standard x64", "Windows Core 2019 Standard x64", "Arch Linux x64", "CentOS 9 Stream x64", "Ubuntu 22.04 LTS x64", "Windows Core 2019 Datacenter x64", "Windows Core 2022 Datacenter x64", "Windows 2019 Datacenter x64", "Windows 2022 Datacenter x64", "AlmaLinux 9 x64", "Rocky Linux 9 x64", "Flatcar Container Linux LTS x64", "Alpine Linux x64", "Flatcar Container Linux Stable x64", "Flatcar Container Linux Beta x64", "Flatcar Container Linux Alpha x64", "Debian 12 x64 (bookworm)", "openSUSE Leap 15 x64", "Fedora 39 x64", "OpenBSD 7.4 x64", "FreeBSD 14 x64", "Fedora 40 x64", "Ubuntu 24.04 LTS x64", "OpenBSD 7.5 x64"];

  const [plan, setPlan] = useState<string>("");
  const [specification, setSpecification] = useState<string>("");
  const [country, setCountry] = useState<Country | null>(null);
  const [system, setSystem] = useState<string>("");
  const [dosProtectionChecked, setDosProtectionChecked] = useState<boolean>(false);
  const [isEnabledIpV6Checked, setEnableIpV6Checked] = useState<boolean>(false);
  const [isEnabledBackUpsChecked, setIsEnabledBackUpsChecked] = useState<boolean>(false);
  const [hostname, setHostname] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isOpenDlg, setOpenDlg] = useState<boolean>(false);

  const handlePlanItemClick = (item: string) => {
    setPlan(item);
  }

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
      <span className="text-white text-2xl">Cloud Compute / Dedicated CPU</span>
      <div className="h-full rounded-3xl shadow-[0_0_15px_rgba(150,75,250,0.8)] mt-5 mb-10 flex flex-col px-5 py-4">
        <span className="text-[#9ca3af] text-lg font-medium">Select the plan *</span>
        <Dropdown
          className="mt-4"
          items={plans}
          selectedItem={plan}
          itemClick={handlePlanItemClick}
        />

        {
          plan !== "" && <div className="mt-4 flex flex-col">
            <span className="text-[#9ca3af] text-lg font-medium">Select the server specification *</span>
            <Dropdown
              className="mt-4"
              items={specifications}
              selectedItem={specification}
              itemClick={handleSpecificationItemClick}
            />
          </div>
        }

        {
          specification !== "" && <div className="mt-4 flex flex-col">
            <span className="text-[#9ca3af] text-lg font-medium">Choose the Country(Data Center) *</span>
            <CountryDropdown
              className="mt-4"
              items={SharedCPUCountries}
              country={country}
              itemClick={handleCountryItemClick}
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
              dlgClassName="fixed top-[100px] max-w-[1400px] max-h-[780px] overflow-y-auto no-scrollbar"
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
                  type: 1,
                  plan: plan,
                  specification,
                  location: country?.title,
                  system,
                  dosProtectionChecked,
                  isEnabledIpV6Checked,
                  isEnabledBackUpsChecked
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
        plan={plan}
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

export default DedicatedCPU;