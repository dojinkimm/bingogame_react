export const random = () => {
  var array = [];
  for (var i = 1; i <= 25; i++) array[i-1] = i;
  array.sort(() => Math.random() - 0.5);
  return array;
};
