const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

// // this document shows the example syntax for thee DOM....

// //The Document Object ..

// document     //-----it is the syntax to get the html elements,

// // if we want js objects and properties we need to call with 
// console.dir(document);

// // to change the element  
// document.all[10].innerText = "madhu"

// // selecting ..
// // get element by id examples ..
// document.getElementById("idname")   // with this we will only get the html elements..

// const banner= document.getElementById("idname")    
// console.dir(banner)       // now we can see the js objects and properties.

// //exercise 51
// const image= document.getElementById("unicorn");
// const heading=document.getElementById("mainheading");

// // get element by tag and get element by class examples 

// document.getElementsByTagName("img")    // it will show all elements with the tag name img..
// const allImages = document.getElementsByTagName("img") // it will the array form ..
// console.dir(allImages[1])        // js objects for the image 1 

// // we can also use for of  loop   // lets ittarate over them
// const allImages = document.getElementsByTagName("img")  
// for (let img of allImages){
//     console.log (img.src)
// }

// // select any one of the img source. 
// const allImages = document.getElementsByTagName("img")  
// for (let img of allImages){
//     img.src= "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg"       // manuplating example...
// }

//same for the class also.apply.
// step -1 selectinng..

// // query selector ..
//  document.querySelector('h1')     // only selects first element of h1
//  document.querySelector(".square") // only selects first element of square class

//  document.querySelector(".square:nth-of-type(2)")  // if we want to select diffreent element of class..

// // type and attribute slector ..if we want to select specific element . then 
// document.querySelector('a[title="Southeast Asia"]');

// // queryslectorall .. returns a collection of matching elements  with arrays...

// document.querySelectorAll('img') 
// document.querySelectorAll('p')
// document.querySelectorAll('a')
// document.querySelectorAll('p a')      // decesent 

// // lets ittarate over them.

// const links = document.querySelectorAll('p a')
// for (let link of links ){
//     console.log(link.href)
// }

// //exercise 52
// const doneTodos= document.querySelectorAll(".done");
// const checkbox= document.querySelector('input[type="checkbox"]');

// // step -2   manulating ...

// document.querySelector('h1');
// const heading =  document.querySelector('h1');
// console.dir(heading)                                // we will get diffreret types of objects and properties of heading  ... in that properties we will some of the
// // imporatnt properties .. innertext , textcontent, innerHTML

// //innertext                     // it will show what is shoeimg at the moment ..
// const para =  document.querySelector('p');
// console.dir(para)    
// document.querySelector('p').innerText;   // we can get the thing 
// document.querySelector('p').innerText= "Madhu Web Developer";   //we can the change  thing ..
// // another example 
// const everyLinks = document.querySelectorAll('a')
// for (let link of everyLinks ){
//     link.innerText=" I am the LINK !!!!"
// }

// // textcontent          // textcontent is going to return every piece of content and element from the element   ..
// document.querySelector('p').innerContent

// // innerHTML . // we can change the inner html element..
// document.querySelector('p').innerHTML;
// document.querySelector('h1').innerHTML=" <i>Madhu Web Developer</i>"
// document.querySelector('h1').innerHTML+= " <sup> Full-Stack Developer</sup>"

// // exercise 53
// document.querySelector("span").innerText="Disgusting";

// // attributes .. 

// document.querySelector('#banner').id='madhu' //here id is the attribute nameand madhu is the new attritube we are changing inplace of id ..
// // changing back to banner .
// document.querySelector('#madhu').id="banner"

// // another examples

// document.querySelector("#banner").src
// document.querySelector("a").href
// document.querySelector("a").title    // selecting attributes 

// // other way to access a attribute which is get attribute  and set attribute.

// document.querySelector('a')
// const firstLink = document.querySelector('a')
// firstLink.getAttribute('href')
// firstLink.setAttribute('href','https://www.wifidigi.com')

// //another example 

// document.querySelector('input[type=button]')
// const hahaha = document.querySelector('input[type=button]')
// hahaha.type      // text
// hahaha.type="password"     // change to password
// hahaha.getaAttribute("type") = "color"
// hahaha.setAttribute('type', 'text')

// // changing styles ..
// h1= document.querySelector('h1');    
// h1.style.color                        // it will not give the color , because this type in inline type .
// h1.style.color="blue";       // this can be changed , but also this becomes an inline..
// h1.style.fontSize="20px"

// // to read the properties we use 
// window.getComputedStyle(h1).color
// window.getComputedStyle(h1).fontSize
// // execrricse -- 55
// const mainId= document.querySelector('#container');
// mainId.style.textAlign="center";
// const imgg=document.querySelector('img');
// imgg.style.width='150px';
// imgg.style.borderRadius="50%";

// // excercise --56
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

