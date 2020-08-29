# MONSTER ROLODEX PROJECT

### Apuntes

- `this.setState` puede recibir un segundo parámetro el cual es una función que se ejecuta despues de que el estado haya sido mutado.

```javascript
this.setState({ searchField: e.target.value }, () => console.log(this.state));
```

### Github Pages

Es el servicio de Github para publicar páginas web estáticas de manera gratuita.

1. Lo primer que hay que hacer es agregar la librería correspondiente utilizando el comando `yarn add gh-pages`.

2. Luego debes agregar el tag `homepage` a tu package.json. Ejemplo: `"homepage": "https://alejandrehl.github.io/monsters-rolodex"`.

3. Se deben agregar dos scripts en tu package.json, el primero es `predeploy` y el segundo `deploy`. Ejemplo:

```json
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build"
```
