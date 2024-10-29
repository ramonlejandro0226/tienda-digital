import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface ShopContextType {
  photoName: string;
  setPhotoName: React.Dispatch<React.SetStateAction<string>>;
  toggle:()=>void
  shouldFetch:boolean
}
const shopContext = createContext({});

const useShopContext = () => {
  const context = useContext(shopContext) as ShopContextType;
  if (shopContext === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};

const ShopContextProvider: React.FC<Props> = ({ children }) => {
  const [photoName, setPhotoName] = useState<string>("");
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);

  const toggle =()=> setShouldFetch(!shouldFetch)

  return (
    <shopContext.Provider value={{ photoName, setPhotoName,toggle,shouldFetch}}>
      {children}
    </shopContext.Provider>
  );
};

export { ShopContextProvider, useShopContext };
