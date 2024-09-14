export const sharedCPUPrices = {
  intel: {
    "Intel - 25 GB NVMe 1 vCPUs": 10,
    "Intel - 50 GB NVMe 1 vCPUs": 20,
    "Intel - 60 GB NVMe 2 vCPUs": 30,
    "Intel - 100 GB NVMe 2 vCPUs": 40,
    "Intel - 180 GB NVMe 4 vCPUs": 50,
    "Intel - 260 GB NVMe 4 vCPUs": 60,
    "Intel - 350 GB NVMe 8 vCPUs": 70,
    "Intel - 500 GB NVMe 12 vCPUs": 80
  },
  amd: {
    "AMD - 25 GB NVMe 1 vCPUs": 9,
    "AMD - 50 GB NVMe 1 vCPUs": 18,
    "AMD - 60 GB NVMe 2 vCPUs": 27,
    "AMD - 100 GB NVMe 2 vCPUs": 36,
    "AMD - 180 GB NVMe 4 vCPUs": 45,
    "AMD - 260 GB NVMe 4 vCPUs": 54,
    "AMD - 350 GB NVMe 8 vCPUs": 63,
    "AMD - 500 GB NVMe 12 vCPUs": 72
  }
}

export const dedicatedCPUPlans = {
  "General Purpose Optimized Cloud": 13,
  "CPU Optimized Cloud": 26,
  "Memory Optimized Cloud": 39,
  "Storage Optimized Cloud": 52
}

export const dedicatedCPUPrices = {
  "AMD | 30 GB NVMe 1 vCPUs": 11,
  "AMD | 50 GB NVMe 2 vCPUs": 22,
  "AMD | 80 GB NVMe 4 vCPUs": 33,
  "AMD | 160 GB NVMe 8 vCPUs": 44,
  "AMD | 320 GB NVMe 16 vCPUs": 55,
  "AMD | 480 GB NVMe 24 vCPUs": 66,
  "AMD | 640 GB NVMe 32 vCPUs": 77,
  "AMD | 768 GB NVMe 40 vCPUs": 88,
  "AMD | 960 GB NVMe 64 vCPUs": 99,
  "AMD | 1280 GB NVMe 96 vCPUs": 110
}

export const bareMetals = {
  intel: {
    "INTEL E-2288G | 8 Core 128 GB RAM 2x1920 GB NVMe": 8,
    "INTEL E-2286G | 6 Core 32 GB RAM 2x960 GB SSD": 16,
    "INTEL E-2388G | 8 Core 128 GB RAM 2x1920 GB NVMe": 24
  },
  amd: {
    "AMD E-2288G | 8 Core 128 GB RAM 2x1920 GB NVMe": 12,
    "AMD E-2286G | 6 Core 32 GB RAM 2x960 GB SSD": 24,
    "AMD EPYC 7443P | 24 Core 256 GB RAM 2x480 GB SSD": 36,
    "AMD E-2388G | 8 Core 128 GB RAM 2x1920 GB NVMe": 48,
    "AMD EPYC 9254 | 24 Core 384 GB RAM 2x480 GB SSD": 60
  }
}

export const cloudGPUPrices = {
  "NVIDIA A16 - 2 vCPUs 8 GB RAM 50 GB NVMe": 9,
  "NVIDIA A100 - 1 vCPUs 6 GB RAM 70 GB NVMe": 18,
  "NVIDIA A16 - 2 vCPUs 16 GB RAM 80 GB NVMe": 27,
  "NVIDIA A40 - 1 vCPUs 5 GB RAM 90 GB NVMe": 36,
  "NVIDIA A100 - 1 vCPUs 12 GB RAM 140 GB NVMe": 45,
  "NVIDIA A100 - 2 vCPUs 15 GB RAM 170 GB NVMe": 54,
  "NVIDIA A16 - 3 vCPUs 32 GB RAM 170 GB NVMe": 63,
  "NVIDIA A40 - 2 vCPUs 10 GB RAM 180 GB NVMe": 72,
  "NVIDIA A100 - 3 vCPUs 30 GB RAM 350 GB NVMe": 81,
  "NVIDIA A16 - 6 vCPUs 64 GB RAM 350 GB NVMe": 90,
  "NVIDIA A40 - 4 vCPUs 20 GB RAM 360 GB NVMe": 99,
  "NVIDIA A40 - 6 vCPUs 30 GB RAM 550 GB NVMe": 108,
  "NVIDIA A100 - 6 vCPUs 60 GB RAM 700 GB NVMe": 117,
  "NVIDIA A16 - 12 vCPUs 128 GB RAM 700 GB NVMe": 126,
  "NVIDIA A40 - 12 vCPUs 60 GB RAM 1110 GB NVMe": 135,
  "NVIDIA A40 - 24 vCPUs 256 GB RAM 1200 GB NVMe": 144
}

export const countryPriceAdjustments = {
  "USA": 0,
  "Europe": 5,
  "Asia": 7,
  "Australia": 8,
  "Canada": 4,
  "Mexico": 3,
  "South America": 6,
  "Africa": 10,
  "Middle East": 9
}

