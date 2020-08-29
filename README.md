# MONSTER ROLODEX PROJECT

### Apuntes

- `this.setState` puede recibir un segundo parámetro el cual es una función que se ejecuta despues de que el estado haya sido mutado.

```javascript
this.setState({ searchField: e.target.value }, () => console.log(this.state));
```

- `this.setState` se puede trabajar de manera asincrona, recibiendo un estado y props previas.

```javascript
this.setState(
  (prevState, prevProps) => {
    return { counter: prevState.counter + 1 };
  },
  () => console.log(this.state.counter)
);
```

### [Ciclos de vida](https://reactjs.org/docs/react-component.html)

1. componentDidMount: Es el ciclo de vida que se ejecuta después del constructor al montar un componente.
2. componentDidUpdate: Es el ciclo de vida que se ejecuta después de mutar un estado o una prop del componente.
3. componentWillUnmount: Es el ciclo de vida que se ejecuta en el instante previo a retirar el componente del DOM(Document Object Model).

### Github Pages

Es el servicio de Github para publicar páginas web estáticas de manera gratuita.

1. Lo primer que hay que hacer es agregar la librería correspondiente utilizando el comando `yarn add gh-pages`.

2. Luego debes agregar el tag `homepage` a tu package.json. Ejemplo: `"homepage": "https://alejandrehl.github.io/monsters-rolodex"`.

3. Se deben agregar dos scripts en tu package.json, el primero es `predeploy` y el segundo `deploy`. Ejemplo:

```json
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build"
```

Este proyecto fue creado utilizando [React JS](https://reactjs.org/) y [JSON Placeholder](https://jsonplaceholder.typicode.com/)
