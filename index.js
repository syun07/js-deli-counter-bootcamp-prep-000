function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}



function nowServing(katzDeli) {
  if (katzDeli.length > 0) {
    return `Currently serving ${katzDeli.shift()}.`;
  } else if (katzDeli.length === 0) {
    return 'There is nobody waiting to be served!';
  }
}


function currentLine(katzDeli) {
  for (let i = 0; i < katzDeli.length; i++) {
    return 'The line is currently: ' + `${i}. ${katzDeli[i]}`
  }
}

























// var katzDeliLine = [];

// function takeANumber(currentLine, name) {
//   katzDeliLine.push(name);
//   for (var i = 1; i < currentLine.length; i++) {
//     console.log(`Welcome, ${name}. You are number ${i} in line.`)
//   }




//
// function nowServing(katzDeli) {
//   if (katzDeli.length > 0)
//   return `Currently serving ${katzDeli[0]}.`
//   katzDeli.shift;
//
//   if (katzDeli.length == 0)
//   return 'There is nobody waiting to be served!'
// }