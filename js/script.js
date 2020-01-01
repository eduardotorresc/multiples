const multiple = (value, num) => {
  let result = (value % num === 0) ? true : false;
  return result;
}

const main = (e) => {
  e.preventDefault();
  let multiples = [];
  let number = document.getElementById('number');
  let container = document.getElementById('container');
  container.innerHTML = "";

  for (let i = 1; i <= 100; i++) {
    if (multiple(i, number.value)) multiples.push(i);
  }

  multiples.forEach((value, index, array) => container.innerHTML += `<span class="item"> ${value}</span>`);
}

addEventListener('load', () => {
  let button = document.getElementById('button');
  button.addEventListener('click', main);
});
