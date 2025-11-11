import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "¿Necesito conexión a internet para usar la aplicación?",
    answer: "No. Una vez que hayas descargado el modelo de IA (Code Llama) con Ollama, la aplicación funciona completamente sin conexión a internet. Solo necesitarás internet para la descarga inicial del modelo."
  },
  {
    question: "¿Qué requisitos de hardware necesito realmente?",
    answer: "El requisito mínimo es 16 GB de RAM y una GPU con 8 GB de VRAM. Sin embargo, se recomienda 32 GB de RAM y 12 GB+ de VRAM para mejor rendimiento. Si no tienes una GPU, el LLM puede ejecutarse en la CPU, pero será significativamente más lento."
  },
  {
    question: "¿Puedo usar otros modelos además de Code Llama?",
    answer: "Sí. Ollama soporta múltiples modelos de código abierto como Mixtral, LLaMA 3, y otros. Puedes cambiar el modelo editando el archivo de configuración del Backend o instalando otro modelo con 'ollama pull [nombre-modelo]'."
  },
  {
    question: "¿Qué plataformas soporta?",
    answer: "La aplicación puede generar código para Android, iOS y Web. Se recomienda usar frameworks multiplataforma como Flutter o React Native para simplificar la generación y el mantenimiento del código."
  },
  {
    question: "¿Puedo publicar el código generado en las tiendas de aplicaciones?",
    answer: "Sí. El código generado es código fuente estándar que puedes compilar y publicar en Google Play Store (Android) o App Store (iOS). Sin embargo, deberás seguir los procesos de revisión y cumplimiento de cada plataforma."
  },
  {
    question: "¿Es necesario publicar la aplicación generadora en internet?",
    answer: "No. La aplicación está diseñada para funcionar completamente en tu localhost. Es una herramienta de desarrollo personal que no requiere publicación en línea. Solo el código que generes puede ser publicado si lo deseas."
  },
  {
    question: "¿Qué sucede si el código generado no es perfecto?",
    answer: "El código generado por el LLM es un punto de partida. Puedes editarlo, mejorarlo y personalizarlo según tus necesidades. Los LLMs son herramientas de asistencia, no reemplazan el trabajo del desarrollador."
  },
  {
    question: "¿Puedo usar la aplicación en Windows, macOS y Linux?",
    answer: "Sí. Ollama, Python y React están disponibles para Windows, macOS y Linux. La aplicación es completamente multiplataforma."
  },
  {
    question: "¿Cuánto tiempo tarda en generar código?",
    answer: "El tiempo depende del hardware y la complejidad del prompt. Con una GPU moderna, la generación típicamente toma entre 30 segundos y 2 minutos. Sin GPU, puede tomar varios minutos."
  },
  {
    question: "¿Dónde puedo obtener ayuda si tengo problemas?",
    answer: "Puedes consultar la documentación oficial de Ollama (ollama.com), FastAPI (fastapi.tiangolo.com) y React (react.dev). También hay comunidades activas en GitHub y Stack Overflow para resolver problemas específicos."
  }
];

function FAQItemComponent({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <Card className="border-slate-200">
      <button
        onClick={onToggle}
        className="w-full text-left p-6 flex items-start justify-between hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 pr-4">{item.question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 border-t border-slate-200 text-slate-600">
          {item.answer}
        </div>
      )}
    </Card>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-slate-900">Preguntas Frecuentes</h1>
          <p className="text-lg text-slate-600 mb-8">
            Respuestas a las preguntas más comunes sobre el Generador de Código Local.
          </p>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <FAQItemComponent
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          {/* Additional Resources */}
          <section className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Recursos Adicionales</h2>
            <div className="space-y-3 text-sm text-slate-700">
              <p>
                <strong>Ollama:</strong> <a href="https://ollama.com" className="text-blue-600 hover:underline">ollama.com</a> - Descarga e instalación del motor LLM
              </p>
              <p>
                <strong>FastAPI:</strong> <a href="https://fastapi.tiangolo.com" className="text-blue-600 hover:underline">fastapi.tiangolo.com</a> - Documentación del framework Backend
              </p>
              <p>
                <strong>React:</strong> <a href="https://react.dev" className="text-blue-600 hover:underline">react.dev</a> - Documentación del framework Frontend
              </p>
              <p>
                <strong>Flutter:</strong> <a href="https://flutter.dev" className="text-blue-600 hover:underline">flutter.dev</a> - Framework para aplicaciones multiplataforma
              </p>
              <p>
                <strong>Code Llama:</strong> <a href="https://ollama.com/library/codellama" className="text-blue-600 hover:underline">ollama.com/library/codellama</a> - Documentación del modelo de IA
              </p>
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
