# MiauDemia - Documentación del Sitio Web

## Descripción General del Proyecto

**MiauDemia** es un sitio web estático y sencillo para una institución educativa que ofrece una variedad de servicios. El sitio está construido con HTML, CSS y JavaScript, y aprovecha el framework Bootstrap 5 para un diseño responsivo.

## Tecnologías Utilizadas

*   **HTML5:** Para la estructura básica del sitio web.
*   **CSS3:** Para el diseño, incluyendo animaciones personalizadas, gradientes y diseños responsivos.
*   **JavaScript (ES6):** Para la carga dinámica de contenido y funcionalidades interactivas.
*   **Bootstrap 5:** Utilizado para el sistema de rejilla responsivo, los modales y la barra de navegación `offcanvas`.

## Características Principales

*   **Estructura Basada en Componentes:**
    *   La **barra de navegación** y el **pie de página** se cargan dinámicamente desde archivos HTML externos (`navbar.html` y `footer.html`) utilizando la API `fetch`. Este enfoque hace que el código sea más modular y fácil de mantener.
*   **Diseño Responsivo:**
    *   El sitio web es totalmente responsivo y se adapta a diferentes tamaños de pantalla, desde teléfonos móviles hasta ordenadores de escritorio.
    *   La barra de navegación se colapsa en un menú `offcanvas` en pantallas más pequeñas.
*   **Elementos Interactivos:**
    *   **Modales:** La sección "Materias" utiliza modales de Bootstrap para mostrar información detallada de cada categoría de asignatura.
    *   **Animaciones CSS:** El sitio incorpora diversas animaciones, como efectos de aparición gradual y transformaciones, que se activan a medida que el usuario se desplaza, mejorando la experiencia visual.
*   **Contacto y Ubicación:**
    *   Un **formulario de contacto** funcional permite a los usuarios enviar consultas.
    *   Un **mapa de Google Maps** integrado muestra la ubicación física de la institución.

## Estructura de Archivos

```
.
├── ico/
│   ├── facebook.png
│   ├── instagram.png
│   └── ... (otros iconos)
├── images/
│   ├── city1.png
│   ├── LogoMD.png
│   └── ... (otras imágenes)
├── index.html
├── navbar.html
├── footer.html
├── trabajo.html
├── profesores.html
├── styles.css
├── script.js
└── README.md
```

### Descripción de Archivos

*   **`index.html`:** El punto de entrada principal del sitio web.
*   **`navbar.html`:** Contiene la estructura HTML de la barra de navegación.
*   **`footer.html`:** Contiene la estructura HTML del pie de página.
*   **`trabajo.html`:** Una página separada, probablemente para oportunidades laborales o contenido relacionado.
*   **`profesores.html`:** Pàgina dedicada a los profesores.
*   **`styles.css`:** La hoja de estilos principal, que contiene todos los estilos personalizados y animaciones.
*   **`script.js`:** El archivo principal de JavaScript, responsable de:
    *   Cargar dinámicamente la barra de navegación y el pie de página.
    *   Implementar las animaciones que se activan con el scroll.
    *   Deshabilitar el clic derecho y la selección de texto para una experiencia de usuario más controlada.
*   **`ico/` y `images/`:** Carpetas que contienen los iconos e imágenes utilizados en todo el sitio.

## Cómo Funciona

1.  **Carga de Contenido Dinámico:** Cuando el DOM está completamente cargado, `script.js` utiliza la API `fetch` para cargar el contenido de `navbar.html` y `footer.html` en los elementos `div` con los IDs `navbar` y `footer`, respectivamente.
2.  **Animaciones con Scroll:** La API `IntersectionObserver` se utiliza para detectar cuándo un elemento con la clase `hidden` entra en la ventana gráfica. Cuando lo hace, se añade la clase `visible`, activando una animación CSS.
3.  **Modales Interactivos:** Las tarjetas de "Materias" están vinculadas a modales de Bootstrap. Al hacer clic en una tarjeta, se abre el modal correspondiente con más información.

## Personalización

*   **Estilos:** Para cambiar los colores, fuentes u otros aspectos visuales, edita el archivo `styles.css`. La paleta de colores está definida en la pseudoclase `:root`.
*   **Contenido:** Para modificar el contenido de la página principal, edita `index.html`. Para la barra de navegación y el pie de página, edita `navbar.html` y `footer.html`.
*   **Funcionalidad:** Para añadir o cambiar funcionalidades controladas por JavaScript, modifica el archivo `script.js`.

## Profesores

### Mtra. Mijal Nuñez
*   **Experiencia Docente:** Más de 5 años de experiencia en la enseñanza recreativa y didactica en niños del nivel incial y primario. Especializada en la programacion ludico en Scratch, Python y App Inventor. Actualmente Maestra en la red internacional de clubes de programación CoderDojo
*   **Titulación:** Tecnica en desarrollo de software por la Tecnicatura Superior Cordoba. Diploma en el curso de "Nuevas Infancias".

### Prof. Miqueas Drovetta
*   **Experiencia Docente:** Experiencia en la enseñanza de logica y electronica, con un enfoque en el aprendizaje práctico y experimental. 3 años de experiencia en la industria tech y desempeñando actualmente el cargo de profesor en la catedra de "Elementos de Matematica y Logica"
*   **Titulación:** Tecnico Electronico y desarrollador de software por el colegio IPET N°250 y el Instituto Tecnico Superior Córdoba.
