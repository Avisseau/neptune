# Code

## Settings

Preferences > Settings > settings.json
```json
{
	"workbench.colorTheme": "Material Theme",
	"workbench.iconTheme": "material-icon-theme",
	"editor.fontFamily": "Fira Code",
	"editor.fontLigatures": true,
	"editor.lineHeight": 22,
	"editor.minimap.enabled": false,
	"terminal.integrated.shell.osx": "/bin/zsh",
	"window.newWindowDimensions": "maximized",
	"editor.wordWrapColumn": 80,
	"editor.tabSize": 4,
	"editor.tabCompletion": "on"
}
```

Preferences > User Snippets > html.json
```json
{
	"Image": {
		"prefix": "k_img",
		"body": [
			"<picture>",
			"    <source srcset=\"<%= require('./images/image.webp') %>\" type=\"image/webp\">",
			"    <source srcset=\"<%= require('./images/image.jpg') %>\" type=\"image/jpg\">",
			"    <img src=\"<%= require('./images/image.jpg') %>\" alt=\"\">",
			"</picture>"
		],
		"description": "Add picture with webp support."
	}
}
```

Preferences > User Snippets > scss.json
```json
{
	"Background-image": {
		"prefix": "k_img",
		"body": [
			".class {",
			"    width: 100%;",
			"    height: 20rem;",
			"    background-size: cover;",
			"    background-repeat: no-repeat;",
			"    background-position: center center;",
			"    html.no-webp & {",
			"        background-image: url('../images/image.jpg');",
			"    }",
			"    html.webp & {",
			"        background-image: url('../images/image.webp');",
			"    }",
			"}"
		],
		"description": "Add background-image settings."
	}
}
```

## Installation

Download the repository and install the packages :
```sh
npm i
```

For development, use :
```sh
npm run dev
```

For production, use :
```sh
npm run prod
```

If u need to install dependencies, stop npm run dev and use (dependencies are needed to the website to work correctly in production mode, like gsap for example) :
```sh
npm i package-name
```

If u need to install development dependencies, stop npm run dev and use (development dependencies are needed to the website to work correctly in development mode, like file-loader for example) :
```sh
npm i -D package-name
```

## Smooth scroll

Define scrollable section. Use multiple sections to improve performance :
`data-scroll-section`
```html
<div data-scroll-section></div>
```

Detect if element is in-view :
`data-scroll`
```html
<p data-scroll></p>
```

Element in-view detection repeat :
`data-scroll-repeat`
```html
<p data-scroll data-scroll-repeat></p>
```

Element parallax speed :
`data-scroll-speed`
```html
<p data-scroll data-scroll-speed="4"></p>
```

Element parallax direction :
`data-scroll-direction`
```html
<p data-scroll data-scroll-speed="4" data-scroll-direction="horizontal"></p>
```

Element parallax lerp delay :
`data-scroll-delay`
```html
<p data-scroll data-scroll-delay="0.5"></p>
```

Element in-view trigger offset :
`data-scroll-offset`
```html
<p data-scroll data-scroll-offset="100(%)"></p>
```

Target element in-view position :
`data-scroll-target`
```html
<p data-scroll data-scroll-target="#id_section"></p>
```

Set sticky element. Start and stop at `data-scroll-target` :
`data-scroll-sticky`
```html
<p data-scroll data-scroll-sticky="#id_section" data-scroll-sticky></p>
```