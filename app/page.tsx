import { Header } from "@/components/header"
import { ProductCatalog } from "@/components/product-catalog"
import productData from "@/data/buefa-products.json"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ProductCatalog data={productData} />
    </main>
  )
}
