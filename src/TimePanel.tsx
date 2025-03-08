import React, { useState } from "react";
import { FaGear } from "react-icons/fa6";

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
  if (timeLang === "es") {
    return getCurrentDateES();
  } else if (timeLang === "en") {
    return getCurrentDateEN();
  }
  return "";
};

const TimePanel: React.FC = () => {
  const [dateLang, setDateLang] = useState<string>("es");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="task-pill">
        <div id="time">
          <p className="font-t1">{handleDateLang(dateLang)}</p>
        </div>
        <div id="time-settings">
          <button
            onClick={openModal}
            className="btn-rounded-purple bg-gray-800"
          >
            <FaGear className="text-sm" />
          </button>
        </div>
        <div className="relative">
          {isModalOpen && (
            <div
              onClick={closeModal}
              className="fixed inset-0 bg-gray-900 opacity-50"
            >
              <div
                className="pill-task borderlands"
                onClick={(e) => e.stopPropagation()}
              >
                <span>Language</span>
                <button
                  onClick={() => {
                    setDateLang("es");
                    closeModal();
                  }}
                >
                  Español
                </button>
                <button
                  onClick={() => {
                    setDateLang("en");
                    closeModal();
                  }}
                >
                  English
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TimePanel;
