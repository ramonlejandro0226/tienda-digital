import React from 'react'
import CardProfile from '../../components/CardsProfile/CardProfile';
import Direccion from '../../image/Direccion.png';
import pago from '../../image/pago.png';
import pedido from '../../image/pedido.png';


const Profile: React.FC = () => {
  return (
    <div className='relative'>
      <div>
        <h1 className='text-center absolute top-[-8%] left-[34%]  text-[1.5rem]'>Tu cuenta</h1>
      </div>
      <div className=" flex flex-col gap-5 mt-14 items-center justify-center">
        <CardProfile
          imageSrc={pedido}
          title="tus pedidos"
          description="Rastrear, devolver, cancelar un pedido, descargar una factura o comprar de nuevo"
          to='/main'
        />
        <CardProfile
          imageSrc={pago}
          title="tu pagos "
          description="Rastrear, devolver, cancelar un pedido, descargar una factura o comprar de nuevo"
          reverseOrder={true}
          to='/main'
        />
        <CardProfile
          imageSrc={Direccion}
          title="Dirreciones de usuario"
          description="Editar, eliminar o establecer una dirección predeterminada"
          to='/main'
        />
      </div>
    </div>
  );
};

export default Profile;