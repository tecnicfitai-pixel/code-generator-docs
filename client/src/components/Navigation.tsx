import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Code2 className="w-6 h-6" />
          <span>Code Generator</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-1">
          <Link href="/">
            <Button variant="ghost" className="text-sm">Inicio</Button>
          </Link>
          <Link href="/requisitos">
            <Button variant="ghost" className="text-sm">Requisitos</Button>
          </Link>
          <Link href="/arquitectura">
            <Button variant="ghost" className="text-sm">Arquitectura</Button>
          </Link>
          <Link href="/implementacion">
            <Button variant="ghost" className="text-sm">Implementación</Button>
          </Link>
          <Link href="/faq">
            <Button variant="ghost" className="text-sm">FAQ</Button>
          </Link>
        </div>

        <div className="md:hidden">
          <Link href="/">
            <Button variant="outline" size="sm">Menú</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
