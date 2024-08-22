import React from "react";

const ServiceIcon = ({ icon, text }) => (
  <div className="flex flex-col items-center hover:underline cursor-pointer">
    <div className="bg-red-600 rounded-full p-4 mb-2 hover:bg-red-500 duration-150">
      {icon}
    </div>
    <span className="text-center text-sm">{text}</span>
  </div>
);

const OurServices = () => {
  const services = [
    { icon: <ShieldIcon />, text: "Extended Warranty" },
    { icon: <TruckIcon />, text: "Delivery with Installation" },
    { icon: <RecycleIcon />, text: "Trade-in" },
    { icon: <ScreenIcon />, text: "Screen Protector" },
    { icon: <TvIcon />, text: "TV Calibration" },
    { icon: <WrenchIcon />, text: "Post-warranty Repairs" },
  ];

  return (
    <div className=" min-w-[320px] mx-auto p-6 max-w-[1283px] w-full">
      <div className="border-t-1 shadow-bottom-only shadow-black h-[3px] mb-12"></div>
      <h1 className="text-xl mt-5 sm:text-2xl font-roboto text-gray-800 font-semibold mb-4">
        OUR SERVICES
      </h1>

      <p className="mb-4">
        KamShop supports the customer at every stage: from purchase, through
        transport, installation, to repair and recycling.
      </p>

      <p className="text-red-600 hover:underline mb-8 inline-block cursor-pointer">
        &gt; Check all services
      </p>

      <h2 className="text-lg mt-5 sm:text-xl font-roboto text-gray-800 font-semibold mb-4">
        Services for You
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {services.map((service, index) => (
          <ServiceIcon key={index} icon={service.icon} text={service.text} />
        ))}
      </div>
    </div>
  );
};

// Przykładowe komponenty ikon (możesz je zastąpić własnymi komponentami SVG)
const ShieldIcon = () => (
  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
  </svg>
);

const TruckIcon = () => (
  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
  </svg>
);

const RecycleIcon = () => (
  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
      clipRule="evenodd"
    />
  </svg>
);

const ScreenIcon = () => (
  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
      clipRule="evenodd"
    />
  </svg>
);

const TvIcon = () => (
  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
      clipRule="evenodd"
    />
  </svg>
);

const WrenchIcon = () => (
  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L13.586 6H12a1 1 0 110-2h1.586l-2.293-2.293A1 1 0 0112 2z"
      clipRule="evenodd"
    />
  </svg>
);

export default OurServices;
