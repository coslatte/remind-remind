import React, { useEffect, useState } from "react";
import { FaGear } from "react-icons/fa6";
import { IoLanguage } from "react-icons/io5";

const dateInfo: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const getCurrentDateEN = (): string => {
  const now = new Date();
  return now.toLocaleDateString("en-EN", dateInfo);
};

const getCurrentDateES = (): string => {
  const now = new Date();
  return now.toLocaleDateString("es-ES", dateInfo);
};

const handleDateLang = (timeLang: string): string => {
  if (timeLang === "es-ES") {
    return getCurrentDateES();
  } else if (timeLang === "en-EN") {
    return getCurrentDateEN();
  }
  return "";
};

const TimePanel: React.FC = () => {
  const [dateLang, setDateLang] = useState<string>("en-EN");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  // Time Logic
  // ----------
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getCurrentTime = () => {
    return currentTime.toLocaleTimeString(dateLang, {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Modal Logic
  // ----------
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center space-x-2">
      <div id="date-info" className="flex grow rounded-3xl bg-rose-200">
        <p id="date" className="font-baloo flex grow p-2 pl-4 text-3xl">
          {handleDateLang(dateLang)}
        </p>
        <p
          id="time"
          className="font-baloo flex items-center justify-center pr-4 text-2xl"
        >
          {getCurrentTime()}
        </p>
      </div>
      <div id="date-settings" className="flex-none">
        <button onClick={openModal} className="borderlands btn-rounded-rose">
          <FaGear className="text-sm" />
        </button>
      </div>
      <div className="relative">
        {isModalOpen && (
          <div
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            {/* Background del modal */}
            <div className="fixed inset-0 bg-rose-950/30"></div>

            {/* Modal */}
            <div
              className="borderlands relative z-50 w-60 space-y-4 rounded-3xl bg-rose-100 p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-evenly">
                <span className="font-baloo text-2xl font-medium">
                  Time Format
                </span>
                <IoLanguage />
              </div>
              <div className="flex flex-col space-y-2">
                <button
                  className="btn-rounded-rose borderlands font-baloo"
                  onClick={() => {
                    setDateLang("en-EN");
                    closeModal();
                  }}
                >
                  English
                </button>
                <button
                  className="btn-rounded-rose borderlands font-baloo"
                  onClick={() => {
                    setDateLang("es-ES");
                    closeModal();
                  }}
                >
                  Español
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimePanel;
