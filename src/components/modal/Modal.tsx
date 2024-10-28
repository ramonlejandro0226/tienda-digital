import React from "react";

interface Props {
  show: boolean;
  type: number;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalP = ({ type, setShow }: Props) => {
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-gray-900/10">
      <form action="" className="relative w-[20%] p-8 bg-white rounded-lg">
        <button
          className="absolute cursor-pointer top-2 right-3"
          type="button"
          onClick={() => setShow(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        {type === 1 &&(
            <h3 className="text-xl">En proceso</h3>
        )}
        {type === 2 && (
          <div className="flex flex-col items-center gap-1">
            <h3 className="mb-2 text-xl">Metodo de pago</h3>
            <div className="flex items-center mb-4">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-1"
                className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
              >
                Tarjeta de credito
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked
                id="default-radio-2"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
              >
                Tarjeta de debito
              </label>
            </div>
          </div>
        )}
        {type === 3 && (
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-xl">Direccion</h3>
            <input
              type="text"
              id="text"
              placeholder="Direccion"
              className="!border-gray-300 rounded-lg outline-none caret-blue-500 ring-0 focus:ring-0 focus:outline-none placeholder-gray-400/80"
            />
            <input
              type="text"
              id="text"
              placeholder="Casa"
              className="!border-gray-300 rounded-lg outline-none caret-blue-500 ring-0 focus:ring-0 focus:outline-none placeholder-gray-400/80"
            />
            <input
              type="text"
              id="text"
              placeholder="Sector"
              className="!border-gray-300 rounded-lg outline-none caret-blue-500 ring-0 focus:ring-0 focus:outline-none placeholder-gray-400/80"
            />
            <button type="button" className="h-[42px] font-medium text-white bg-blue-500 rounded-lg">Actualizar</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ModalP;
