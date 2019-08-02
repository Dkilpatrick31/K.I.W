'use strict';
//
// let one = "" + 1 + 0;
// let two = "" - 1 + 0
// let three = true + false
// let four = 6 / "3"
// let five = "2" * "3"
// let six = 4 + 5 + "px"
// let seven = "$" + 4 + 5
// let eight = "4" - 2
// let nine = "4px" - 2
// let ten = 7 / 0
// let eleven = "  -9  " + 5
// let twelve = "  -9  " - 5
// let thirtenn = null + 1
// let fourteen = undefined + 1
//
// console.log(Number(one));
// console.log(String(two));
// console.log(String(three));
// console.log(String(four));
// console.log(String(five));
// console.log(String(six));
// console.log(String(seven));
// console.log(String(eight));
// console.log(String(nine));
// console.log(String(ten));
// console.log(String(eleven));
// console.log(String(twelve));
// console.log(String(thirteen));
// console.log(String(fourteen));

var runOnScroll = (evt) => {
  console.log(evt.target);
}


let headerAd = document.getElementById('header-ad');
headerAd = add.EventListener('mouseup', headerAd) {
  window.addEventListener("scroll", runOnScroll)
}
