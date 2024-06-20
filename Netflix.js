const e=document.getElementById('e')
e.addEventListener('input',()=>{
    e.classList.add('typing');
});
const que=document.querySelectorAll('.question1');
const ans=document.querySelectorAll('.questiondesc');
let selected=-1;
que.forEach((item,index) => {
    item.addEventListener('click',()=>{
        const isVisible=ans[index].classList.contains('hide');

        ans.forEach(ans=>{
            ans.classList.add('hide');
        })

        if(isVisible){
            ans[index].classList.remove('hide');
        }
        else{
            ans[index].classList.add('hide');
        }
        });
    });

const drop=document.querySelector('.drop-down');
const lang=document.querySelector('.Langu');


lang.addEventListener('click', () => {
    const isset = drop.style.display === "none" || drop.style.display === "";
    if (isset) {
        drop.style.display = "block"; // Set to block or any other value to show
    } else {
        drop.style.display = "none";
    }
});

const op=document.querySelector('.Sign-In');
const sign=document.querySelector('.signin');
const close=document.querySelector('.close');
const btnemail=document.querySelectorAll('.btn-email');
const focu=document.querySelector('.focus');
const blur=document.querySelector('.blureffect');

sign.addEventListener('click',()=>{
    op.style.display='unset';
    blur.style.filter=`blur(1px)`;
    focu.focus();
});

btnemail.forEach(item=>{
item.addEventListener('click',()=>{
    op.style.display='unset';
    blur.style.filter=`blur(1px)`;
    focu.focus();
});
})

close.addEventListener('click',()=>{
    op.style.display='none';
    blur.style.filter=`blur(0px)`;
})

