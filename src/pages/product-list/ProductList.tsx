import { useEffect } from "react";
import { useShopContext } from "../../context/shopContext";
import { useQuery } from "react-query";
import { getphotos } from "../../utils/getphotos";

export const ProductList = () => {
  // const{}
  const { photoName } = useShopContext();
  const { data, isLoading, refetch } = useQuery("photos", async () => {
    return await getphotos(photoName);
  });
  useEffect(() => {
    if (!isLoading) console.log(data?.data.data);
  }, [data, isLoading]);

  useEffect(() => {
    refetch();
  }, [photoName, refetch]);
  return (
    <div>
      {!isLoading && data?.data.data.map((e:any, index:number) => (
        <div key={index}> {e.title}</div>
      ))}
      <h1>hola desde product list</h1>
    </div>
  );
};
