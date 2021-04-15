'use strict'

// Напиши скрипт, который для каждого элемента
// массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в
// список ul.ingredients. Для создания DOM-узлов
// используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsContainerEl = document.querySelector('#ingredients');

const elements = ingredients.map(food => {
  const vegetablesEl = document.createElement('li');
  vegetablesEl.textContent = food;

  return vegetablesEl;
});

console.log(elements);

ingredientsContainerEl.append(...elements); 











