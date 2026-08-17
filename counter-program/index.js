const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById
("increaseBtn");
const countLabel = document.getElementById("countLabel")
let count = 0;
function updateCount() {
    countLabel.textContent = count;
        if (count <= 0){
        decreaseBtn.disabled = true;
}
        else {decreaseBtn.disabled = false;}
}
updateCount();


increaseBtn.onclick = function(){
    count++;
    updateCount();
}
decreaseBtn.onclick = function(){
    count--;
    updateCount();
// A lot of JavaScript developers prefer writing it like above 
//  instead of this!!:--👇🏻👇🏻👇🏻
// else {
//     count--;
//     countLabel.textContent = count; }

}
resetBtn.onclick = function(){
    count = 0;
    updateCount();
}
