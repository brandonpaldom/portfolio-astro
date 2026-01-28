---
title: "CleanCommit: Genera mensajes de commit profesionales con IA en segundos"
description: "Descubre CleanCommit, mi extensión para VS Code que genera mensajes de commit siguiendo la especificación Conventional Commits usando IA. Compatible con VS Code, Cursor, Windsurf y más."
pubDate: 2026-01-28
author: Brandon Palmeros
tags: ["vscode", "extension", "git", "ia", "productividad", "conventional-commits"]
heroImage: "https://res.cloudinary.com/dlomynswh/image/upload/v1769643985/portfolio/blog/xNw4Xj9AT3GPB3olnKyF.jpg"
---

## El problema que todos conocemos

¿Cuántas veces te has quedado mirando la pantalla pensando qué escribir en tu mensaje de commit? ¿O peor aún, has terminado con historiales de Git llenos de mensajes como "fix", "update", o "cambios"?

Como desarrolladores, pasamos más tiempo del que nos gustaría admitir intentando describir nuestros cambios de manera clara y consistente. Y cuando trabajamos en equipo, un historial de commits desordenado puede volverse un verdadero dolor de cabeza.

Por eso creé **CleanCommit**.

## ¿Qué es CleanCommit?

**CleanCommit** es una extensión para VS Code (y editores compatibles como Cursor, Windsurf y VSCodium) que utiliza inteligencia artificial para generar mensajes de commit automáticamente. Lo mejor de todo: sigue la especificación [Conventional Commits](https://www.conventionalcommits.org/), asegurando que tus mensajes sean claros, consistentes y útiles para tu equipo.

![CleanCommit Demo](https://res.cloudinary.com/dlomynswh/image/upload/v1768015039/clean-commit/Captura_de_pantalla_2026-01-09_a_la_s_9.16.22_p.m..png)

## Características principales

### Generación automática con IA

Con un solo clic, CleanCommit analiza tus cambios staged y genera un mensaje de commit descriptivo y profesional. No más bloqueos creativos ni mensajes vagos.

### Múltiples proveedores de IA

No te limites a un solo modelo. CleanCommit soporta:

| Proveedor                       | Modelo                        | Precio                   |
| ------------------------------- | ----------------------------- | ------------------------ |
| **Google Gemini** (por defecto) | `gemini-2.5-flash`            | Tier gratuito disponible |
| **OpenAI**                      | `gpt-4o-mini`                 | ~$0.15/1M tokens         |
| **Groq**                        | `llama-3.3-70b-versatile`     | Tier gratuito disponible |
| **OpenRouter**                  | `google/gemini-2.0-flash-001` | Pay-as-you-go            |

Puedes cambiar entre proveedores según tus necesidades y presupuesto.

### Conventional Commits incluido

Todos los mensajes generados siguen el formato estándar:

- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `refactor`: Refactorización de código
- `style`: Cambios de formato
- `test`: Cambios en tests
- `chore`: Tareas de mantenimiento

### Integración completa con Git

No necesitas salir de VS Code para gestionar tus commits:

- **Panel lateral dedicado**: Ve todos tus cambios en un solo lugar
- **Stage/Unstage**: Gestiona tus archivos directamente desde el panel
- **Descartar cambios**: Revierte modificaciones con confirmación
- **Commit con un clic**: Crea tu commit sin escribir comandos

### Soporte multilenguaje

Genera mensajes en **inglés** o **español** según las preferencias de tu equipo o proyecto.

### Seguridad y privacidad

- Tus API keys se almacenan de forma segura en el almacenamiento secreto de tu editor
- Solo se envían los cambios staged al proveedor de IA seleccionado
- No recolectamos datos de uso ni telemetría

## Instalación

### Desde el Marketplace

1. Abre la vista de Extensiones en tu editor (`Ctrl+Shift+X` / `Cmd+Shift+X`)
2. Busca **CleanCommit**
3. Haz clic en **Installar**

**Enlaces directos:**

- [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=brandonpalmeros.clean-commit)
- [Open VSX Registry](https://open-vsx.org/extension/brandonpalmeros/clean-commit)

### Desde la línea de comandos

```bash
code --install-extension brandonpalmeros.clean-commit
```

## Cómo empezar

### 1. Obtén tu API Key

Elige un proveedor y obtén tu API key:

- **Google Gemini**: [Google AI Studio](https://aistudio.google.com/apikey) (Gratis)
- **OpenAI**: [OpenAI Platform](https://platform.openai.com/api-keys)
- **Groq**: [Groq Console](https://console.groq.com/keys) (Gratis)
- **OpenRouter**: [OpenRouter Keys](https://openrouter.ai/keys)

### 2. Configura tu API Key

1. Abre el panel de CleanCommit desde la barra lateral (busca el icono de CleanCommit)
2. Haz clic en **Set API Key**
3. Pega tu API key
4. Listo

### 3. Genera tu primer commit

1. Stagea tus cambios (usa Git o el botón **Stage All** en el panel)
2. Haz clic en **Generate** en el sidebar de CleanCommit
3. Revisa el mensaje generado
4. Haz clic en **Commit** para crear el commit

## Configuración avanzada

Personaliza CleanCommit según tus necesidades en la configuración de tu editor (`Ctrl+,` / `Cmd+,`):

| Configuración             | Descripción                                                | Valor por defecto |
| ------------------------- | ---------------------------------------------------------- | ----------------- |
| `cleancommit.provider`    | Proveedor de IA (`gemini`, `openai`, `groq`, `openrouter`) | `gemini`          |
| `cleancommit.language`    | Idioma (`en` o `es`)                                       | `en`              |
| `cleancommit.includeBody` | Incluir cuerpo detallado en el mensaje                     | `false`           |
| `cleancommit.maxDiffSize` | Tamaño máximo del diff para análisis                       | `4000`            |

## Comandos disponibles

Accede a estos comandos desde la Paleta de Comandos (`Ctrl+Shift+P` / `Cmd+Shift+P`):

- `CleanCommit: Generate Commit Message` - Genera mensaje para cambios staged
- `CleanCommit: Set API Key` - Configura o actualiza tu API key

## Compatibilidad

CleanCommit funciona perfectamente con:

- VS Code 1.90.0+
- Cursor
- Windsurf
- VSCodium
- Cualquier editor basado en VS Code

## ¿Por qué usar CleanCommit?

### Ahorra tiempo

Deja de perder minutos pensando en cómo describir tus cambios. CleanCommit lo hace en segundos.

### Historial limpio

Mantén un historial de Git profesional y fácil de entender, especialmente útil cuando trabajas en equipo.

### Consistencia garantizada

Todos los mensajes siguen el mismo formato, haciendo que tu repositorio sea más mantenible.

### Opciones gratuitas disponibles

Con Google Gemini y Groq ofreciendo tiers gratuitos, puedes empezar sin gastar un centavo.

## Solución de problemas comunes

### "No staged changes found"

Asegúrate de haber stageado algunos archivos antes de generar el mensaje. Usa `git add` o el botón **Stage All**.

### "API key not set"

Haz clic en **Set API Key** en el sidebar o ejecuta el comando `CleanCommit: Set API Key`. Asegúrate de configurar la key para el proveedor correcto.

### "Rate limit exceeded"

- **Gemini/Groq**: Espera un momento e intenta de nuevo, o cambia a otro proveedor
- **OpenAI**: Verifica tu facturación en [platform.openai.com](https://platform.openai.com/account/billing)

## Contribuye y reporta issues

¿Encontraste un bug o tienes una idea para mejorar CleanCommit?

- [Reportar un issue](https://github.com/brandonpaldom/clean-commit/issues)
- [Ver código fuente](https://github.com/brandonpaldom/clean-commit)

## Conclusión

CleanCommit nació de mi propia frustración al escribir mensajes de commit. Como desarrollador que valora la calidad del código y la colaboración en equipo, sabía que necesitaba una herramienta que me ayudara a mantener un historial de Git profesional sin sacrificar mi tiempo.

Después de meses de uso personal y mejoras constantes, decidí compartirla con la comunidad. Espero que te sea tan útil como lo es para mí.

**¿Listo para olvidarte de los commits vagos?** Instala CleanCommit hoy y transforma tu flujo de trabajo con Git.

---

¿Tienes preguntas o sugerencias? Encuéntrame en [Twitter/X](https://twitter.com/brandonpalmeros) o abre un issue en el [repositorio](https://github.com/brandonpaldom/clean-commit).

**Happy committing!**
