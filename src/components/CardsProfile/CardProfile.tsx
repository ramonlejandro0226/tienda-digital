import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalP from "../modal/Modal";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  reverseOrder?: boolean;
  to: string; // Propiedad opcional
  type: number;
}
const CardProfile: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  reverseOrder,
  to,
  type,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const handleClick = () => {
    setShow(true);
  };
  return (
    <>
      {show && <ModalP show={show} setShow={setShow} type={type} />}
      <div
        title={title}
        className={`border-gray-300 border-2 rounded-xl w-[30rem] py-7 px-5 transform transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden after:inset-0 after:absolute  hover:after:content-[attr(title)] hover:after:bg-gray-200/10 after:flex after:justify-center after:items-center after:cursor-pointer hover:after:backdrop-blur-xl`}
        onClick={handleClick}
      >
        <Link
          className={`grid grid-cols-6 gap-3 ${reverseOrder ? "grid-cols-6-reverse" : ""}`}
          to={to}
        >
          {/* Imagen */}
          <div className="col-span-2">
            <img src={imageSrc} alt={title} />
          </div>
          {/* Descripción */}
          <div className="col-span-4">
            <p className="font-bold text-gray-700">{title}</p>
            <p className="mt-4 text-gray-500">{description}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CardProfile;
