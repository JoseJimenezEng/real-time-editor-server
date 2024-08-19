# Real-Time Text Editor

Este proyecto es una aplicación de edición de texto en tiempo real que permite a varios usuarios colaborar en un documento simultáneamente. Los usuarios pueden unirse a salas (rooms) con un nombre de usuario y un room,. Dentro de cada sala, todos ls participantes pueden ver las ediciones de texto en tiempo real. La aplicación permite a los usuarios personalizar el texto con diferentes tamaños, colores, fuentes, y aplicar estilos.

## Características

### Edición en tiempo real: 
Las actualizaciones de texto se sincronizan en tiempo real entre todos los usuarios en una sala usando WebSocekts.

### Salas de colaboración: 
Los usuarios pueden crear o unirse a salas para trabajar juntos en diferentes proyectos.

### Personalización del texto: 
Opciones para cambiar el tamaño de la fuente, color, fuente,, y cursiva y subrayar.

### Visualización de usuarios activos: 
Muestra los usuarios conectados en la misma sala.

### Diseño responsivo: 
Interfaz de usuario construida con Bootstrap para una experiencia fluida para cualquiera.

## Instalación y Configuración
Requisitos: Node.js, npm o yarn, React (yo lo realicé con Vite, pero no debería haber problema con CREATE REACT APP), Bootstrap.

Clonar el repositorio
```
git clone https://github.com/JoseJimenezEng/real-time-editor-server.git

cd real-time-editor-server
```
## Configurar variables de entorno:
Crea un archivo .env en la raíz del directorio server y define la siguiente variable:
```
SERVER_RTEDIT_PORT=4000
```
Ejecutar el servidor:
```
npm start
```
