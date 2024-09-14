import { useEffect, useRef, useState } from "react"
import { Country } from "../lib/country";

const CountryDropdown = ({ items, itemClick, country, className, dlgClassName }: {
  items: Country[],
  itemClick: (item: Country) => void,
  country: Country | null,
  className: string,
  dlgClassName?: string
}) => {
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isExpanded && dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
        setExpanded(false);
      }
    }

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <div className={`relative inline-block text-left ${className}`}>
      <div
        className="w-full min-h-[50px] rounded-2xl shadow-[0_0_5px_rgba(150,75,250,0.8)] cursor-pointer flex items-center gap-2 px-4"
        onClick={() => { setExpanded(!isExpanded) }}
        style={{ userSelect: 'none' }}
      >
        {country?.flag && <img src={country.flag} alt="Country Flag" className="w-5" />}
        {country?.title && <span className="text-[#7f26f3]">{country.title}</span>}
      </div>
      {isExpanded && <div
        ref={dropDownRef}
        className={`group w-full z-9999 rounded-2xl bg-[#30184f] cursor-pointer no-scrollbar ${dlgClassName ? dlgClassName : "fixed top-[100px] max-w-[1400px] max-h-[780px] overflow-y-auto"}`}>
        {items?.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 text-white px-4 py-2 hover:bg-[#44197c] ${index === 0 ? "rounded-t-2xl" : index === items?.length - 1 ? "rounded-b-2xl" : ""}`}
            onClick={() => {
              itemClick(item);
              setExpanded(false);
            }}
          >
            <img src={item.flag} alt="Country Flag" className="w-4" />
            {item.title}
          </div>
        ))}
      </div>}
    </div>
  )
}

export default CountryDropdown