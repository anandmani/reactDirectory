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


//When using react-router, We need to change our relative paths to absolute paths in index.html since the URLs will be at deep paths and the app, if it starts at a deep path, won't be able to find the files.
//Refer https://github.com/reactjs/react-router-tutorial/tree/master/lessons/10-clean-urls
// cd / command takes us to root (absolute path from root)
// cd command without leading / is used for relative path (from current directory)
//Same logic applies for react Router
//I'm not changing the path to absolute path in index.html because, when we host using github pages, it automatically adds projectname to the base path. Thus, we cant reference files properly since absolute pathing will remove this project name from path
//e.g. Ideally, https://anandmani.github.io/ should be the base path
// But, github makes it https://anandmani.github.io/reactDirectory/ by appending reactDirectory/
//If we want to access a file in /src/js from base path, on github pages we need to use https://anandmani.github.io/reactDirectory/src/js   But, absolute pathing will make it https://anandmani.github.io/src/js where nothing is present.
