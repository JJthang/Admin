export const TRANSITIONS = {
  toggleable: {
    enterFromClass: "max-h-0",
    enterActiveClass: "overflow-hidden transition-all duration-500 ease-in-out",
    enterToClass: "max-h-40	",
    leaveFromClass: "max-h-40",
    leaveActiveClass: "overflow-hidden transition-all duration-500 ease-in",
    leaveToClass: "max-h-0",
  },
};
export const MyDesignSystem = {
  fileupload: {
    input: "hidden",
    buttonbar: {
      class: [
        "flex flex-wrap justify-between",
        "bg-gray-50 dark:bg-gray-800 p-5 border border-solid border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 rounded-tr-lg rounded-tl-lg gap-2 border-b-0",
      ],
    },
    chooseButton: {
      class: [
        "text-white bg-[#EC4DBC] p-[4px] px-2 rounded-md text-base",
        "overflow-hidden relative",
      ],
    },
    chooseIcon: "mr-2 inline-block",
    chooseButtonLabel: "flex-1 font-bold",
    uploadbutton: {
      icon: "mr-2",
    },
    cancelbutton: {
      icon: "mr-2",
    },
    content: {
      class: [
        "relative",
        "bg-white dark:bg-gray-900 p-8 border border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 rounded-b-lg",
      ],
    },
    file: {
      class: [
        "flex items-center flex-wrap",
        "p-4 border border-gray-300 dark:border-blue-900/40 rounded gap-2 mb-2",
        "last:mb-0",
      ],
    },
    thumbnail: "shrink-0",
    fileName: "mb-2",
    fileSize: "mr-2",
    uploadicon: "mr-2",
  },
  panelmenu: {
    root: "gap-3",
    panel: "mb-1 my-2",
    header: {
      class: ["outline-none"],
    },
    headercontent: {
      class: [
        "dark:border-blue-900/40 text-white dark:text-white/80  dark:bg-gray-900 rounded-md transition-shadow duration-200",
        "hover:bg-[#ffffff0d] dark:hover:bg-[#ffffff0d]  hover:text-gray dark:hover:text-white/80",
      ],
    },
    headeraction: {
      class: [
        "flex items-center select-none cursor-pointer relative no-underline text-[14px] text-white",
        "text-white dark:text-white/80 p-2 font-bold",
      ],
    },
    submenuicon: "mr-2",
    headericon: "mr-2",
    menucontent:
      "py-1 text-[14px] dark:border-blue-900/40 bg-[#ffffff0d] dark:bg-[#ffffff0d]text-gray-700 dark:text-white/80 rounded-t-none rounded-br-md rounded-bl-md",
    menu: {
      class: ["outline-none", "m-0 p-0 list-none"],
    },
    content: ({ context }) => ({
      class: [
        "text-gray-700 dark:text-white/80 transition-shadow duration-200 border-none rounded-none",
        "hover:bg-[#ffffff0d] hover:text-gray-700 dark:hover:text-white/80 dark:hover:bg-gray-800/80", //Hover
      ],
    }),
    action: {
      class: [
        "text-gray-700 dark:text-white/80 py-3 px-5 select-none text-white",
        "flex items-center cursor-pointer no-underline relative overflow-hidden",
      ],
    },
    icon: "mr-2",
    submenu: "p-0 pl-4 m-0 list-none",
    transition: TRANSITIONS.toggleable,
  },
};
