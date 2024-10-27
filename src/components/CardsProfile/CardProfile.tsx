import React from 'react'
import { Link } from 'react-router-dom';

interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
    reverseOrder?: boolean; 
    to:string// Propiedad opcional
  }
const CardProfile: React.FC<CardProps> = ({ imageSrc, title, description, reverseOrder,to }) => {
    return (
        <div className="border-gray-300 border-2 rounded-xl w-[30rem] py-7 px-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <Link className={`grid grid-cols-6 gap-3 ${reverseOrder ? 'grid-cols-6-reverse' : ''}`} to={to}>
          {/* Imagen */}
          <div className="col-span-2">
            <img src={imageSrc} alt={title} />
          </div>
          {/* Descripción */}
          <div className="col-span-4">
            <p className="text-gray-700 font-bold">{title}</p>
            <p className="text-gray-500 mt-4">{description}</p>
          </div>
        </Link>
      </div>
    );
  };
  
    export default CardProfile;