import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Requirements() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-slate-900">Requisitos de Hardware y Software</h1>
          <p className="text-lg text-slate-600 mb-8">
            Descubre qué necesitas para ejecutar el Generador de Código Local en tu ordenador.
          </p>

          {/* Hardware Requirements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Requisitos de Hardware</h2>
            
            <Alert className="mb-6 border-yellow-200 bg-yellow-50">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-yellow-800">
                La VRAM es crucial para la velocidad de generación. Si tu ordenador no tiene una GPU dedicada con suficiente VRAM, el LLM puede ejecutarse en la RAM del sistema, pero será significativamente más lento.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Mínimo Funcional</CardTitle>
                  <CardDescription>Para que la aplicación funcione</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-slate-900">Memoria RAM</p>
                      <p className="text-sm text-slate-600">16 GB</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-slate-900">VRAM (GPU)</p>
                      <p className="text-sm text-slate-600">8 GB (para aceleración)</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-slate-900">Procesador</p>
                      <p className="text-sm text-slate-600">8 núcleos</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-slate-900">Almacenamiento</p>
                      <p className="text-sm text-slate-600">SSD de alta velocidad</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recomendado</CardTitle>
                  <CardDescription>Para mejor rendimiento</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-slate-900">Memoria RAM</p>
                      <p className="text-sm text-slate-600">32 GB o más</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-slate-900">VRAM (GPU)</p>
                      <p className="text-sm text-slate-600">12 GB+ (NVIDIA o AMD)</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-slate-900">Procesador</p>
                      <p className="text-sm text-slate-600">CPU moderna de alto rendimiento</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-slate-900">Almacenamiento</p>
                      <p className="text-sm text-slate-600">SSD NVMe de alta velocidad</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Software Requirements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Requisitos de Software</h2>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Motor LLM: Ollama</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">
                    Simplifica la descarga y ejecución de modelos de lenguaje grande en tu ordenador.
                  </p>
                  <p className="text-xs text-slate-500">
                    <strong>Descargar desde:</strong> <a href="https://ollama.com" className="text-blue-600 hover:underline">ollama.com</a>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Lenguaje Backend: Python 3.10+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">
                    Servidor de lógica y comunicación con Ollama.
                  </p>
                  <p className="text-xs text-slate-500">
                    <strong>Instalar desde:</strong> <a href="https://python.org" className="text-blue-600 hover:underline">python.org</a>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Framework Backend: FastAPI</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">
                    Creación de la API local en tu ordenador.
                  </p>
                  <p className="text-xs text-slate-500">
                    <strong>Instalar con:</strong> <code className="bg-slate-100 px-2 py-1 rounded text-xs">pip install fastapi uvicorn requests</code>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Framework Frontend: React/Vue.js</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">
                    Desarrollo de la interfaz de usuario web.
                  </p>
                  <p className="text-xs text-slate-500">
                    <strong>Requiere:</strong> Node.js 18+ y npm o pnpm
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Modelo de Código: Code Llama 7B o Mixtral</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">
                    El modelo de IA que genera el código fuente.
                  </p>
                  <p className="text-xs text-slate-500">
                    <strong>Descargar con:</strong> <code className="bg-slate-100 px-2 py-1 rounded text-xs">ollama pull codellama:7b</code>
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Summary */}
          <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-bold text-slate-900 mb-3">Resumen</h3>
            <p className="text-sm text-slate-700">
              La solución está optimizada para un modelo de código de tamaño medio (Code Llama 7B cuantizado), que ofrece un buen equilibrio entre rendimiento y accesibilidad para un ordenador personal moderno. Los requisitos principales son memoria RAM suficiente y, idealmente, una GPU con VRAM para acelerar la generación de código.
            </p>
          </section>
        </div>
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
