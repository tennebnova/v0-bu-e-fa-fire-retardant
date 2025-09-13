"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Thermometer,
  Zap,
  Gauge,
  Beaker,
  ArrowLeft,
  FileText,
  Shield,
  Flame,
  Factory,
  Building,
  Ship,
  Settings,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface ProductDetailProps {
  product: any
  onBack: () => void
}

export function ProductDetail({ product, onBack }: ProductDetailProps) {
  const technicalData = product.technischeDaten

  const getProductFeatures = () => {
    const features = []

    if (product.beschreibung?.includes("intumeszierend") || product.beschreibung?.includes("Intumeszierend")) {
      features.push({
        icon: Flame,
        title: "Intumeszierend",
        description: "Schaumbildung bei Hitze",
      })
    }

    if (product.beschreibung?.includes("ATH-gefüllt") || product.beschreibung?.includes("ATH")) {
      features.push({
        icon: Shield,
        title: "ATH-gefüllt",
        description: "Aluminiumhydroxid",
      })
    }

    if (product.beschreibung?.includes("halogenfrei") || product.beschreibung?.includes("Halogenfrei")) {
      features.push({
        icon: Shield,
        title: "Halogenfrei",
        description: "Umweltfreundlich",
      })
    }

    if (product.beschreibung?.includes("Spritzqualität") || product.produktName?.includes("GC")) {
      features.push({
        icon: FileText,
        title: "Spritzqualität",
        description: "Gelcoat/Topcoat",
      })
    }

    if (product.beschreibung?.includes("Injektionsharz") || product.beschreibung?.includes("RTM")) {
      features.push({
        icon: Settings,
        title: "Injektionsharz",
        description: "RTM-Verfahren",
      })
    }

    if (product.beschreibung?.includes("Vakuum-Infusion") || product.beschreibung?.includes("VI")) {
      features.push({
        icon: Gauge,
        title: "Vakuum-Infusion",
        description: "VI-Verfahren",
      })
    }

    return features
  }

  const getSpecialFeatures = () => {
    const features = []

    if (product.beschreibung?.includes("styrol") && product.beschreibung?.includes("halogenfrei")) {
      features.push("Styrol-, melamin- und halogenfrei: Umweltfreundliche Formulierung ohne schädliche Zusatzstoffe")
    }

    if (product.beschreibung?.includes("intumeszierend")) {
      features.push("Intumeszierend: Bildet bei Hitzeeinwirkung eine schützende Schaumschicht")
    }

    if (product.beschreibung?.includes("brandhemmend")) {
      const level = product.beschreibung?.includes("herausragend")
        ? "Herausragende"
        : product.beschreibung?.includes("exzellent")
          ? "Exzellente"
          : product.beschreibung?.includes("sehr gut")
            ? "Sehr gute"
            : "Gute"
      features.push(`${level} brandhemmende Eigenschaften: Optimaler Schutz für sicherheitskritische Anwendungen`)
    }

    if (product.beschreibung?.includes("Spritzqualität")) {
      features.push("Spritzqualität: Ideal für die Verarbeitung im Spritzverfahren")
    }

    if (product.beschreibung?.includes("vorbeschleunigt")) {
      features.push("Vorbeschleunigt: Optimierte Verarbeitungszeit und gleichmäßige Aushärtung")
    }

    if (product.beschreibung?.includes("thixotrop")) {
      features.push("Thixotrop: Strukturviskos für vertikale Anwendungen")
    }

    if (product.technischeDaten?.harzbasis === "rPET") {
      features.push("rPET-basiert: Nachhaltiges recyceltes PET als Harzbasis")
    }

    return features
  }

  const productFeatures = getProductFeatures()
  const specialFeatures = getSpecialFeatures()

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" onClick={onBack} className="flex items-center gap-2 bg-transparent">
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Übersicht
        </Button>
      </div>

      {/* Product Header */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-2xl mb-2">{product.produktName}</CardTitle>
              {product.artikelNr && (
                <p className="text-muted-foreground font-mono mb-2">Artikel-Nr.: {product.artikelNr}</p>
              )}
              <CardDescription className="text-base leading-relaxed">{product.beschreibung}</CardDescription>
            </div>
            <div className="flex flex-col gap-2 ml-4">
              {product.isNew && (
                <Badge variant="default" className="bg-accent text-accent-foreground">
                  NEU
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Key Features */}
      {productFeatures.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Produkteigenschaften
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {productFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <feature.icon className="w-6 h-6 text-accent" />
                  <div>
                    <p className="font-semibold">{feature.title}</p>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Technical Data */}
      {technicalData && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Beaker className="w-5 h-5 text-primary" />
              Technische Daten
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Properties */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Grundeigenschaften</h4>

                {technicalData.harzbasis && (
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground">Harzbasis</span>
                    <span className="font-medium">{technicalData.harzbasis}</span>
                  </div>
                )}

                {technicalData.nichtflüchtigeAnteileProzent && (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Nichtflüchtige Anteile</span>
                      <span className="font-medium">{technicalData.nichtflüchtigeAnteileProzent}%</span>
                    </div>
                    <Progress value={technicalData.nichtflüchtigeAnteileProzent} className="h-2" />
                  </div>
                )}

                {technicalData.viskositaet && (
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Gauge className="w-4 h-4" />
                      Viskosität
                    </span>
                    <span className="font-medium">
                      {technicalData.viskositaet.wert
                        ? `${technicalData.viskositaet.wert.toLocaleString()} ${technicalData.viskositaet.einheit}`
                        : technicalData.viskositaet.hinweis || "Auf Anfrage"}
                    </span>
                  </div>
                )}
              </div>

              {/* Mechanical Properties */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Mechanische Eigenschaften</h4>

                {technicalData.zugfestigkeit_MPa && (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        Zugfestigkeit
                      </span>
                      <span className="font-medium">{technicalData.zugfestigkeit_MPa} MPa</span>
                    </div>
                    <Progress value={(technicalData.zugfestigkeit_MPa / 100) * 100} className="h-2" />
                  </div>
                )}

                {technicalData.bruchdehnungProzent && (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Bruchdehnung</span>
                      <span className="font-medium">{technicalData.bruchdehnungProzent}%</span>
                    </div>
                    <Progress value={technicalData.bruchdehnungProzent * 20} className="h-2" />
                  </div>
                )}

                {technicalData.hdt_C && (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Thermometer className="w-4 h-4" />
                        HDT (Wärmeformbeständigkeit)
                      </span>
                      <span className="font-medium">{technicalData.hdt_C}°C</span>
                    </div>
                    <Progress value={(technicalData.hdt_C / 150) * 100} className="h-2" />
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Special Features */}
      {specialFeatures.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Besondere Merkmale</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {specialFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p>
                    <strong>{feature.split(":")[0]}:</strong> {feature.split(":")[1]}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Applications */}
      <Card>
        <CardHeader>
          <CardTitle>Anwendungsbereiche</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Factory className="w-5 h-5 text-primary" />
                <h4 className="font-semibold">Transportwesen</h4>
              </div>
              <p className="text-sm text-muted-foreground">Schienenfahrzeuge, Busse, Schiffe</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Building className="w-5 h-5 text-primary" />
                <h4 className="font-semibold">Bauwesen</h4>
              </div>
              <p className="text-sm text-muted-foreground">Brandschutzverkleidungen, Fassadenelemente</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="w-5 h-5 text-primary" />
                <h4 className="font-semibold">Industrieanlagen</h4>
              </div>
              <p className="text-sm text-muted-foreground">Sicherheitskritische Komponenten</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Ship className="w-5 h-5 text-primary" />
                <h4 className="font-semibold">Offshore</h4>
              </div>
              <p className="text-sm text-muted-foreground">Marine Anwendungen mit hohen Sicherheitsanforderungen</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
