import React from 'react'

const SearchBar = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <form action="" onSubmit={handleSubmit} className="flex gap-2 w-[80%] ml-5">
            <div className="flex rounded-md h-8 px-4 w-full gap-2 border-[1px] b-primary  transition-all duration-300">
                <input type="text" id="test" placeholder="Buscar producto..." className="w-full transition-all duration-300 caret-blue-500 
                !outline-none bg-transparent text-sm !border-none"/>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </div>
        </form>
    )
}

export default SearchBar