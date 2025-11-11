import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, CheckCircle } from "lucide-react";

export default function Implementation() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-slate-900">Guía de Implementación</h1>
          <p className="text-lg text-slate-600 mb-8">
            Pasos detallados para construir e instalar tu propia instancia del Generador de Código.
          </p>

          <Alert className="mb-8 border-blue-200 bg-blue-50">
            <AlertCircle className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              Esta guía asume que tienes conocimientos básicos de programación y familiaridad con la línea de comandos.
            </AlertDescription>
          </Alert>

          {/* Phase 1: Configurar el Entorno LLM */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Fase 1: Configurar el Entorno LLM</h2>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Paso 1: Instalar Ollama
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-slate-600">
                    Ollama es la herramienta que gestiona la ejecución de modelos LLM en tu ordenador.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                    <li>Visita <a href="https://ollama.com" className="text-blue-600 hover:underline">ollama.com</a></li>
                    <li>Descarga la versión para tu sistema operativo (Windows, macOS o Linux)</li>
                    <li>Instala Ollama siguiendo las instrucciones del instalador</li>
                    <li>Verifica la instalación abriendo una terminal y ejecutando: <code className="bg-slate-100 px-2 py-1 rounded text-xs">ollama --version</code></li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Paso 2: Descargar el Modelo de Código
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-slate-600">
                    Una vez instalado Ollama, descarga un modelo de código optimizado para la programación.
                  </p>
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <p>$ ollama pull codellama:7b</p>
                  </div>
                  <p className="text-xs text-slate-500">
                    Este comando descargará el modelo Code Llama 7B (aproximadamente 4-5 GB). El proceso puede tomar varios minutos dependiendo de tu velocidad de internet.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Paso 3: Verificar la API de Ollama
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-slate-600">
                    Ollama expone una API REST que tu Backend utilizará. Verifica que esté activa.
                  </p>
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <p>$ curl http://localhost:11434/api/tags</p>
                  </div>
                  <p className="text-xs text-slate-500">
                    Si Ollama está ejecutándose correctamente, recibirás una respuesta JSON con los modelos disponibles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Phase 2: Desarrollar el Backend */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Fase 2: Desarrollar el Backend (FastAPI)</h2>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Paso 1: Crear un Entorno Virtual de Python
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <p>$ python3 -m venv venv</p>
                    <p>$ source venv/bin/activate  # En Windows: venv\Scripts\activate</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Paso 2: Instalar Dependencias
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <p>$ pip install fastapi uvicorn requests</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Paso 3: Crear el Archivo main.py
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-slate-600">
                    Crea un archivo <code className="bg-slate-100 px-2 py-1 rounded text-xs">main.py</code> con la siguiente estructura básica:
                  </p>
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-xs overflow-x-auto">
                    <pre>{`from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import JSONResponse
import requests
import json

app = FastAPI()

# Configurar CORS si es necesario
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/generate")
async def generate_code(prompt: str, platform: str):
    """
    Endpoint para generar código usando Ollama
    """
    try:
        # Llamar a la API de Ollama
        response = requests.post(
            "http://localhost:11434/api/generate",
            json={
                "model": "codellama:7b",
                "prompt": f"Generate complete {platform} code for: {prompt}",
                "stream": False
            }
        )
        
        if response.status_code == 200:
            return JSONResponse(response.json())
        else:
            return JSONResponse(
                {"error": "Error al generar código"},
                status_code=500
            )
    except Exception as e:
        return JSONResponse(
            {"error": str(e)},
            status_code=500
        )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)`}</pre>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Paso 4: Ejecutar el Backend
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <p>$ python main.py</p>
                  </div>
                  <p className="text-xs text-slate-500">
                    El servidor FastAPI estará disponible en <code className="bg-slate-100 px-2 py-1 rounded text-xs">http://localhost:8000</code>
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Phase 3: Desarrollar el Frontend */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Fase 3: Desarrollar el Frontend (React)</h2>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Paso 1: Crear un Proyecto de React
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <p>$ npx create-react-app code-generator-frontend</p>
                    <p>$ cd code-generator-frontend</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Paso 2: Crear el Componente Principal
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-slate-600">
                    Crea un componente que permita al usuario ingresar un prompt y seleccionar la plataforma.
                  </p>
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-xs overflow-x-auto">
                    <pre>{`import { useState } from 'react';

export default function CodeGenerator() {
  const [prompt, setPrompt] = useState('');
  const [platform, setPlatform] = useState('web');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'http://localhost:8000/api/generate',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt, platform })
        }
      );
      const data = await response.json();
      setCode(data.response || data.error);
    } catch (error) {
      setCode('Error: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="p-8">
      <h1>Generador de Código</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe tu aplicación..."
      />
      <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
        <option value="web">Web</option>
        <option value="android">Android</option>
        <option value="ios">iOS</option>
      </select>
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generando...' : 'Generar Código'}
      </button>
      <pre>{code}</pre>
    </div>
  );
}`}</pre>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Paso 3: Ejecutar el Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <p>$ npm start</p>
                  </div>
                  <p className="text-xs text-slate-500">
                    La aplicación estará disponible en <code className="bg-slate-100 px-2 py-1 rounded text-xs">http://localhost:3000</code>
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Phase 4: Integración y Pruebas */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Fase 4: Integración y Pruebas</h2>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Verificar la Comunicación</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="list-disc list-inside space-y-2 text-sm text-slate-600">
                    <li>Asegúrate de que Ollama está ejecutándose en background</li>
                    <li>Inicia el servidor FastAPI en una terminal</li>
                    <li>Inicia la aplicación React en otra terminal</li>
                    <li>Abre el navegador en <code className="bg-slate-100 px-2 py-1 rounded text-xs">http://localhost:3000</code></li>
                    <li>Prueba con un prompt simple (ej. "Hola mundo en Python")</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Próximos Pasos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="list-disc list-inside space-y-2 text-sm text-slate-600">
                    <li>Mejorar el manejo de errores y validación de datos</li>
                    <li>Implementar descarga de archivos (ZIP)</li>
                    <li>Agregar soporte para múltiples modelos LLM</li>
                    <li>Optimizar los prompts para mejor calidad de código</li>
                    <li>Implementar historial de generaciones</li>
                    <li>Agregar temas oscuro/claro en la interfaz</li>
                  </ul>
                </CardContent>
              </Card>
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
