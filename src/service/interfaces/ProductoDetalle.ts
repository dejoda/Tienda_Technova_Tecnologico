export interface Caracteristica {
  nombre: string;
  valor: string;
}

export interface ImagenProducto {
  principal: boolean;
  urlImagen: string;
}

export interface ProductoDetalle {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  marca: string;
  modelo: string;
  categoria: string;
  garantia: number;
  stock: number;
  caracteristicas: Caracteristica[];
  imagenes: ImagenProducto[];
}