import { ArrowRight, Clock, Gift, Heart, Mail, MapPin, Phone, Smile, Sparkles, Star } from "lucide-react"
import { useState } from "react"

function App() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  console.log(hoveredCard)

  const PRODUCTS = [
  {
    id: 1,
    name: "Capibara",
    price: "50",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xt9uiwUozRRTKUpmx1jCbfrCGDVDAq.png",
  },
  {
    id: 2,
    name: "Luigi",
    price: "50",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qGfdS2iVb9vIu2QzH9Q3jdf4YB43wa.png",
  },
  {
    id: 3,
    name: "Asesino Capuchino",
    price: "50",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jutrmZf61yFmEdq7t1rqgeZLkFCfyY.png",
  },
  {
    id: 4,
    name: "Ballerina Capuchina",
    price: "50",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YH1X3lEcc1xIazTKNiPjP1UJIlACOx.png",
  },
  {
    id: 5,
    name: "Llama",
    price: "50",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EzhLD1TcWQPEPccMjQAWg72RaqiBPk.png",
  },
  {
    id: 6,
    name: "Tralelo Tralala",
    price: "50",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-keC7GpLFPaFlzqIVjroWXJ99Twehhr.png",
  },
  {
    id: 7,
    name: "Bluey",
    price: "50",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4Yrt51JrLXXjtDpjF16IWbqQjM2lQV.png",
  },
  {
    id: 8,
    name: "Plim Plim",
    price: "50",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fZ60nkRIk8dmnDds0qCRtT051KGQ0s.png",
  },
  {
    id: 9,
    name: "Rana René",
    price: "50",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bakRMQmq663hw7UDzQLK2JWHjTk7dG.png",
  },
]

const WHATSAPP_NUMBER = "51994023629"

