// function Dummy(...p){    //doesnt have to be props, using p instead
//   console.log(p); //Array[3] of 3 objects, where first object = Object {id: "dummy", onClick: "haha"}.  Here, p has the same value as arguments.   p == arguments
//   return(
//     <div>
//       Watafakaka
//     </div>
//   );
// }

//
// function Dummy(p){
//   console.log(p);  //Object {id: "dummy", onClick: "haha"}
//   return(
//     <div>
//       Makakak
//     </div>
//   );
// }


 // In a bootstrap grid, the parent element is divided into 12 columns. The twelve columns are not with respect to the viewport for every elemnt.
 //Therefore when you're nesting, :    \\col-6                    \\ col-6                  \\
 //                                    \\col-4   col-4     col-4  \\                        \\



 // The KeyDown event is triggered when the user presses a Key.   If the textArea has "AB" and we press 'C',  event.keyCode will return 67, event.target.value will return "AB"!!
 //
 // The KeyUp event is triggered when the user releases a Key.    If the textArea has "AB" and we press 'C',  event.keyCode will return 67, event.target.value will return "ABC"
 //
 // The KeyPress event --> If the textArea has "AB" and we press 'C',  event.keyCode will return 0!!, event.target.value will return "AB"!!
 //Order of events: keydown > keypress > textInput  >   keyup
