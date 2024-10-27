
import axios from 'axios';



// Función para obtener imágenes aleatorias desde Unsplash
export async function getphotos(photoname: string): Promise<any> {


    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=HmJAVuKgULm60fvufy752LRivkGeNFTx&q=${photoname}&limit=10`).then(res => {
                return(res.data)
            }).catch(err => console.error(err.message))
  }
