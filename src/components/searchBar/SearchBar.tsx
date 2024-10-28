import { useNavigate } from "react-router-dom";
import { useShopContext } from "../../context/shopContext";
import { useState } from "react";

interface SearchBarProps {
  offset: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ offset }) => {
  const { setPhotoName } = useShopContext();
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) return alert("Debe llenar todos los campos");
    // if (inputValue.trim().length <= 1) return;
    // setCategories(categories => [inputValue,...categories])
    // getphotos(inputValue).then((result) => {
    //   onAddproduct(result);
    // });
    setPhotoName(name);
    navigate("/main/ProductList");
  };

  return (
    <form action="" onSubmit={handleSubmit} className="flex gap-2 w-[80%] ml-5">
      <div className="flex rounded-md h-8 px-4 w-full gap-2 border-[1px] b-primary  transition-all duration-300">
        <input
          type="text"
          id="test"
          placeholder="Buscar producto..."
          className={`w-full transition-all duration-300 caret-blue-500 
                !outline-none bg-transparent text-sm !border-none focus:outline-none focus:ring-0 ${offset > 50 && "placeholder-gray-100 border-gray-800"}`}
          onChange={onInputChange}
          value={name}
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
