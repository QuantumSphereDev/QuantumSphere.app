import { useEffect, useRef, useState } from "react"

const Dropdown = ({ items, itemClick, selectedItem, className, dlgClassName }: {
  items: string[],
  itemClick: (item: string) => void,
  selectedItem: string,
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
        className="w-full min-h-[50px] rounded-2xl shadow-[0_0_5px_rgba(150,75,250,0.8)] cursor-pointer flex items-center px-4"
        onClick={() => { setExpanded(!isExpanded) }}
        style={{ userSelect: 'none' }}
      >
        <span className="text-[#7f26f3]">{selectedItem}</span>
      </div>
      {isExpanded && <div
        ref={dropDownRef}
        className={`group w-full z-99 rounded-2xl bg-[#30184f] cursor-pointer ${dlgClassName ? dlgClassName : "absolute top-[55px]"}`}>
        {items?.map((item, index) => (
          <div
            key={index}
            className={`text-white px-4 py-2 hover:bg-[#44197c] ${index === 0 ? "rounded-t-2xl" : index === items?.length - 1 ? "rounded-b-2xl" : ""}`}
            onClick={() => {
              itemClick(item);
              setExpanded(false);
            }}
          >
            {item}
          </div>
        ))}
      </div>}
    </div >
  )
}

export default Dropdown