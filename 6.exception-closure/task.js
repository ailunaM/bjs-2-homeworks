function parseCount(num) {
  let number = Number.parseFloat(num);
  if (Number.isNaN(number)) {
    throw new Error('Невалидное значение');
  }
  return number;
}

function validateCount(num) {
  try {
    return  parseCount(num);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    let sumA = b + c;
    let sumB = a + c;
    let sumC = a + b;

    if (sumC < c || sumA < a || sumB < b) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }
  get area() {
    let semiperimeter = this.perimeter / 2;
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
    return {
      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      },
      get area() {
        return 'Ошибка! Треугольник не существует';
      },
    };
  }
}
