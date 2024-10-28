import axios from "axios";

// Función para obtener imágenes aleatorias desde Unsplash

export async function getphotos(photoname: string): Promise<any> {
  try {
    return axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=HmJAVuKgULm60fvufy752LRivkGeNFTx&q=${photoname}&limit=10`
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message); // Accede a error.message, no a error.Message
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
