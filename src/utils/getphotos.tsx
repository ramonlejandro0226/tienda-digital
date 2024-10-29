<<<<<<< HEAD

import axios from 'axios';



// Función para obtener imágenes aleatorias desde Unsplash
export async function getphotos(photoname: string): Promise<any> {


    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=HmJAVuKgULm60fvufy752LRivkGeNFTx&q=${photoname}&limit=10`).then(res => {
                return(res.data)
            }).catch(err => console.error(err.message))
  }
=======
import axios from "axios";
import { req } from "./request";

// Función para obtener imágenes aleatorias desde Unsplash

export async function getphotos(name:string): Promise<any> {
  try {
    const response = await req.get(`Products/byname/${name}`);
    return response.data; // Solo retorna los datos
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message); // Accede a error.message, no a error.Message
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
>>>>>>> dev
