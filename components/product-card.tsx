"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Thermometer, Zap, Gauge, Beaker, ArrowRight } from "lucide-react"

interface ProductCardProps {
  product: any
  onClick?: () => void
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const technicalData = product.technischeDaten

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-200 hover:border-primary/50 flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg leading-tight mb-2">{product.produktName}</CardTitle>
            {product.artikelNr && (
              <p className="text-sm text-muted-foreground font-mono">Art.-Nr.: {product.artikelNr}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 ml-2">
            {product.isNew && (
              <Badge variant="default" className="bg-accent text-accent-foreground text-xs">
                NEU
              </Badge>
            )}
          </div>
        </div>
        <CardDescription className="text-sm leading-relaxed">{product.beschreibung}</CardDescription>
      </CardHeader>

      <CardContent className="pt-0 flex-1 flex flex-col">
        {technicalData && (
          <div className="space-y-3 flex-1">
            <Separator />
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Beaker className="w-4 h-4 text-primary" />
                Technische Daten
              </h4>

              <div className="grid grid-cols-2 gap-2 text-xs">
                {technicalData.harzbasis && (
                  <div>
                    <span className="text-muted-foreground">Harzbasis:</span>
                    <p className="font-medium">{technicalData.harzbasis}</p>
                  </div>
                )}

                {technicalData.nichtflüchtigeAnteileProzent && (
                  <div>
                    <span className="text-muted-foreground">NV-Anteil:</span>
                    <p className="font-medium">{technicalData.nichtflüchtigeAnteileProzent}%</p>
                  </div>
                )}

                {technicalData.viskositaet?.wert && (
                  <div>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Gauge className="w-3 h-3" />
                      Viskosität:
                    </span>
                    <p className="font-medium">
                      {technicalData.viskositaet.wert.toLocaleString()} {technicalData.viskositaet.einheit}
                    </p>
                  </div>
                )}

                {technicalData.zugfestigkeit_MPa && (
                  <div>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      Zugfestigkeit:
                    </span>
                    <p className="font-medium">{technicalData.zugfestigkeit_MPa} MPa</p>
                  </div>
                )}

                {technicalData.bruchdehnungProzent && (
                  <div>
                    <span className="text-muted-foreground">Bruchdehnung:</span>
                    <p className="font-medium">{technicalData.bruchdehnungProzent}%</p>
                  </div>
                )}

                {technicalData.hdt_C && (
                  <div>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Thermometer className="w-3 h-3" />
                      HDT:
                    </span>
                    <p className="font-medium">{technicalData.hdt_C}°C</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mt-4 pt-3 border-t">
          <Button
            variant="outline"
            size="sm"
            className="w-full group hover:bg-primary hover:text-primary-foreground bg-transparent"
            onClick={onClick}
          >
            Mehr erfahren
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
