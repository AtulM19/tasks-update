// prereq elements
const acc = document.querySelector(".btn-accordion");
const img_acc = document.querySelector('.img-acc')
const panel = document.querySelector('.content')

// role elements
const btn_role = document.querySelector('.btn-role')
const img_role = document.querySelector('.img-role')
const role_desc = document.querySelector('.role-desc')

const accordion = function(ele, img) {
    console.log('event log');
    if (!ele.style.maxHeight) {
        console.log('conditipn log' );
        img.src = '../assets/icons/expand-more.svg'
        ele.style.maxHeight = ele.scrollHeight + 'px'
    } else {
        img.src = '../assets/icons/expand-less.svg'
        ele.style.maxHeight = null
    }
}

const prereq = function () {
    accordion(panel, img_acc);
}

const role_details = function () {
    accordion(role_desc, img_role);
}

acc.addEventListener("click", prereq);
btn_role.addEventListener("click", role_details);



const radio1 = document.getElementById('radio-btn-1')
const radio2 = document.getElementById('radio-btn-2')
const check1 = document.getElementById('check-btn-1')
const check2 = document.getElementById('check-btn-2')
const check3 = document.getElementById('check-btn-3')
const btn_apply = document.getElementById('btn-apply')

const check = function () {
    if ((radio1.checked || radio2.checked ) && (check1.checked || check2.checked || check3.checked)) {
        btn_apply.style.filter = "opacity(1)"
    }
    else {
        btn_apply.style.filter = "opacity(0.7)"
    }
}

radio1.addEventListener("click", check)
radio2.addEventListener("click", check)
check1.addEventListener("click", check)
check2.addEventListener("click", check)
check3.addEventListener("click", check)




