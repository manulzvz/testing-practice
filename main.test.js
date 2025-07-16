import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./main.js";

describe("capitalize", () => {
  test("convierte la primera letra a mayúscula", () => {
    expect(capitalize("hola")).toBe("Hola");
  });

  test("no modifica si ya está capitalizada", () => {
    expect(capitalize("Hola")).toBe("Hola");
  });

  test("retorna string vacío si se pasa string vacío", () => {
    expect(capitalize("")).toBe("");
  });
});

describe("reverseString", () => {
  test("returns reversed string", () => {
    expect(reverseString("manuel")).toBe("leunam");
  });
});

describe("calculator", () => {
  test("add two numbers", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("substract two numbers", () => {
    expect(calculator.substract(2, 1)).toBe(1);
  });

  test("divide two numbers", () => {
    expect(calculator.divide(10, 5)).toBe(2);
  });

  test("throw error when dividing by zero", () => {
    expect(() => calculator.divide(5, 0)).toThrow("Cannot divide by zero");
  });

  test("multiply two numbers", () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });
});

describe("caesar cipher", () => {
  test("cipher string with shift key equal to three", () => {
    expect(caesarCipher("abcd", 3)).toBe("defg");
  });

  test("text wrapping from z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("keep non-alphabetical characters unchanged", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});

describe("analyze array", () => {
  test("average of array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
  });

  test("min of array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
  });

  test("max of array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
  });

  test("length of array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
  });
});
