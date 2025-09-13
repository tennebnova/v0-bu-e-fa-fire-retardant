import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen } from "lucide-react"

interface TechnicalGlossaryProps {
  glossary: any[]
}

export function TechnicalGlossary({ glossary }: TechnicalGlossaryProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <BookOpen className="w-6 h-6 text-primary" />
        <div>
          <h2 className="text-2xl font-bold text-foreground">Technisches Glossar</h2>
          <p className="text-muted-foreground">Wichtige Begriffe und Definitionen</p>
        </div>
      </div>

      <div className="grid gap-4">
        {glossary.map((eintrag: any, index: number) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="font-mono text-sm">
                  {eintrag.begriff}
                </Badge>
                {eintrag.vollstaendigerName && (
                  <div className="flex-1">
                    <CardTitle className="text-lg">{eintrag.vollstaendigerName}</CardTitle>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">{eintrag.definition}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Technical Information */}
      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="text-lg">Wichtige Hinweise</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">EN 45545-2</h4>
            <p className="text-sm text-muted-foreground">
              Diese europäische Norm regelt die Anforderungen an das Brandverhalten von Werkstoffen und Komponenten im
              Schienenverkehr und gilt als extrem streng.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Hazard Level (HL)</h4>
            <p className="text-sm text-muted-foreground">
              Klassifizierungssystem zur Ordnung der Anwendungsbereiche von Kunststoffbauteilen nach der geforderten
              Mindestleistung im Brandfall. HL3 ist die strengste Stufe.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
