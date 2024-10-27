import { Carousel } from "flowbite-react";
import { getphotos } from "../../utils/getphotos";
const Home = () => {
    // const { isLoading, data } = useQuery("prueba", async () => {

    //     axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
    //         console.log(res.data)
    //     }).catch(err => console.error(err.message))

    // })

 
    const imgs = [
        {

            url: "https://images.samsung.com/is/image/samsung/assets/consumer/global/vd/monitors/odyssey/odyssey-feature02-mo.jpg?$ORIGIN_JPG$",
            alt: "Monitor"
        },
        {

            url: "https://concepto.de/wp-content/uploads/2020/06/Computadora-de-escritorio-scaled-e1724955496406.jpg",
            alt: "Desktop"
        },
        {
            url: "https://i.pcmag.com/imagery/roundups/01hiB08j7yaJGJmPl2YhRRH-59..v1713199550.jpg",
            alt: "Laptop"
        },
        {
            url: "https://www.nvidia.com/content/dam/en-zz/Solutions/ces-2023/geforce-rtx-40-series-laptops-available-february-8/geforce-rtx-40-series-laptop-announement-ces-2023.jpg",
            alt: "Portatil Gamer"
        }
    ]

    return (
        <div className="h-screen flex flex-col gap-2 relative mt-10">
            <span className="font-medium absolute -top-10 text-xl ">
                Bienvenido, Ramon 👋
            </span>
            <div className="h-full w-full  mx-auto rounded-lg border-2">
                <Carousel slideInterval={4000} indicators={false} leftControl="" rightControl="">
                    {
                        imgs.map((e, index) => (
                            <img key={index} src={e.url} alt={e.alt} className="w-full h-full object-cover object-center" />
                        ))
                    }
                </Carousel>
            </div>
            <div className="container grid h-1/2 grid-cols-4 grid-rows-8 gap-2">
                <div className=" row-span-4 flex items-center justify-center rounded-lg overflow-hidden relative group">
                <span className="absolute text-gray-800 z-10 text-lg font-semibold bg-slate-50 p-2 rounded-lg top-2 right-2 hover:bg-slate-200 cursor-pointer">Más popular🔥</span>
                    <img src="https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2613900-amd-ryzen-9000-desktop-og.jpg" alt="" loading="lazy" className="h-full object-cover w-full group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className=" row-span-4 flex items-center justify-center rounded-lg overflow-hidden group">
                    <img src="https://media.es.wired.com/photos/65fce688f55f3fd353a93d7c/4:3/w_1440,h_1080,c_limit/Intel%20core%20ultra%207.jpg
" alt="geforce" loading="lazy" className="h-full object-cover w-full group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="col-span-2 row-span-8 flex items-center justify-center rounded-lg overflow-hidden group relative">
                    <span className="absolute text-white z-10 text-lg font-semibold bg-blue-500 p-2 rounded-lg top-2 right-2 hover:bg-blue-700 cursor-pointer"> 50% de descuento</span>
                    <img src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4060-4060ti/geforce-rtx-4060-ti-og-1200x630.jpg" alt="geforce" loading="lazy" className="h-full object-cover w-full group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="row-span-4 flex items-center justify-center rounded-lg overflow-hidden group">
                    <img src=" https://www.xtremetecpc.com/public/images/media/2022/11/CMG8GX4M1E3200C16-6.jpg" alt="geforce" loading="lazy" className="h-full object-cover w-full group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="row-span-4 flex items-center justify-center rounded-lg overflow-hidden group">
                    <img src="https://storage-asset.msi.com/global/picture/image/feature/power/MPG/A750GF/KV-xs.png" alt="geforce" loading="lazy" className="h-full object-cover w-full group-hover:scale-110 transition-all duration-300" />
                </div>
            </div>
        </div>
    )
}

export default Home