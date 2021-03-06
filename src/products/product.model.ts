export type Sizes = 'S' | 'M'
export type Product = {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
}
