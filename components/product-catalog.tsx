"use client"

import { useState } from "react"
import { Search, Flame, Shield, Beaker, Package } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductCard } from "@/components/product-card"
import { ProductDetail } from "@/components/product-detail"
import { SystemSolutions } from "@/components/system-solutions"
import { TechnicalGlossary } from "@/components/technical-glossary"

interface ProductCatalogProps {
  data: any
}

export function ProductCatalog({ data }: ProductCatalogProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  const categoryIcons = {
    "Gelcoats und Topcoats": Flame,
    Harze: Beaker,
    Klebepasten: Package,
    Kernmaterialien: Shield,
    "Additive und Hilfsstoffe": Package,
  }

  const handleProductClick = (product: any) => {
    setSelectedProduct(product)
  }

  const handleBackToCatalog = () => {
    setSelectedProduct(null)
  }

  const isProductInCategory = (product: any, categoryName: string) => {
    if (selectedCategory === "all") return true
    return categoryName === selectedCategory
  }

  if (selectedProduct) {
    return <ProductDetail product={selectedProduct} onBack={handleBackToCatalog} />
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <Flame className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">BÜFA Fire Retardant Products</h1>
            <p className="text-muted-foreground">Komplette Produktpalette für Brandschutz-Composites</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Produkte durchsuchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Kategorie wählen" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Alle Kategorien</SelectItem>
              {data.produktKategorien.map((kategorie: any, index: number) => (
                <SelectItem key={index} value={kategorie.kategorieName}>
                  {kategorie.kategorieName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="products" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="products">Produkte</TabsTrigger>
          <TabsTrigger value="systems">Systemlösungen</TabsTrigger>
          <TabsTrigger value="glossary">Glossar</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-6">
          {/* Category Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {data.produktKategorien
              .filter((kategorie: any) => selectedCategory === "all" || kategorie.kategorieName === selectedCategory)
              .map((kategorie: any, index: number) => {
                const IconComponent = categoryIcons[kategorie.kategorieName as keyof typeof categoryIcons] || Package
                const productCount =
                  kategorie.produkte?.length ||
                  kategorie.unterkategorien?.reduce((acc: number, sub: any) => acc + sub.produkte.length, 0) ||
                  0

                return (
                  <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{kategorie.kategorieName}</CardTitle>
                          <CardDescription>{productCount} Produkte</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                )
              })}
          </div>

          {/* Products by Category */}
          {data.produktKategorien
            .filter((kategorie: any) => selectedCategory === "all" || kategorie.kategorieName === selectedCategory)
            .map((kategorie: any, categoryIndex: number) => (
              <div key={categoryIndex} className="space-y-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-semibold text-foreground">{kategorie.kategorieName}</h2>
                  {kategorie.kategorieHinweis && (
                    <Badge variant="secondary" className="text-xs">
                      {kategorie.kategorieHinweis}
                    </Badge>
                  )}
                </div>

                {/* Direct products */}
                {kategorie.produkte && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {kategorie.produkte
                      .filter(
                        (product: any) =>
                          searchTerm === "" ||
                          product.produktName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.beschreibung.toLowerCase().includes(searchTerm.toLowerCase()),
                      )
                      .map((product: any, productIndex: number) => (
                        <ProductCard key={productIndex} product={product} onClick={() => handleProductClick(product)} />
                      ))}
                  </div>
                )}

                {/* Subcategory products */}
                {kategorie.unterkategorien &&
                  kategorie.unterkategorien.map((subkat: any, subIndex: number) => (
                    <div key={subIndex} className="space-y-3">
                      <h3 className="text-xl font-medium text-foreground border-l-4 border-primary pl-3">
                        {subkat.name}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {subkat.produkte
                          .filter(
                            (product: any) =>
                              searchTerm === "" ||
                              product.produktName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              product.beschreibung.toLowerCase().includes(searchTerm.toLowerCase()),
                          )
                          .map((product: any, productIndex: number) => (
                            <ProductCard
                              key={productIndex}
                              product={product}
                              onClick={() => handleProductClick(product)}
                            />
                          ))}
                      </div>
                    </div>
                  ))}
              </div>
            ))}
        </TabsContent>

        <TabsContent value="systems">
          <SystemSolutions data={data.systemLoesungen} />
        </TabsContent>

        <TabsContent value="glossary">
          <TechnicalGlossary glossary={data.glossar} />
        </TabsContent>
      </Tabs>

      {/* Contact Information */}
      <Card className="mt-12 bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Kontakt & Beratung</CardTitle>
          <CardDescription>
            Für technische Beratung und Produktanfragen stehen wir Ihnen gerne zur Verfügung.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">BÜFA Composite Systems GmbH & Co. KG</h4>
              <p className="text-sm text-muted-foreground">
                {data.kontaktInformationen.hauptsitz.adresse.strasse}
                <br />
                {data.kontaktInformationen.hauptsitz.adresse.plz} {data.kontaktInformationen.hauptsitz.adresse.ort}
                <br />
                {data.kontaktInformationen.hauptsitz.adresse.land}
              </p>
            </div>
            <div>
              <p className="text-sm">
                <strong>Telefon:</strong> {data.kontaktInformationen.hauptsitz.telefon}
                <br />
                <strong>E-Mail:</strong> {data.kontaktInformationen.hauptsitz.email}
                <br />
                <strong>Website:</strong> {data.kontaktInformationen.hauptsitz.website}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
