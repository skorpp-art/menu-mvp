
# Fuego & Sal - Menú Digital Interactivo

Este proyecto es un prototipo funcional (MVP) de un menú digital interactivo para el restaurante ficticio "Fuego & Sal". Está diseñado como una Aplicación Web Progresiva (PWA), lo que significa que es rápido, confiable y puede funcionar sin conexión a internet.

El objetivo principal es reemplazar los menús físicos por una experiencia digital que no solo sea funcional, sino que también actúe como una herramienta de marketing y ventas, aplicando principios de ingeniería de menús.

## ✨ Características Principales

- **Mobile-First:** Diseñado principalmente para ser usado en teléfonos móviles.
- **100% Responsivo:** Se adapta a cualquier tamaño de pantalla, desde móviles hasta tablets.
- **Offline-First:** Gracias al uso de un Service Worker, el menú carga instantáneamente y funciona perfectamente incluso sin conexión a internet una vez que ha sido visitado por primera vez.
- **Carga Dinámica:** El contenido del menú se carga desde un archivo `menu.json`, permitiendo cambios rápidos sin necesidad de modificar el código principal.
- **Multilingüe:** Preparado para soportar español e inglés con un solo clic.
- **Ingeniería de Menús Aplicada:** La disposición y descripción de los platos sigue una estrategia para maximizar la rentabilidad, destacando platos "Estrella" y "Puzzle".

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (con variables, Flexbox y Grid)
- JavaScript (Vanilla JS, ES6+)
- Service Workers API (para la funcionalidad offline)
- Manifest.json (para PWA)

## 🚀 Cómo Ponerlo en Marcha

Para ejecutar este proyecto en tu máquina local, necesitas un pequeño servidor web. No funcionará si abres el archivo `index.html` directamente en el navegador.

1.  **Clona o descarga este repositorio.**

2.  **Abre una terminal** en la carpeta raíz del proyecto.

3.  **Inicia el servidor local.** Si tienes Python 3 instalado, este es el comando más sencillo:
    ```bash
    python -m http.server
    ```

4.  **Abre tu navegador** y navega a la siguiente dirección:
    [http://localhost:8000](http://localhost:8000)

¡Y listo! Deberías ver el menú digital funcionando.

## 📂 Estructura de Archivos

```
/
├── index.html        # Estructura principal de la aplicación
├── style.css         # Estilos visuales
├── app.js            # Lógica de la aplicación (carga de datos, renderizado)
├── menu.json         # Base de datos del menú (fácilmente editable)
├── sw.js             # Service Worker para el modo offline
├── manifest.json     # Configuración de la PWA
├── README.md         # Este archivo
└── .gitignore        # Archivos a ignorar por Git
```
