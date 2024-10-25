import React from 'react'
import CardProfile from '../../components/CardsProfile/CardProfile';
import Direccion from '../../image/Direccion.png';
import pago from '../../image/pago.png';
import pedido from '../../image/pedido.png';
import Navbar from '../../components/navbar/Navbar';


const Profile: React.FC = () => {
  return (


    

  <div className=' bg-white relative  '>

    <Navbar />

    <div >

    <h1 className='text-center absolute top-[10%] left-[37.5%]  text-[1.75rem]'>Tu cuenta</h1>

    </div>


    <div className="h-screen flex flex-col gap-5 items-center justify-center">
      {/* Card 1 */}
      <CardProfile
        imageSrc={pedido}
        title="tus pedidos"
        description="Rastrear, devolver, cancelar un pedido, descargar una factura o comprar de nuevo"
        to='/main'
      />

      {/* Card 2 */}
      <CardProfile
        imageSrc={pago}
        title="tu pagos "
        description="Rastrear, devolver, cancelar un pedido, descargar una factura o comprar de nuevo"
        reverseOrder={true}
        to='/main'
      />

      {/* Card 3 */}
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