const generateWhatsAppMessage = (product: (typeof PRODUCTS)[0]) => {
  const message = `Hola! Me interesa alquilar el disfraz de *${product.name}*\n\nPrecio: S/ ${product.price} por día\n\n¿Cuál es la disponibilidad?`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
  return (
   <div className="min-h-screen bg-white font-comic">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-xl border-b-4 border-[#E74C3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mu%C3%B1efes_logo-fnoDXUtz2RN4TnYulgCNmygj1I6AlQ.png"
              alt="MUNEFEST Logo"
              className="h-14 w-auto hover:scale-110 transition-transform"
            />
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#inicio" className="text-[#001F5C] hover:text-[#E74C3C] font-bold text-lg transition-colors">
              Inicio
            </a>
            <a href="#catalogo" className="text-[#001F5C] hover:text-[#E74C3C] font-bold text-lg transition-colors">
              Catálogo
            </a>
            <a
              href="#como-funciona"
              className="text-[#001F5C] hover:text-[#E74C3C] font-bold text-lg transition-colors"
            >
              ¿Cómo funciona?
            </a>
            <a href="#contacto" className="text-[#001F5C] hover:text-[#E74C3C] font-bold text-lg transition-colors">
              Contacto
            </a>
          </div>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola!%20Me%20interesa%20alquilar%20un%20disfraz`}>
            <button className="bg-[#E74C3C] hover:bg-[#D63C2D] text-white rounded-full px-8 font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Alquilar
            </button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-gradient-to-br from-[#001F5C] via-[#003A99] to-[#001F5C] text-white py-32 px-4"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-[#E74C3C] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#E74C3C] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-block bg-[#E74C3C]/20 border border-[#E74C3C] text-[#E74C3C] px-6 py-2 rounded-full font-bold mb-6 text-lg">
              ✨ Diversión Garantizada
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight text-balance">Haz Magia en tu Evento</h1>
            <p className="text-2xl text-blue-100 mb-8 leading-relaxed font-semibold">
              Disfraces de personajes que transforman momentos ordinarios en recuerdos extraordinarios.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#catalogo">
                <button className="cursor-pointer  bg-[#E74C3C] hover:bg-[#D63C2D] text-white rounded-full px-8 py-6 text-lg font-bold transition-all hover:scale-110 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Ver Catálogo <ArrowRight className="w-5 h-5" />
                </button>
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="">
                <button
                  className="w-fit cursor-pointer flex items-center gap-2 border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-bold bg-transparent transition-all hover:scale-110"
                >
                  <Phone className="w-5 h-5 mr-2" /> 
                  <span>Contactar</span>
                </button>
              </a>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="bg-gradient-to-br from-[#E74C3C]/30 to-[#001F5C]/30 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 shadow-2xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RryvXQpMJQc61pmXjmMY3ANcfDgUAL.png"
                alt="Disfraces de personajes"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="py-24 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-[#001F5C] mb-4">¿Cómo Funciona?</h2>
            <p className="text-2xl text-gray-600 font-bold">Cuatro pasos simples hacia la diversión</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, num: "1", title: "Explora", desc: "Descubre nuestros disfraces" },
              { icon: Gift, num: "2", title: "Elige", desc: "Selecciona tu favorito" },
              { icon: Clock, num: "3", title: "Reserva", desc: "Confirma tu fecha" },
              { icon: Heart, num: "4", title: "Disfruta", desc: "¡A divertirse!" },
            ].map((step, idx) => (
              <div key={idx} className="relative group">
                {idx < 3 && (
                  <div className="hidden md:block absolute top-24 -right-3 w-6 h-1 bg-gradient-to-r from-[#E74C3C] to-transparent"></div>
                )}
                <div className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 p-8 rounded-3xl hover:-translate-y-4 group-hover:border-2 group-hover:border-[#E74C3C] h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#E74C3C] to-[#D63C2D] rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <step.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-[#001F5C] text-center mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-center font-semibold leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalogo" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black text-[#001F5C] mb-4">Nuestro Catálogo</h2>
            <p className="text-2xl text-gray-600 font-bold">Elige tu personaje favorito</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map((product, idx) => (
              <a
                key={product.id}
                href={generateWhatsAppMessage(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div
                  className="bg-white border-2 border-gray-200 shadow-xl hover:shadow-2xl hover:-translate-y-6 transition-all duration-300 overflow-hidden rounded-3xl group cursor-pointer h-full flex flex-col hover:border-[#E74C3C]"
                  onMouseEnter={() => setHoveredCard(product.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    animation: `slideUp 0.6s ease-out ${idx * 60}ms both`,
                  }}
                >
                  <div className="relative overflow-hidden bg-gradient-to-br from-[#001F5C]/5 via-[#E74C3C]/5 to-blue-50 h-80 flex-shrink-0 flex items-center justify-center">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-125 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-8">
                                          </div>
                  </div>

                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-black text-[#001F5C] mb-2 group-hover:text-[#E74C3C] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm font-semibold">Disfraz premium para eventos</p>
                    </div>

                    <div className="space-y-4 mt-6">
                      <div className="flex items-baseline gap-2 bg-gradient-to-r from-[#E74C3C]/15 to-[#D63C2D]/15 p-4 rounded-2xl border-2 border-[#E74C3C]/30">
                        <span className="text-4xl font-black text-[#E74C3C]">S/ {product.price}</span>
                        <span className="text-gray-600 text-sm font-bold">por día</span>
                      </div>
                      <button className="w-full cursor-pointer bg-gradient-to-r from-[#E74C3C] to-[#D63C2D] hover:from-[#D63C2D] hover:to-[#C02D1D] text-white rounded-full font-black py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        Alquilar Ahora
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-[#001F5C] mb-4">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-2xl text-gray-600 font-bold">Miles de eventos felices en Lima</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María García",
                role: "Mamá de Sofía",
                text: "¡Excelente servicio! El disfraz llegó a tiempo y mi hija fue la estrella de la fiesta.",
              },
              {
                name: "Carlos López",
                role: "Organizador de Eventos",
                text: "MUNEFEST es mi aliado perfecto para eventos corporativos. Profesionales y confiables.",
              },
              {
                name: "Ana Martínez",
                role: "Directora de Colegio",
                text: "Los disfraces son de excelente calidad. Los niños se divirtieron muchísimo.",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white border-l-4 border-[#E74C3C] shadow-xl hover:shadow-2xl transition-all duration-300 p-8 rounded-2xl hover:-translate-y-4"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic font-semibold leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-black text-[#001F5C]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 font-semibold">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contacto"
        className="bg-gradient-to-r from-[#001F5C] to-[#003A99] text-white py-24 px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E74C3C] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-6">¿Listo para la Diversión?</h2>
          <p className="text-2xl text-blue-100 mb-10 font-bold">Contacta con nosotros y reserva tu disfraz hoy</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola!%20Me%20interesa%20alquilar%20un%20disfraz`}>
              <button className="bg-[#E74C3C] hover:bg-[#D63C2D] text-white rounded-full px-10 py-6 text-lg font-black transition-all hover:scale-110 shadow-lg hover:shadow-xl flex items-center gap-2">
                <Smile className="w-6 h-6" /> Alquilar Ahora
              </button>
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`}>
              <button
                className="border-2 border-white text-white hover:bg-white/10 rounded-full px-10 py-6 text-lg font-black bg-transparent transition-all hover:scale-110"
              >
                <Phone className="w-6 h-6 mr-2" /> +51 994 023 629
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001F5C] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-black mb-4">MUNEFEST</h3>
              <p className="text-blue-100 font-semibold leading-relaxed">
                Alquiler de disfraces y muñecos para eventos inolvidables en Lima.
              </p>
            </div>
            <div>
              <h4 className="font-black mb-4 text-lg">Enlaces</h4>
              <ul className="space-y-3 text-blue-100 font-semibold">
                <li>
                  <a href="#inicio" className="hover:text-[#E74C3C] transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#catalogo" className="hover:text-[#E74C3C] transition-colors">
                    Catálogo
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="hover:text-[#E74C3C] transition-colors">
                    ¿Cómo funciona?
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4 text-lg">Contacto</h4>
              <ul className="space-y-3 text-blue-100 font-semibold">
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5" /> +51 994 023 629
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5" /> info@munefest.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> Lima, Perú
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4 text-lg">Síguenos</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-[#E74C3C] rounded-full flex items-center justify-center hover:bg-[#D63C2D] transition-colors font-bold text-lg"
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-[#E74C3C] rounded-full flex items-center justify-center hover:bg-[#D63C2D] transition-colors font-bold text-lg"
                >
                  📷
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-[#E74C3C] rounded-full flex items-center justify-center hover:bg-[#D63C2D] transition-colors font-bold text-lg"
                >
                  𝕏
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-blue-100 font-semibold">
            <p>© 2025 MUNEFEST. Todos los derechos reservados. 🎉</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
