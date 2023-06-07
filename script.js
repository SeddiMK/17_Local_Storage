window.addEventListener('storage', function (e) {
  console.log('change');
  document.querySelector('.out').textContent = this.localStorage.getItem('b1');
});
localStorage.setItem('data', 5);
console.log(localStorage.getItem('data'));

const arr = [2, 3, 5];
localStorage.setItem('arr1', JSON.stringify(arr));
let arr2 = localStorage.getItem('arr1');
arr2 = JSON.parse(arr2);
console.table(arr2);
console.log(arr2[1]);
console.log(typeof arr2);
// =========================================================
console.group('2');
const arr3 = {
  hello: 2,
  s: 5,
  1: 'ds',
};
localStorage.setItem('arr1', JSON.stringify(arr3));
let arr4 = localStorage.getItem('arr1');
arr4 = JSON.parse(arr4);
console.table(arr4);
console.log(arr4[1]);
console.log(typeof arr4);
console.groupEnd('');
