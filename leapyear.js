let y = 1100;

/*if (y % 4 === 0) {
  if (y % 100 === 0) {
    if (y % 400 === 0) {
      console.log(y+ "  leap year");
    } else {
      console.log(y + " not leap year");
    }
  } else {
    console.log(y + " not leap year");
  }
} else {
  console.log(y + " notleap year");
}*/
if (y % 4 == 0 && y % 100 !== 0 || y % 400 == 0) {
  console.log(y + " leap year");
}
else {
  console.log(y + " not leap year");
}