export interface ProductoPresentacion {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  descripcion: string;
  marca: string;
  imagen: string | null; 
}