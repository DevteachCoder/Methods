// (function(){
//     console.log("hello");
// })
// (); //funksiyaga nom bermey chaqirsa buladi!


// const myModule = {
//     drive() {
//         console.log("drives");
//     }
// }
// myModule.drive()

let myModule = (function() {
    return {
        publicMethod:function() {
            console.log("hello");
            
        }
    }
});
myModule.publicMethod();