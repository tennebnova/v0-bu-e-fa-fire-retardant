import { Search, Globe, User, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#03479c] text-white px-4 py-1">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <span>Global Composites Website</span>
          <div className="flex items-center gap-4">
            <a href="https://www.buefa-composites.com/de/jec" className="hover:underline">
              JEC Trade Show
            </a>
            <a href="https://www.buefa-composites.com/de/lohnfertigung" className="hover:underline">
              Lohnfertigung
            </a>
            <a href="https://www.buefa-composites.com/de/kontakt" className="hover:underline">
              Kontakt
            </a>
            <a href="https://www.buefa-composites.com/de/mediencenter" className="hover:underline">
              Mediencenter
            </a>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Globe className="h-4 w-4" />
                <ChevronDown className="h-3 w-3 ml-1" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <User className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-[#03479c] font-bold text-3xl mr-2">BÜFA</div>
              <div className="bg-[#d6555a] text-white px-3 py-1 text-sm font-medium">Composites</div>
            </div>

            {/* Main navigation menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="https://www.buefa-composites.com/de/vertrieb"
                className="text-[#03479c] font-medium hover:text-[#d6555a] transition-colors"
              >
                VERTRIEB
              </a>
              <a
                href="https://www.buefa-composites.com/de/produkte-systeme"
                className="text-[#03479c] font-medium hover:text-[#d6555a] transition-colors"
              >
                PRODUKTE & SYSTEME
              </a>
              <a
                href="https://www.buefa-composites.com/de/buefa-tec"
                className="text-[#03479c] font-medium hover:text-[#d6555a] transition-colors"
              >
                BÜFA TEC
              </a>
              <a
                href="https://www.buefa-composites.com/de/branchen"
                className="text-[#03479c] font-medium hover:text-[#d6555a] transition-colors"
              >
                BRANCHEN
              </a>
              <a
                href="https://www.buefa-composites.com/de/anwendungen"
                className="text-[#03479c] font-medium hover:text-[#d6555a] transition-colors"
              >
                ANWENDUNGEN
              </a>
              <a
                href="https://www.buefa-composites.com/de/know-how"
                className="text-[#03479c] font-medium hover:text-[#d6555a] transition-colors"
              >
                KNOW-HOW
              </a>
              <a
                href="https://www.buefa-composites.com/de/ueber-uns"
                className="text-[#03479c] font-medium hover:text-[#d6555a] transition-colors"
              >
                ÜBER UNS
              </a>
              <a
                href="https://www.buefa-composites.com/de/highlights"
                className="text-[#03479c] font-medium hover:text-[#d6555a] transition-colors"
              >
                NEWS
              </a>
            </nav>

            {/* Mobile menu button */}
            <Button variant="ghost" className="lg:hidden">
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className="w-4 h-0.5 bg-[#03479c] mb-1"></span>
                <span className="w-4 h-0.5 bg-[#03479c] mb-1"></span>
                <span className="w-4 h-0.5 bg-[#03479c]"></span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
