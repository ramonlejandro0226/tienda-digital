import { useEffect, useState } from "react";
import { useShopContext } from "../../context/shopContext";
import { useQuery } from "react-query";
import { getphotos } from "../../utils/getphotos";
import { USDollar } from "../../utils/currencyFormat";
import NotFound from "../../components/notFound/NotFound";

export const ProductList = () => {
  // const{}
  const { photoName, shouldFetch } = useShopContext();
  const [data, setData] = useState<any>([]);
  const imgNotFound =
    "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=";
  const {
    data: sData,
    isLoading,
    refetch,
  } = useQuery(
    "photos",
    async () => {
      return await getphotos(photoName);
    },
    { enabled: false }
  );
  useEffect(() => {
    if (!isLoading && sData) setData(sData);
  }, [data, isLoading, refetch]);

  useEffect(() => {
    if(photoName){
      refetch();
    } 
  }, [shouldFetch]);
  return (
    <div className="flex flex-col gap-5">
      {data.length === 0 || photoName.length===0 ? (
        <NotFound msg={"No se ha encontrado ningun producto 😪"} />
      ) : (
        data?.map((e: any) => (
          <div
            key={e.id}
            className="card flex  items-center bg-white p-4 rounded-lg "
          >
            <div className="card-heade h-[180px] w-[500px] mr-5 rounded-lg overflow-hidden">
              <img
                className="h-full w-full object-cover object-center"
                src={e.urlImage === "string" ? imgNotFound : e.urlImage}
              />
            </div>
            <div className="card-body flex flex-col gap-2 justify-center w-full mr-8">
              <span className="font-medium text-xl">{e.name}</span>
              <p className=" h-24 overflow-hidden text-wrap my-1">
                {e.description}
              </p>
              <div className="flex justify-between w-full items-center">
                <span className="">{USDollar.format(e.price)}</span>
                <button className="flex gap-1 rounded-lg bg-blue-500 text-white px-4 py-2">
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
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  <span>Agregar al carrito</span>
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