// //YOU CODE GOES HERE:
// const letter = document.querySelectorAll('span');
// for (let i=0; i<=7; i++){
//     letter[i].style.color=colors[i];
// }

// //Class List ..    we cann set the style property to create a css class and apply that class ..  (more useful then the previous one)
// document.querySelector('h2')  //selecting h2 .
// const h2 = document.querySelector('h2')
// h2.getAttribute('class')  //null because no class in h2 .
// h2.getAttribute('id')    //"mw-toc-heading"
// h2.setAttribute('class' ,'purple') // setting h2 to the purple class which is already define in the css . so h2 becomes purple color.
// h2.setAttribute('class' ,'border')  // setting h2 with  border class  which is already define in the css . so h2 will get some border..

// // by pratical we will combaine with more classes . lets see how to do it..
// h2.getAttribute('class' ,'border')                             // border
// const currentClass = h2.getAttribute('class' ,'border') ;          // border 
// currentClass                                             // border 
// h2.setAttribute('class' ,`${currentClass} purple`)             // seting two class for h2 .. h2 will get border and purple color .. this was wowwwwwwww..........

// //if we have more classes to apply for an element , this process was some what difficult . so for that we will use "class list "


// h2.classList.add('purple')  // we can dirlectly add the class 
// h2.classList.remove('border')   // we can also remove the border. 
// h2.classList.contains('border') //false 
// h2.classList.add('border')   // added border class 
// h2.classList.contains('border')   // true
// h2.classList.toggle('purple')       // removes purple class
// h2.classList.toggle('purple')     // adds purple class .
// h2.classList.toggle('border')    // removes border class because it previously added . toggle means add / remove based on previous one ..
// // exercise 57

// // WRITE YOUR CODE IN HERE:
// const first = document.querySelectorAll('li');

// for (let i=0 ; i<=first.length; i++){
//      first[i].classList.toggle('highlight');
// }

// // other properties parent , child , sibilings ...
// //parent                         // any element containes only single parent ..
// document.querySelector('b')
// const firstbold = document.querySelector('b')
// firstbold   // silkie
// firstbold.parentElement  // paragraph
// firstbold.parentElement.parentElement    // body
// firstbold.parentElement.parentElement.parentElement   //html

// //child                         // parent element can have many number of childs .

// firstbold.parentElement
// const para = firstbold.parentElement
// para.childElementCount   // 8 
// para.children    // array elements  HTMLCollection(8) [b, b, a, a, a, a, a, a]
// para.children[5]    //  a
// para.children[5].parentElement  // back to parent 

// // sibilings 
// const squareimage = document.querySelector(".square")
// squareimage.nextSibling  // text 
// squareimage.previousSibling
// squareimage.previousElementSibling // <p>
// squareimage.nextElementSibling // img


// // Append and Append Child ..
// // appendchild
// // this shows how to create a new DOM element .
// document.createElement('img')      // want to create a new img element 
// const newimg = document.createElement('img');   // giving new variable name 

// newimg.src="https://images.unsplash.com/photo-1624404235344-3be407e648fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
// // adding source 

// document.body.appendChild(newimg) // we are appending newimg as last child of the body . append means adding new element ..
// newimg.classList.add("square")     // we are chaniging the width and height of the img by adding class square to new img .

// // nother example ;

// document.createElement("h3")
// const newh3 = document.createElement("h3")
// newh3.innerText="Hey I am New H3"
// document.body.appendChild(newh3)

// // append  -- adding some content to the end of the elemnet.
// const p = document.querySelector('p'); 
// p.append(' append means adding content to the element to the end ....')  // this will be added at the end of the paragraph element ..
//  // prepend -- adding before to the element .
//  const newb = document.createElement('b')
//  newb.append("HIII How R U ")
//  p.prepend(newb)   // adding newb to paragraph before .

//  // suppose if we waant to add new element between two sibilngs or two childs . we need to use insertadjecnt 
//  // eample adding some elemnt between h1 and img ..
//  const newh2 = document.createElement('h2')
//  newh2.innerText=" New heading H2 for insert adjecent example "   // we can also write newh2.append = ""
//  const h1 = document.querySelector('h1') 
//  h1.insertAdjacentElement('afterend', newh2)   // three morre properties in mdn doc .

//  // another type 
// // after
//  const newh1 = document.createElement('h1')
//  newh1.append=" New h1" 
//  h1.after(newh1)         // before is also there 

// // exercise 58
// // WRITE YOUR CODE IN HERE:
// for (let i=1; i<=100; i++){
//     const newbutton  = document.createElement('button');
//     // newbutton.type ="text";
//     newbutton.innerText ="Hey!";
//     document.getElementById("container").appendChild(newbutton) ;
//     }

// remove 
// img.remove()
// const img = document.querySelector('img')