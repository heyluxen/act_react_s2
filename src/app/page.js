import TarjetaGlobal from './components/TarjetaGlobal';
import TarjetaModulo from './components/TarjetaModulo';
import TarjetaDinamica from './components/TarjetaDinamica';
import TarjetaTailwind from './components/TarjetaTailwind';

export default function Home() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Actividad de Estilizado en Next.js</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-2">1. CSS Global</h2>
        <TarjetaGlobal titulo="Global Card" contenido="Texto con estilos globales" color="blue" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">2. CSS Modules</h2>
        <TarjetaModulo nombre="Tarjeta Módulo" descripcion="Usando CSS Modules" categoria="Demo" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">3. Estilos en Línea</h2>
        <TarjetaDinamica titulo="Dinámica" contenido="Props controlan estilos" colorFondo="#f0f0f0" colorTexto="#333" ancho="250px" activo={true} />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">4. Tailwind CSS</h2>
        <TarjetaTailwind titulo="Tailwind Card" descripcion="Con clases utilitarias" etiqueta="Next.js" imagen="https://via.placeholder.com/150" />
      </section>
    </main>
  );
}
