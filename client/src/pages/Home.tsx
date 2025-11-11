import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Link } from "wouter";
import { Zap, Lock, Code, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
              Generador de Código Multiplataforma Local
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Crea aplicaciones para Android, iOS y Web completamente en tu ordenador, sin depender de servicios en la nube. Una herramienta de desarrollo potente y autónoma.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/requisitos">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Ver Requisitos
                </Button>
              </Link>
              <Link href="/arquitectura">
                <Button size="lg" variant="outline">
                  Explorar Arquitectura
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Características Principales
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Lock className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">100% Local</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Funciona completamente en tu ordenador. Sin conexión a internet requerida después de la instalación inicial.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="w-8 h-8 text-yellow-600 mb-2" />
                <CardTitle className="text-lg">Rápido y Eficiente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Genera código de alta calidad usando modelos de IA especializados en programación.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Code className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle className="text-lg">Multiplataforma</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Genera código para Android, iOS y Web desde una única interfaz.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Download className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle className="text-lg">Descarga Fácil</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Descarga el código generado como un proyecto completo listo para usar.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="container py-16 bg-white rounded-lg my-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            ¿Cómo Funciona?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-lg">
                1
              </div>
              <h3 className="font-bold mb-2 text-slate-900">Describe tu Idea</h3>
              <p className="text-sm text-slate-600">
                Escribe una descripción detallada de la aplicación que deseas crear.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-lg">
                2
              </div>
              <h3 className="font-bold mb-2 text-slate-900">Selecciona Plataforma</h3>
              <p className="text-sm text-slate-600">
                Elige si deseas generar código para Web, Android o iOS.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-lg">
                3
              </div>
              <h3 className="font-bold mb-2 text-slate-900">Descarga tu Código</h3>
              <p className="text-sm text-slate-600">
                Obtén el código fuente completo listo para compilar y publicar.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para Comenzar?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Revisa los requisitos y la guía de implementación para instalar tu propia instancia.
            </p>
            <Link href="/implementacion">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
                Ver Guía de Implementación
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-slate-50 py-8 mt-12">
        <div className="container text-center text-sm text-slate-600">
          <p>© 2025 Generador de Código Local. Documentación y Arquitectura por Manus AI.</p>
        </div>
      </footer>
    </div>
  );
}
