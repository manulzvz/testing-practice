export function capitalize(str) {
    if (!str) return "";
    return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export function reverseString(str) {
    if (!str) return "";
    return str.split("").reverse().join("");
}

export const calculator = {
    add(a, b) {
        return Number(a) + Number(b);
    },
    substract(a, b) {
        return Number(a) - Number(b); 
    },
    divide(a,b) {
        if(b === 0) throw new Error("Cannot divide by zero");
        return Number(a) / Number(b);
    },
    multiply(a,b) {
        return Number(a) * Number(b);
    },
}

export function caesarCipher(str, shift) {
  return str
    .split("") // Divide el string en un array de caracteres
    .map((char) => {
      // Itera por cada carácter

      if (!/[a-z]/i.test(char)) {
        // Si NO es letra (números, espacios, signos), lo devuelve igual
        return char;
      }

      // Determina si es mayúscula o minúscula
      const isUpperCase = char === char.toUpperCase();

      // Define la base ASCII según el caso (A=65, a=97)
      const base = isUpperCase ? 65 : 97;

      // Calcula el nuevo código:
      // - char.charCodeAt(0): convierte el carácter a su código ASCII
      // - (charCode - base): lo normaliza a 0-25
      // - + shift: aplica el desplazamiento
      // - % 26: asegura que haga "wrap" (z → a)
      // - + base: lo convierte de nuevo al rango ASCII correcto
      const newCharCode =
        ((char.charCodeAt(0) - base + shift) % 26) + base;

      // Convierte el nuevo código a carácter
      return String.fromCharCode(newCharCode);
    })
    .join(""); // Une todos los caracteres nuevamente en un string
}

export function analyzeArray (arr) {
    const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;

    return {average, min, max, length};
}