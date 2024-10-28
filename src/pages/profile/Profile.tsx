import React from 'react'
import CardProfile from '../../components/CardsProfile/CardProfile';
import Direccion from '../../image/Direccion.png';
import pago from '../../image/pago.png';
import pedido from '../../image/pedido.png';
<<<<<<< HEAD

=======
enum ProfileSections {
  ORDERS =1,
  PAYMENTS,
  ADDRESS,
}
>>>>>>> dev

const Profile: React.FC = () => {
  return (
    <div className='relative'>
      <div>
<<<<<<< HEAD
        <h1 className='text-center absolute top-[-8%] left-[34%]  text-[1.5rem]'>Tu cuenta</h1>
      </div>
      <div className=" flex flex-col gap-5 mt-14 items-center justify-center">
        <CardProfile
          imageSrc={pedido}
          title="tus pedidos"
=======
        <h1 className='text-center absolute top-[-30%] left-0  text-[1.5rem]'>Tu cuenta</h1>
      </div>
      <div className="flex items-center justify-center gap-5 mt-14">
        <CardProfile
          imageSrc={pedido}
          type={ProfileSections.ORDERS}
          title="Tus pedidos"
>>>>>>> dev
          description="Rastrear, devolver, cancelar un pedido, descargar una factura o comprar de nuevo"
          to='/main'
        />
        <CardProfile
          imageSrc={pago}
<<<<<<< HEAD
          title="tu pagos "
=======
          title="Tu pagos "          
          type={ProfileSections.PAYMENTS}
>>>>>>> dev
          description="Rastrear, devolver, cancelar un pedido, descargar una factura o comprar de nuevo"
          reverseOrder={true}
          to='/main'
        />
        <CardProfile
          imageSrc={Direccion}
<<<<<<< HEAD
          title="Dirreciones de usuario"
=======
          type={ProfileSections.ADDRESS}
          title="Direciones"
>>>>>>> dev
          description="Editar, eliminar o establecer una dirección predeterminada"
          to='/main'
        />
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Profile;
=======
export default Profile;
>>>>>>> dev
