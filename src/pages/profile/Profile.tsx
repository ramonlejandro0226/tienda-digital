import React from 'react'
import CardProfile from '../../components/CardsProfile/CardProfile';
import Direccion from '../../image/Direccion.png';
import pago from '../../image/pago.png';
import pedido from '../../image/pedido.png';
enum ProfileSections {
  ORDERS =1,
  PAYMENTS,
  ADDRESS,
}

const Profile: React.FC = () => {
  return (
    <div className='relative'>
      <div>
        <h1 className='text-center absolute top-[-30%] left-0  text-[1.5rem]'>Tu cuenta</h1>
      </div>
      <div className="flex items-center justify-center gap-5 mt-14">
        <CardProfile
          imageSrc={pedido}
          type={ProfileSections.ORDERS}
          title="Tus pedidos"
          description="Rastrear, devolver, cancelar un pedido, descargar una factura o comprar de nuevo"
          to='/main'
        />
        <CardProfile
          imageSrc={pago}
          title="Tu pagos "          
          type={ProfileSections.PAYMENTS}
          description="Rastrear, devolver, cancelar un pedido, descargar una factura o comprar de nuevo"
          reverseOrder={true}
          to='/main'
        />
        <CardProfile
          imageSrc={Direccion}
          type={ProfileSections.ADDRESS}
          title="Direciones"
          description="Editar, eliminar o establecer una dirección predeterminada"
          to='/main'
        />
      </div>
    </div>
  );
};

export default Profile;
