function parseCount(num) {
  let number = Number.parseFloat(num);
  if (Number.isNaN(number)) {
    throw new Error('Невалидное значение');
  }
  return number;
}

function validateCount(num) {
  try {
    let number = parseCount(num);
    return number;
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    let sumA = b + c;
    let sumB = a + c;
    let sumC = a + b;
    if (sumC < c || sumA < a || sumB < b) {
      throw new Error('Треугольник с такими сторонами не существует');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    let p = this.a + this.b + this.c;
    console.log(p);
    return p;
  }

  get area() {
    let semiperimeter = (1 / 2) * this.perimeter;
    let S = Math.sqrt(
      semiperimeter * (semiperimeter - this.a) * (semiperimeter - this.b) * (semiperimeter - this.c)
    );
    return parseCount(S.toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return new Triangle(a, b, c);
  }
}
