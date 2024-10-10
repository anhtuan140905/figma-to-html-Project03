// let cuc = document.querySelector(".header__action--signup");
// Object.assign(cuc.style, {
//   backgroundColor: "red",
// });

// let heading = document.querySelector(".hero__heading");

// Object.assign(heading.style, {
//   color: "yellow",
// });

// let buttons = document.querySelectorAll(".btn");
// duyệt for để lấy các phần tử
// for (let btn of buttons) {
//   if (btn instanceof HTMLElement) {
//     btn.style.backgroundColor = "blue";
//     btn.innerHTML = "Click me";
//     btn.style.fontSize = "2em";
//     btn.style.color = "yellow";
//   }
// }

// 36.11: Truy cập Parent, Child, and Siblings
// Truy cập vào các phần tử cha, con, anh em
// Parent: cha
// Child: Con
// Siblings: anh em ruột
// Ví dụ
let elm = document.querySelector(".hero__content");
// 1. Truy cập vào phần tử cha (Phần tử cha thì là duy nhất)
console.log(elm.parentElement);
// đổi màu nền của thẻ cha
elm.parentElement.style.backgroundColor = "red";

// 2. Truy cập vào phần tử con (phần tử con có thể có nhiều
console.log(elm.children);
// HTMLCollection(3) [h1.hero__heading, p.hero_desc, div.hero_row]
console.log(elm.children[0]);
console.log(elm.children[1]);
console.log(elm.children[2]);

// 3. nextElementSiblings: chọn phần tử anh em kế tiếp
console.log(elm.children[1].nextElementSibling);

// 3. previousElementSiblings: chọn phần tử anh em trước đó
console.log(elm.children[1].previousElementSibling);
