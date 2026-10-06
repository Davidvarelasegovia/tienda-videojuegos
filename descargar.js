import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rutaArchivoData = path.join(__dirname, 'src', 'data', 'games.js'); 
const carpetaDestinoImagenes = path.join(__dirname, 'public', 'images', 'games');

async function iniciar() {
    try {
        // Leemos el archivo como texto plano para evitar errores de compilación/require de Node
        const contenidoTexto = fs.readFileSync(rutaArchivoData, 'utf-8');

        // Extraer el arreglo usando expresiones regulares
        const inicioArray = contenidoTexto.indexOf('[');
        const finArray = contenidoTexto.lastIndexOf(']');

        if (inicioArray === -1 || finArray === -1) {
            console.error("❌ No se pudo encontrar la lista de juegos dentro de src/data/games.js");
            return;
        }

        const textoArray = contenidoTexto.substring(inicioArray, finArray + 1);
        
        // Evaluar el texto de forma segura en un entorno aislado para convertirlo en un Array real
        const games = new Function(`return ${textoArray}`)();

        if (!games || !Array.isArray(games)) {
            console.error("❌ Los datos extraídos no tienen un formato de lista válido.");
            return;
        }

        // Crear la carpeta si no existe
        if (!fs.existsSync(carpetaDestinoImagenes)) {
            fs.mkdirSync(carpetaDestinoImagenes, { recursive: true });
        }

        console.log(`🚀 Script iniciado. Se procesarán ${games.length} juegos de forma segura...`);
        const nuevosJuegos = [];

        for (let i = 0; i < games.length; i++) {
            const juego = { ...games[i] };
            const nombreArchivo = `${juego.id}.png`;
            
            console.log(`[${i + 1}/${games.length}] Descargando imagen de: ${juego.title}...`);
            
            const rutaFinal = path.join(carpetaDestinoImagenes, nombreArchivo);
            
            try {
                const response = await axios({
                    url: juego.image,
                    method: 'GET',
                    responseType: 'stream'
                });

                await new Promise((resolve, reject) => {
                    const writer = fs.createWriteStream(rutaFinal);
                    response.data.pipe(writer);
                    writer.on('finish', resolve);
                    writer.on('error', reject);
                });
            } catch (imgError) {
                console.error(`⚠️ No se pudo descargar la imagen de ${juego.title}: ${imgError.message}`);
            }

            // Asignar la ruta local para tu frontend de React
            juego.image = `/images/games/${nombreArchivo}`;
            nuevosJuegos.push(juego);
        }

        console.log('✍️ Actualizando tu archivo src/data/games.js...');
        
        // Reescribimos el archivo manteniendo la sintaxis nativa ES Modules de tu app
        const contenidoFinal = `const games = ${JSON.stringify(nuevosJuegos, null, 2)};\n\nexport { games };\n`;
        fs.writeFileSync(rutaArchivoData, contenidoFinal, 'utf-8');
        
        console.log('✅ ¡Proceso finalizado con éxito!');
        console.log('🖼️  Imágenes descargadas en: public/images/games/');
        console.log('📄 Archivo games.js actualizado para producción.');

    } catch (error) {
        console.error("❌ Hubo un error durante la ejecución del script:", error.message);
    }
}

iniciar();
