import React from "react";

export default function Banner() {
  return (
    <div className="bg-[#1493A4]">
      <div
        className="flex items-center justify-center p-1 lg:px-8"
        aria-label="Global"
      >
        <p>Call Us On:</p>
        <div className="flex flex-row items-center justify-between bg-white rounded-full py-2 px-4 ml-2">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#1493A4]"
          >
            <path
              d="M13.9141 10.6484C14.1328 10.7578 14.2969 11.0039 14.2969 11.2773C14.2969 11.3047 14.2969 11.3594 14.2969 11.4141L13.6406 14.2578C13.5586 14.5586 13.3125 14.75 13.0117 14.75C5.98438 14.75 0.324219 9.08984 0.324219 2.0625C0.324219 1.76172 0.515625 1.51562 0.816406 1.43359L3.66016 0.777344C3.71484 0.777344 3.76953 0.75 3.79688 0.75C4.07031 0.75 4.31641 0.914062 4.42578 1.16016L5.73828 4.22266C5.76562 4.30469 5.79297 4.38672 5.79297 4.46875C5.79297 4.6875 5.68359 4.87891 5.54688 4.98828L3.87891 6.35547C4.89062 8.48828 6.58594 10.1836 8.71875 11.1953L10.0859 9.52734C10.1953 9.39062 10.3867 9.28125 10.5781 9.28125C10.6875 9.28125 10.7695 9.30859 10.8516 9.33594L13.9141 10.6484Z"
              fill="currentColor"
            />
          </svg>
          <p className="text-[#1493A4] font-bold underline ml-4">306-782-1224</p>
        </div>
      </div>
    </div>
  );
}
