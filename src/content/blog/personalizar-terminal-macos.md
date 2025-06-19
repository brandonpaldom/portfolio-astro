---
title: Personaliza tu Terminal de macOS con Oh My Posh (zsh + Homebrew)
description: Aprende a personalizar tu terminal de macOS con Oh My Posh, zsh y Homebrew. Mejora tu experiencia de línea de comandos con temas y plugins.
pubDate: 2025-06-20
author: Brandon Palmeros
heroImage: "https://res.cloudinary.com/dlomynswh/image/upload/v1750287925/portfolio/blog/blog-cover-1.png"
---

La terminal predeterminada en macOS es funcional, pero ¿sabías que puedes darle un aspecto más atractivo y funcional usando herramientas avanzadas como Oh My Posh, Oh My Zsh e iTerm2? Estas herramientas te permiten personalizar fácilmente tu terminal con temas vistosos y útiles, mejorar la gestión de tu shell Zsh y optimizar la experiencia general del usuario.

Este tutorial está diseñado especialmente para principiantes y te guiará paso a paso en la instalación y configuración permanente de estas herramientas en macOS, incluyendo integración con Git para mostrar el estado del repositorio directamente en tu prompt.

## Instalación de iTerm2

iTerm2 es un emulador de terminal gratuito y de código abierto para macOS. Se considera un reemplazo avanzado de la aplicación "Terminal" que viene por defecto en los Mac, ofreciendo una gran cantidad de características adicionales y opciones de personalización que lo hacen muy popular entre desarrolladores y usuarios avanzados.

- Descarga [iTerm2](https://iterm2.com/downloads.html) desde su página oficial.
- Abre el archivo descargado e instala la aplicación arrastrándola a tu carpeta de Aplicaciones.
- Abre iTerm2 para asegurarte de que todo funciona correctamente.

## Instalación de Homebrew

Homebrew es un gestor de paquetes para macOS que facilita la instalación de software y herramientas de línea de comandos. Es esencial para instalar Oh My Zsh y Oh My Posh.

Para instalar Homebrew, abre iTerm2 y ejecuta el siguiente comando:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Una vez completada la instalación, asegúrate de que Homebrew esté correctamente añadido a tu PATH siguiendo las instrucciones que aparecen al final del proceso de instalación.

## Instalación de Git

Git es un sistema de control de versiones distribuido que te permite gestionar el código fuente de tus proyectos. Es fundamental para trabajar con repositorios y colaborar en proyectos de software.

Para instalar Git, ejecuta el siguiente comando en iTerm2:

```bash
brew install git
```

Una vez instalado, verifica que Git está correctamente instalado ejecutando:

```bash
git --version
```

Si ves la versión de Git, significa que la instalación fue exitosa.

## Instalación de Oh My Zsh

Oh My Zsh es un framework para gestionar tu configuración de Zsh, el shell por defecto en macOS. Proporciona una gran cantidad de temas y plugins que mejoran la funcionalidad y apariencia de tu terminal.

Para instalar Oh My Zsh, ejecuta el siguiente comando en iTerm2:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Este comando descargará e instalará Oh My Zsh en tu sistema. Durante la instalación, se te preguntará si deseas cambiar tu shell por defecto a Zsh; acepta para continuar.

## Instalación de Oh My Posh

Oh My Posh es una herramienta que te permite personalizar el prompt de tu terminal con temas visualmente atractivos y funcionales.

Para instalar Oh My Posh, ejecuta el siguiente comando en iTerm2:

```bash
brew install jandedobbeleer/oh-my-posh/oh-my-posh
```

Una vez instalado, puedes verificar que Oh My Posh está correctamente instalado ejecutando:

```bash
oh-my-posh --version
```

Para actualizar Oh My Posh en el futuro, simplemente ejecuta:

```bash
brew update && brew upgrade && exec zsh
```

## Instala una fuente compatible

Para que Oh My Posh funcione correctamente, necesitas una fuente compatible que soporte los caracteres especiales utilizados en los temas. Una de las más recomendadas es la fuente "Meslo".

Puedes instalar la fuente Meslo usando Homebrew con el siguiente comando:

```bash
oh-my-posh font install meslo
```

## Configuración de Oh My Posh

Ahora que tienes Oh My Posh instalado, necesitas configurar tu terminal para usarlo. Si no sabes que shell estás usando, puedes verificarlo con:

```bash
oh-my-posh get shell
```

Para configurar Oh My Posh en Zsh, abre el archivo `~/.zshrc` con tu editor de texto favorito, por ejemplo:

```bash
code ~/.zshrc
```

Agrega la siguiente línea al final del archivo:

```bash
if [ "$TERM_PROGRAM" != "Apple_Terminal" ]; then
  eval "$(oh-my-posh init zsh)"
fi
```

Guarda los cambios y cierra el archivo. Luego, recarga tu configuración de Zsh ejecutando:

```bash
exec zsh
```

Ahora deberías ver el prompt de Oh My Posh en tu terminal. Si no ves cambios inmediatos, asegúrate de que la fuente Meslo esté configurada en iTerm2:

1. Abre iTerm2.
2. Ve a `iTerm2` > `Preferences` > `Profiles`.
3. Selecciona el perfil que estás utilizando (por defecto es "Default").
4. En la pestaña `Text`, asegúrate de que la fuente esté configurada a "Meslo" o cualquier otra fuente compatible que hayas instalado.

Si llegasté hasta aquí, ¡felicidades! Has personalizado tu terminal de macOS con Oh My Zsh, Oh My Posh e iTerm2. Ahora puedes disfrutar de una experiencia de línea de comandos más atractiva y funcional.

## Configuración en Visual Studio Code

Si utilizas Visual Studio Code, puedes configurar la terminal integrada para que use Oh My Posh. Abre la configuración de VS Code (`Cmd + ,`) y agrega la siguiente línea a tu archivo de configuración `settings.json`:

```json
"terminal.integrated.fontFamily": "MesloLGS NF"
```

Esto asegurará que la terminal integrada de VS Code utilice la misma fuente que configuraste en iTerm2, permitiendo que los temas de Oh My Posh se muestren correctamente.

## Solución de problemas comunes

Si encuentras problemas al configurar Oh My Posh, aquí hay algunas soluciones comunes:

- **Oh My Posh no se muestra correctamente**: Asegúrate de que estás utilizando una fuente compatible y que la has configurado correctamente en iTerm2.
- **Oh My Posh no se carga al iniciar Zsh**: Verifica que la línea de inicialización de Oh My Posh esté correctamente añadida a tu archivo `~/.zshrc` y que hayas recargado la configuración con el comando `exec zsh`.
- **Problemas con Git**: Asegúrate de que Git esté instalado correctamente y que tu repositorio esté inicializado. Puedes verificar el estado del repositorio con el comando `git status`.

## Conclusión

Con esta guía, has aprendido a personalizar tu terminal de macOS utilizando Oh My Posh, Oh My Zsh e iTerm2. Estas herramientas no solo mejoran la apariencia de tu terminal, sino que también añaden funcionalidades útiles que pueden hacer tu trabajo más eficiente y agradable.
