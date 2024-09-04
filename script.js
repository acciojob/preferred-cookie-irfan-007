//your JS code here. If required.
const fontsize = document.getElementById("fontsize");
const fontcolor = document.getElementById("fontcolor");
const submit = document.getElementById("submit");

let cookies = document.cookie.split(";");
for (let i of cookies) {
  let tem = i.trim().split("=");
  console.log(tem);

  if (tem[0] == "fontcolor" && tem[1] != "") {
    document.body.style.color = tem[1];
    fontcolor.value = tem[1];
  }
  if (tem[0] == "fontsize" && tem[1] != "") {
    document.body.style.fontSize = tem[1] + "px";
    fontsize.value = tem[1];
  }
}
// console.log(cookies);

submit.addEventListener("click", (e) => {
  e.preventDefault();
  document.cookie = `fontsize=${fontsize.value};path=/`;
  document.cookie = `fontcolor=${fontcolor.value};path=/`;
  document.body.style.fontSize = fontsize.value + "px";
  document.body.style.color = fontcolor.value;
  // console.log(document.cookie);
});

