export function memoryGame() {


  var array = [1, 2, 3, 4, 5, 6];
  var randomArray = [];

  array.forEach(function(each){
    var shuffleNumber = Math.floor(Math.random() * 7);
    if (shuffleNumber <= 7) {
      randomArray.push(each);
    } else {
      randomArray.unshift(each);
    }
    return randomArray;
  })
}
