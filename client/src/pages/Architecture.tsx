import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, Database, Monitor } from "lucide-react";

export default function Architecture() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-slate-900">Arquitectura Técnica</h1>
          <p className="text-lg text-slate-600 mb-8">
            Comprende cómo se estructura la aplicación generadora de código.
          </p>

          {/* Architecture Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Arquitectura de Tres Capas</h2>
            <p className="text-slate-600 mb-6">
              La solución se basa en una arquitectura de tres capas que garantiza la ejecución local, la seguridad de los datos y la independencia de servicios en la nube.
            </p>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Monitor className="w-6 h-6 text-blue-600" />
                    <div>
                      <CardTitle>Capa de Presentación (Frontend)</CardTitle>
                      <CardDescription>Interfaz de Usuario</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm text-slate-900">Componente Principal</p>
                    <p className="text-sm text-slate-600">Aplicación Web (React/Vue.js)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-slate-900">Función</p>
                    <p className="text-sm text-slate-600">Interfaz de usuario para ingresar prompts y visualizar/descargar el código generado.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-slate-900">Ejecución</p>
                    <p className="text-sm text-slate-600">Navegador del usuario (servido por el Backend en localhost)</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Layers className="w-6 h-6 text-green-600" />
                    <div>
                      <CardTitle>Capa de Lógica (Backend)</CardTitle>
                      <CardDescription>Servidor Local</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm text-slate-900">Componente Principal</p>
                    <p className="text-sm text-slate-600">Servidor Local (Python/FastAPI)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-slate-900">Función</p>
                    <p className="text-sm text-slate-600">Gestiona la API local, la comunicación con el LLM, el procesamiento de prompts y la gestión de archivos.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-slate-900">Ejecución</p>
                    <p className="text-sm text-slate-600">localhost (Ordenador del usuario)</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Database className="w-6 h-6 text-purple-600" />
                    <div>
                      <CardTitle>Capa de Generación (LLM)</CardTitle>
                      <CardDescription>Motor de IA</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm text-slate-900">Componente Principal</p>
                    <p className="text-sm text-slate-600">Ollama + Modelo de Código Abierto</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-slate-900">Función</p>
                    <p className="text-sm text-slate-600">Motor de Inteligencia Artificial que recibe la solicitud y genera el código fuente.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-slate-900">Ejecución</p>
                    <p className="text-sm text-slate-600">localhost (Proceso en segundo plano)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Stack Tecnológico */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Stack Tecnológico Recomendado</h2>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Motor de Generación de Código (LLM)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm text-slate-900">Herramienta de Ejecución</p>
                    <p className="text-sm text-slate-600"><strong>Ollama</strong> - Simplifica la instalación y el manejo de modelos LLM en el ordenador del usuario.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-slate-900">Modelo Recomendado</p>
                    <p className="text-sm text-slate-600"><strong>Code Llama 7B</strong> o <strong>Mixtral 8x7B</strong> (versión cuantizada)</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded text-xs text-slate-700">
                    <p><strong>Justificación:</strong> Code Llama está específicamente entrenado para tareas de programación. Mixtral ofrece rendimiento superior pero requiere más recursos. Se recomienda comenzar con Code Llama 7B por su menor requisito de hardware.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Backend (Servidor Local)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm text-slate-900">Lenguaje</p>
                    <p className="text-sm text-slate-600"><strong>Python</strong></p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-slate-900">Framework</p>
                    <p className="text-sm text-slate-600"><strong>FastAPI</strong> - Moderno, rápido y fácil de configurar para crear una API RESTful.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-slate-900">Librerías Clave</p>
                    <ul className="text-sm text-slate-600 list-disc list-inside">
                      <li><code className="bg-slate-100 px-1 rounded text-xs">requests</code> - Para llamadas HTTP a Ollama</li>
                      <li><code className="bg-slate-100 px-1 rounded text-xs">uvicorn</code> - Servidor ASGI</li>
                      <li><code className="bg-slate-100 px-1 rounded text-xs">pydantic</code> - Validación de datos</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Frontend (Interfaz de Usuario)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm text-slate-900">Framework</p>
                    <p className="text-sm text-slate-600"><strong>React</strong> o <strong>Vue.js</strong> - Para crear una Single Page Application (SPA).</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-slate-900">Tecnologías</p>
                    <p className="text-sm text-slate-600">HTML, CSS (Tailwind CSS), JavaScript/TypeScript</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-slate-900">Funcionalidades Clave</p>
                    <ul className="text-sm text-slate-600 list-disc list-inside">
                      <li>Campo de texto para el prompt</li>
                      <li>Selector de plataforma (Web, Android, iOS)</li>
                      <li>Área de visualización con resaltado de sintaxis</li>
                      <li>Botón de descarga del proyecto (ZIP)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Flujo de Trabajo */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Flujo de Trabajo (Workflow)</h2>
            
            <div className="space-y-3">
              {[
                { step: 1, title: "Inicio", desc: "El usuario inicia la aplicación (ejecuta el script de Python del backend)." },
                { step: 2, title: "Acceso", desc: "El usuario abre su navegador y navega a http://localhost:8000" },
                { step: 3, title: "Solicitud", desc: "El usuario introduce un prompt y selecciona la plataforma." },
                { step: 4, title: "Backend", desc: "El Frontend envía la solicitud al Backend de FastAPI." },
                { step: 5, title: "LLM", desc: "El Backend formula un prompt avanzado y lo envía a la API de Ollama." },
                { step: 6, title: "Generación", desc: "Ollama utiliza el modelo local para generar el código." },
                { step: 7, title: "Respuesta", desc: "El código generado se devuelve al Backend." },
                { step: 8, title: "Entrega", desc: "El Backend estructura el código en archivos y lo envía al Frontend para su descarga." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white text-sm font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
