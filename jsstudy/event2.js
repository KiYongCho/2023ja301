const outer = document.querySelector("#outer");
const inner = document.querySelector("#inner");
const btn = document.querySelector("#btn");

outer.addEventListener("click", function(e) {
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
});
inner.addEventListener("click", function(e) {
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
});
btn.addEventListener("click", function(e) {
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
    e.stopPropagation();
});

outer.addEventListener("click", function(e) {
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
}, true);

inner.addEventListener("click", function(e) {
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
}, true);
btn.addEventListener("click", function(e) {
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
}, true);

const aEle = document.querySelector("a");
aEle.addEventListener("click", function(e) {
    e.preventDefault();
});

