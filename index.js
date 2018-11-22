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
  if (katzDeli.length > 0) {
    var string = `The line is currently: 1. ${katzDeli[0]}, `
    for (let i = 1; i < katzDeli.length; i++) {
      string + `${i + 1}. ${katzDeli[i]}, `
    }
  } else if (katzDeli.length === 0) {
    return 'The line is currently empty.'
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