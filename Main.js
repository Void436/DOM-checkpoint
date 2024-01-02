//...........



let body = document.querySelector('body');





//button + - 

//souris
let incmice = document.querySelector("#plusmice");
let decmice = document.querySelector("#minusmice");


//clavier
let inckey = document.querySelector("#pluskey");
let deckey = document.querySelector("#minuskey");



//casque
let inchead = document.querySelector("#plushead");
let dechead = document.querySelector("#minushead");



//tapis
let incpad = document.querySelector("#pluspad");
let decpad = document.querySelector("#minuspad");



//bungee
let incbun = document.querySelector("#plusbun");
let decbun = document.querySelector("#minusbun");



//base station
let incbase = document.querySelector("#plusbase");
let decbase = document.querySelector("#minusbase");





//prix des article

var pricemice = document.getElementById("pricemice");
let pricekeyboard = document.getElementById("pricekeyboard");
let priceheadset = document.getElementById("priceheadset");
let pricepad = document.getElementById("pricepad");
let pricebun = document.getElementById("pricebungee");
let pricestation = document.getElementById("pricestation");
let ttl = document.getElementById("totaltext");



//prix prix
//mouse
var mice = 149.99;
var m = 0;
var msum = 0;

//keyboard
var keyboard = 252.26;
var k = 0;
var ksum = 0;

//headset
var headset = 199.99;
var h = 0;
var hsum = 0;

//mousepad
var pad = 99.99;
var p = 0;
var psum = 0;

//bungee
var bun = 39.99;
var b = 0;
var bsum = 0;

//base station
var station = 69.99;
var s = 0;
var ssum = 0;

//total
var total = 0;


//quantité

let qm = document.getElementById("qmice");
let qk = document.getElementById("qkeyboard");
let qh = document.getElementById("qheadset");
let qp = document.getElementById("qpad");
let qb = document.getElementById("qbungee");
let qs = document.getElementById("qstation");





//increase decrease

//souris
incmice.addEventListener('click', () => {
    msum = msum + 1;
    qm.innerHTML = msum;
    m = m + mice;
    pricemice.innerHTML = m.toFixed(2);
    total = total + mice;
    ttl.innerHTML = total.toFixed(2);
})

decmice.addEventListener('click', () => {
    if (msum > 0) {
        msum = msum - 1;
        qm.innerHTML = msum;
        m = m - mice;
        pricemice.innerHTML = m.toFixed(2);
        total = total - mice;
        ttl.innerHTML = total.toFixed(2);
    }
    if (msum == 0) {
        m = 0;
        pricemice.innerHTML = m.toFixed(2);
    }
})


//clavier
inckey.addEventListener('click', () => {
    ksum = ksum + 1;
    qk.innerHTML = ksum;
    k = k + keyboard;
    pricekeyboard.innerHTML = k.toFixed(2);
    total = total + keyboard;
    ttl.innerHTML = total.toFixed(2);
})

deckey.addEventListener('click', () => {
    if (ksum > 0) {
        ksum = ksum - 1;
        qk.innerHTML = ksum;
        k = k - keyboard;
        pricekeyboard.innerHTML = k.toFixed(2);
        total = total - keyboard;
        ttl.innerHTML = total.toFixed(2);
    }
    if (ksum == 0) {
        k = 0;
        pricekeyboard.innerHTML = k.toFixed(2);
    }
})


//casque
inchead.addEventListener('click', () => {
    hsum = hsum + 1;
    qh.innerHTML = hsum;
    h = h + headset;
    priceheadset.innerHTML = h.toFixed(2);
    total = total + headset;
    ttl.innerHTML = total.toFixed(2);
})

dechead.addEventListener('click', () => {
    if (hsum > 0) {
        hsum = hsum - 1;
        qh.innerHTML = hsum;
        h = h - headset;
        priceheadset.innerHTML = h.toFixed(2);
        total = total - headset;
        ttl.innerHTML = total.toFixed(2);
    }
    if (hsum == 0) {
        h = 0;
        priceheadset.innerHTML = h.toFixed(2);
    }
})


//tapis
incpad.addEventListener('click', () => {
    psum = psum + 1;
    qp.innerHTML = psum;
    p = p + pad;
    pricepad.innerHTML = p.toFixed(2);
    total = total + pad;
    ttl.innerHTML = total.toFixed(2);
})

decpad.addEventListener('click', () => {
    if (psum > 0) {
        psum = psum - 1;
        qp.innerHTML = psum;
        p = p - pad;
        pricepad.innerHTML = p.toFixed(2);
        total = total - pad;
        ttl.innerHTML = total.toFixed(2);
    }
    if (psum == 0) {
        p = 0;
        pricepad.innerHTML = p.toFixed(2);
    }
})


//bungee
incbun.addEventListener('click', () => {
    bsum = bsum + 1;
    qb.innerHTML = bsum;
    b = b + bun;
    pricebun.innerHTML = b.toFixed(2);
    total = total + bun;
    ttl.innerHTML = total.toFixed(2);
})

decbun.addEventListener('click', () => {
    if (bsum > 0) {
        bsum = bsum - 1;
        qb.innerHTML = bsum;
        b = b - bun;
        pricebun.innerHTML = b.toFixed(2);
        total = total - bun;
        ttl.innerHTML = total.toFixed(2);
    }
    if (bsum == 0) {
        b = 0;
        pricebun.innerHTML = b.toFixed(2);
    }
})


//base station
incbase.addEventListener('click', () => {
    ssum = ssum + 1;
    qs.innerHTML = ssum;
    s = s + station;
    pricestation.innerHTML = s.toFixed(2);
    total = total + station;
    ttl.innerHTML = total.toFixed(2);
})

decbase.addEventListener('click', () => {
    if (ssum > 0) {
        ssum = ssum - 1;
        qs.innerHTML = ssum;
        s = s - station;
        pricestation.innerHTML = s.toFixed(2);
        total = total - station;
        ttl.innerHTML = total.toFixed(2);
    }
    if (ssum == 0) {
        s = 0;
        pricestation.innerHTML = s.toFixed(2);
    }
})




//verif button
//not doing the other buttons because they won't be functioning either ways unless we were told to do so but this button is just for fun

function verif() {
    var coup = document.getElementById("coupon").value;
    if (coup == "x290gt63seRENNtech") {
        alert("Valid coupon!");
    }
    else{
        alert("Invalid Coupon! Try: 'x290gt63seRENNtech'");
    }
    return coup;
}



function reset(){
    location.reload()
}


//if you guys are wondering why picked that coupon check this "https://www.youtube.com/watch?v=w8enoiC2pNk" 

//model description




//icons part


let iconx = document.getElementById('croix');
let iconheart = document.getElementById('coeur');
console.log(iconx);


//croix coeur

iconx.addEventListener('click', () => {
    iconx.classList.toggle('lll');
})

iconheart.addEventListener('click', () => {
    iconheart.classList.toggle('lll');
})




