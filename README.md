# MONSTER ROLODEX PROJECT

### Apuntes

- `this.setState` puede recibir un segundo parámetro el cual es una función que se ejecuta despues de que el estado haya sido mutado.

```javascript
this.setState({ searchField: e.target.value }, () => console.log(this.state));
```