export const systemPrices = {
  "Windows 2016 Standard x64": 5,
  "Windows 2019 Standard x64": 5,
  "Ubuntu 20.04 LTS x64": 0,
  "Fedora CoreOS Stable": 0,
  "Fedora CoreOS Next": 0,
  "Fedora CoreOS Testing": 0,
  "FreeBSD 13 x64": 2,
  "Rocky Linux x64": 0,
  "AlmaLinux x64": 0,
  "Debian 11 x64 (bullseye)": 0,
  "Windows 2022 Standard x64": 5,
  "Windows Core 2022 Standard x64": 5,
  "Windows Core 2016 Standard x64": 5,
  "Windows Core 2019 Standard x64": 5,
  "Arch Linux x64": 0,
  "CentOS 9 Stream x64": 0,
  "Ubuntu 22.04 LTS x64": 0,
  "Windows Core 2019 Datacenter x64": 10,
  "Windows Core 2022 Datacenter x64": 10,
  "Windows 2019 Datacenter x64": 10,
  "Windows 2022 Datacenter x64": 10,
  "AlmaLinux 9 x64": 0,
  "Rocky Linux 9 x64": 0,
  "Flatcar Container Linux LTS x64": 0,
  "Alpine Linux x64": 0,
  "Flatcar Container Linux Stable x64": 0,
  "Flatcar Container Linux Beta x64": 0,
  "Flatcar Container Linux Alpha x64": 0,
  "Debian 12 x64 (bookworm)": 0,
  "openSUSE Leap 15 x64": 0,
  "Fedora 39 x64": 0,
  "OpenBSD 7.4 x64": 2,
  "FreeBSD 14 x64": 2,
  "Fedora 40 x64": 0,
  "Ubuntu 24.04 LTS x64": 0,
  "OpenBSD 7.5 x64": 2
}

export const additionalFeaturePrices = {
  dosProtection: 5,
  ipv6: 3,
  backups: 7
};

export const getCountryPriceAdjustment = (countryTitle: string) => {
  if (
    [
      "New Jersey",
      "Chicago",
      "Dallas",
      "Seattle",
      "Los Angeles",
      "Atlanta",
      "Silicon Valley",
      "Miami",
      "Honolulu"
    ].includes(countryTitle)
  ) {
    return countryPriceAdjustments["USA"];
  } else if (
    [
      "Amsterdam",
      "London",
      "Frankfurt",
      "Paris",
      "Warsaw",
      "Madrid",
      "Stockholm",
      "Manchester"
    ].includes(countryTitle)
  ) {
    return countryPriceAdjustments["Europe"];
  } else if (
    [
      "Tokyo",
      "Seoul",
      "Singapore",
      "Mumbai",
      "Bangalore",
      "Delhi NCR",
      "Osaka"
    ].includes(countryTitle)
  ) {
    return countryPriceAdjustments["Asia"];
  } else if (["Sydney", "Melbourne"].includes(countryTitle)) {
    return countryPriceAdjustments["Australia"];
  } else if (["Toronto"].includes(countryTitle)) {
    return countryPriceAdjustments["Canada"];
  } else if (["Mexico City"].includes(countryTitle)) {
    return countryPriceAdjustments["Mexico"];
  } else if (["Santiago"].includes(countryTitle)) {
    return countryPriceAdjustments["South America"];
  } else if (["Johannesburg"].includes(countryTitle)) {
    return countryPriceAdjustments["Africa"];
  } else if (["Tel Aviv"].includes(countryTitle)) {
    return countryPriceAdjustments["Middle East"];
  }
  return 0;
};

export const calculatePrice = ({
  type,
  plan,
  processor,
  specification,
  location,
  system,
  dosProtectionChecked,
  isEnabledIpV6Checked,
  isEnabledBackUpsChecked,
}: {
  type: number,
  plan?: string,
  processor?: 'intel' | 'amd',
  specification?: string,
  location?: string,
  system?: string,
  dosProtectionChecked?: boolean,
  isEnabledIpV6Checked?: boolean,
  isEnabledBackUpsChecked?: boolean
}) => {
  let totalPrice = 0;

  // Base Price
  if (processor && specification) {
    if (type === 0) {
      totalPrice += sharedCPUPrices[processor][specification as keyof typeof sharedCPUPrices[typeof processor]];
    } else if (type === 1) {
      totalPrice += dedicatedCPUPlans[plan as keyof typeof dedicatedCPUPlans];
      totalPrice += dedicatedCPUPrices[specification as keyof typeof dedicatedCPUPrices];
    } else if (type === 2) {
      totalPrice += bareMetals[processor][specification as keyof typeof bareMetals[typeof processor]];
    }
  }

  else {
    if (type === 3) {
      totalPrice += cloudGPUPrices[specification as keyof typeof cloudGPUPrices];
    }
  }

  // Additional Features
  if (dosProtectionChecked) totalPrice += additionalFeaturePrices.dosProtection;
  if (isEnabledIpV6Checked) totalPrice += additionalFeaturePrices.ipv6;
  if (isEnabledBackUpsChecked) totalPrice += additionalFeaturePrices.backups;

  // Location-based pricing
  if (location) totalPrice += getCountryPriceAdjustment(location);

  // Operating System pricing
  if (system) totalPrice += systemPrices[system as keyof typeof systemPrices] || 0;

  return totalPrice;

}