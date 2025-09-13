import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Layers, Gauge, Thermometer } from "lucide-react"

interface SystemSolutionsProps {
  data: any
}

export function SystemSolutions({ data }: SystemSolutionsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">BÜFA®-FireFox-System</h2>
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <p className="text-foreground leading-relaxed">{data.beschreibung}</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground">Systemkombinationen</h3>
        <div className="grid gap-4">
          {data.kombinationen.map((kombination: any, index: number) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight">{kombination.system}</CardTitle>
                    <CardDescription className="mt-2">
                      Gelcoat-Wirkungsweise: {kombination.gelcoatWirkungsweise}
                    </CardDescription>
                  </div>
                  {kombination.isNew && (
                    <Badge variant="default" className="bg-accent text-accent-foreground">
                      NEU
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Norm & Klassifizierung</span>
                    </div>
                    <div className="text-sm">
                      <Badge variant="outline" className="mb-1">
                        {kombination.norm}
                      </Badge>
                      <p className="text-muted-foreground">{kombination.klassifizierung}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Gauge className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Verfahren</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{kombination.verfahren}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Fasergehalt</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {kombination.fasergehaltGewichtsprozent.min}-{kombination.fasergehaltGewichtsprozent.max}%
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Thermometer className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Laminatdicke</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{kombination.laminatdicke_mm} mm</p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Lackierung:</span>
                    <Badge variant={kombination.lackierung ? "default" : "secondary"}>
                      {kombination.lackierung ? "Möglich" : "Nicht erforderlich"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
