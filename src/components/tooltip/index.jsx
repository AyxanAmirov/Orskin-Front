import { useState } from "react";

function Tooltip({ label, children, bg = "black", color = "#D3D3D3" }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      <div
        className={`absolute bottom-[120%] left-1/2 -translate-x-1/2 z-50 whitespace-nowrap px-3 py-2 rounded-[6px] text-[13px] pointer-events-none transform transition-all duration-300 ${visible
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-90 translate-y-[4px]"
          }`}
        style={{
          backgroundColor: bg,
          color: color,
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        {label}
        <div
          className="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-[6px] border-transparent"
          style={{ borderTopColor: bg }}
        ></div>
      </div>
    </div>
  );
}

export default Tooltip;
