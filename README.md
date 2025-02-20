# Codec Multimedia - Sitio Web Corporativo

## 📝 Descripción
Sitio web corporativo para Codec Multimedia, una empresa especializada en servicios de producción audiovisual y multimedia. El sitio está construido con React, TypeScript y Tailwind CSS, ofreciendo una experiencia de usuario moderna y responsive.

## 🚀 Características Principales

### Página de Inicio
- Diseño moderno con animaciones suaves
- Hero section con imagen animada
- Sección de servicios interactiva
- Botón de WhatsApp flotante
- Integración con redes sociales
- Diseño totalmente responsive

### Sección Nosotros
- Presentación del equipo
- Historia de la empresa
- Valores corporativos
- Galería de imágenes del equipo

### Blog
- Sistema de gestión de contenido
- Galería de imágenes
- Panel de administración protegido
- Visualización de posts con imágenes

### Contacto
- Formulario de contacto directo
- Información de contacto interactiva
- Mapa de ubicación
- Horarios de atención

## 🛠️ Tecnologías Utilizadas

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Supabase (Base de datos y autenticación)
- React Router
- Lucide React (Iconos)

## 📦 Estructura del Proyecto

```
src/
├── components/        # Componentes React
├── lib/              # Utilidades y configuración
├── styles/           # Estilos CSS
└── types/            # Tipos TypeScript

public/              # Archivos estáticos
```

## 🔧 Instalación y Uso

1. Clonar el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
Crear archivo `.env` con:
```
VITE_SUPABASE_URL=tu_url_de_supabase
VITE_SUPABASE_ANON_KEY=tu_anon_key
```

4. Iniciar en desarrollo:
```bash
npm run dev
```

5. Construir para producción:
```bash
npm run build
```

## 📸 Imágenes de Alta Calidad

Las imágenes utilizadas en el sitio provienen de Unsplash. Para garantizar la mejor calidad:

### Hero Section
```
https://images.unsplash.com/photo-1601574968106-b312ac309953?w=1920&auto=format&fit=crop&q=100
```

### Servicios
- Diseño Gráfico:
```
https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=1920&auto=format&fit=crop&q=100
```
- Producción Audiovisual:
```
https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&auto=format&fit=crop&q=100
```
- Transmisión en Vivo:
```
https://images.unsplash.com/photo-1505673542670-a5e3ff5b14a3?w=1920&auto=format&fit=crop&q=100
```
- Servicio de Drone:
```
https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1920&auto=format&fit=crop&q=100
```
- Producción de Audio:
```
https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1920&auto=format&fit=crop&q=100
```

### Equipo
```
https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop&q=100
```

## 📋 Configuración para Producción en Hostinger

1. Acceder al panel de Hostinger
2. Crear un nuevo sitio web
3. Subir los archivos de la carpeta `dist` después de ejecutar `npm run build`
4. Configurar el dominio y SSL

### Configuración del dominio:
1. Agregar dominio en Hostinger
2. Configurar registros DNS:
   - A Record: @ -> IP del servidor
   - CNAME: www -> @

### Optimización:
- Habilitar GZIP compression
- Configurar cache del navegador
- Habilitar SSL/HTTPS

## 🔐 Seguridad

- Autenticación segura con Supabase
- Políticas de seguridad de contenido (CSP)
- Protección contra XSS
- Rate limiting en APIs
- Validación de datos

## 📱 Responsive Design

El sitio está optimizado para:
- Móviles (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Pantallas grandes (1280px+)

## 🤝 Contribución

1. Fork del repositorio
2. Crear rama feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit cambios (`git commit -m 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Crear Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.