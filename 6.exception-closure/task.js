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
