import axios from "axios";
import type { ProductoPresentacion } from "../service/interfaces/ProductoPresentacion";

const URL = "http://localhost:8080/productos";

export class ProductoService {

  async getProductosPresentacion(): Promise<ProductoPresentacion[]> {
    const response = await axios.get(`${URL}/presentacion`);
    return response.data;
  }

}