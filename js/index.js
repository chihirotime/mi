// 轮播图
// {
//     let pagers = document.querySelectorAll("#pagerBox>li");
//     let imgs = document.querySelectorAll("#imgBox>li");
//     let banner = document.querySelector(".banner");
//     let flag = false;
//     pagers.forEach(function (ele, index) {
//         ele.onclick = function () {
//             for (let i = 0; i < imgs.length; i++) {
//                 imgs[i].classList.remove("active");
//                 pagers[i].classList.remove("active");
//             }
//             imgs[index].classList.add("active");
//             this.classList.add("active");
//         }
//     });
//     let now = 0;
//     let len = pagers.length;
//
//     function move() {
//         now++;
//         if (now === len) {
//             now = 0;
//         }
//         ;
//         if (now === -1) {
//             now = 4;
//         }
//         for (let i = 0; i < len; i++) {
//             imgs[i].classList.remove("active");
//             pagers[i].classList.remove("active");
//         }
//         ;
//         imgs[now].classList.add("active");
//         pagers[now].classList.add("active");
//     };
//
//     let st = setInterval(move, 2000);
//     banner.onmouseenter = function () {
//         clearInterval(st);
//     };
//
//     banner.onmouseleave = function () {
//         if (flag) {
//             return;
//         };
//         st = setInterval(move, 2000);
//     }
//
//     let next = document.querySelector("#next");
//     let pre = document.querySelector("#pre");
//     let flag2 = true;
//     next.onclick = function () {
//         if (flag2) {
//             flag2 = false;
//             flag = true;
//             move();
//         }
//     }
//     pre.onclick = function () {
//         if (flag2) {
//             flag2 = false;
//             now -= 2;
//             flag = true;
//             move();
//         }
//     }
//     imgs.forEach(function (ele, index) {
//         ele.addEventListener("transitionend", function () {
//             flag2 = true;
//         });
//     });
// }
//下载app
{
var pagers=$("#pagerBox li");
var imgs=$("#imgBox li");
pagers.click(function () {
    var index=$(this).index();
    now=index;
    pagers
        .filter(".active")  //1
        .removeClass("active")  //1
        .end() //5
        .filter(this)  //1
        .addClass("active");
    imgs
        .filter(".active")
        .removeClass("active")
        .end()
        .eq(now)
        .addClass("active");
});

var now=0;
function banner(){
    now++;
    if (now===imgs.length){
        now=0;
    }
    if (now===-1){
        now=imgs.length-1;
    }
    imgs
        .filter(".active")
        .removeClass("active")
        .end()
        .eq(now)
        .addClass("active");
    pagers
        .filter(".active")
        .removeClass("active")
        .end()
        .eq(now)
        .addClass("active");
}

var t=setInterval(banner,3000);

$(".banner").hover(function () {
    clearInterval(t);
},function () {
    t=setInterval(banner,3000)
});

var flag=true;
$("#next").click(function () {
    if (flag){
        flag=false;
        banner();
    }

});
$("#pre").click(function () {
    if (flag){
        flag=false;
        now-=2;
        banner();
    }
});
imgs.on("transitionend",function () {
    flag=true;
})
}
{
    let app = document.querySelector(".app");
    let ewmTop = document.querySelector(".ewmTop");
    app.onmouseenter = function () {
        ewmTop.style.display = "block";
    }
    app.onmouseleave = function () {
        ewmTop.style.display = "none";
    }
}
// 购物车
{
    let barCart = document.querySelector(".barCart");
    let cartMenu = document.querySelector(".cart-menu");
    barCart.onmouseenter = function () {
        cartMenu.style.display = "block";
    }
    barCart.onmouseleave = function () {
        cartMenu.style.display = "none";
    }
}
//bar
{
    let itemBox = document.querySelector(".item-box");
    let slideBox = document.querySelector(".slide-box");

    itemBox.onmouseenter = function () {
        slideBox.classList.add("active");
    };
   itemBox.onmouseleave = function () {
        slideBox.classList.remove("active");
    };
    let item = document.querySelectorAll(".item");
    let goodsBox = document.querySelectorAll(".goods-box");
    item.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            for (let i = 0; i < goodsBox.length; i++) {
                goodsBox[i].style.display = "none";
            }
            goodsBox[index].style.display = "block";
        }
    });
}
// 右侧
{
    let fixedRight = document.querySelector(".fixedRight");
    let ewmFixed = document.querySelector(".ewmFixed");
    fixedRight.onmouseenter = function () {
        ewmFixed.style.display = "block";
    };
    fixedRight.onmouseleave = function () {
        ewmFixed.style.display = "none";
    }

}
// 内容
{
    function content(parent) {
        let pagers = parent.querySelectorAll(".pagers>li");
        let books = parent.querySelector(".book");
        pagers.forEach(function (ele, index) {
            ele.onclick = function () {
                now = index;
                for (let i = 0; i < pagers.length; i++) {
                    pagers[i].classList.remove("active");
                }
                this.classList.add("active");
                books.style.marginLeft = index * -296 + "px";
            }
        });
        let pre = parent.querySelector(".leftClick");
        let next = parent.querySelector(".rightClick");
        let now = 0;
        next.onclick = function () {
            now++;
            if (now > pagers.length - 1) {
                now = pagers.length - 1;
                return;
            }
            for (let i = 0; i < pagers.length; i++) {
                pagers[i].classList.remove("active");
            };
            pagers[now].classList.add("active");
            books.style.marginLeft = now * -296 + "px";
        };
        pre.onclick = function () {
            // console.log(now);
            now--;
            if (now < 0) {
                now = 0;
                return;
            }
            for (let i = 0; i < pagers.length; i++) {
                pagers[i].classList.remove("active");
            }
            ;
            pagers[now].classList.add("active");
            books.style.marginLeft = now * -296 + "px";
        };
    };
    let contentBox = document.querySelectorAll(".contentBox");
    contentBox.forEach(function (ele) {
        content(ele);
    });
}
// 轮播侧边栏
{
    let aslide = document.querySelector(".aslide");
    let rightSlide = document.querySelector(".rightSlide");
    aslide.onmouseenter = function () {
        rightSlide.classList.add("active");
    };
    aslide.onmouseleave = function () {
        rightSlide.classList.remove("active");
    };
    let aslideList = document.querySelectorAll(".aslideList");
    let listRight = document.querySelectorAll(".listRight");
    aslideList.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            for (let i = 0; i < listRight.length; i++) {
                listRight[i].style.display = "none";
            }
            listRight[index].style.display = "block";
        }
    });
}
//返回顶部
{
    let toTop=document.querySelector(".back");
    toTop.onclick=function () {
        let l=document.documentElement.scrollTop;
        let s=25*l/500; //变换速度
        let st=setInterval(function () {
            l-=s;
            if (l<=0){
                l=0;
                clearInterval(st);
            }
            document.documentElement.scrollTop=l;
        },25)
    }
}
// 出现返回键
{
    let back=document.querySelector(".back");
    window.onscroll=function () {
        // console.log(document.documentElement.scrollTop);
        let st = document.documentElement.scrollTop;
        if (st>1000) {
            back.classList.add("active");
        } else {
            back.classList.remove("active");
        }
    }
}


// 优化加载图片
{
    let contents=document.querySelectorAll(".content");
    contents.forEach(function (ele) {
        if (ele.offsetTop < window.innerHeight) {
            let imgs = document.querySelectorAll("img");
            imgs.forEach(function (img) {
                img.src = img.getAttribute("data-src")
            })
        }

        // window.addEventListener("scroll",function () {
        //     let st = document.documentElement.scrollTop;
        //     containers.forEach(function (ele) {
        //         if (st > ele.offsetTop - window.innerHeight) {
        //             let imgs = ele.querySelectorAll("img")
        //             imgs.forEach(function (img) {
        //                 img.src = img.getAttribute("data-src")
        //             })
        //         }
        //     })
        // })

    })

}

//倒计时
{
    // let days=document.querySelector("#days");
    let hours=document.querySelector(".time1");
    let minutes=document.querySelector(".time2");
    let seconds=document.querySelector(".time3");

    // let now=new Date().getTime();  //获取当前时间
    let target=new Date(2019,4,31,18,0,0).getTime();  //目标时间  毫秒

    function time() {
        let now=Date.now();
        // let days1=Math.floor((target-now)/(1000*60*60*24));
        // days.innerHTML=days1;   //天

        let hours1=Math.floor((target-now)/(1000*60*60))%24;
        hours.innerHTML=hours1;  //时

        let minutes1=Math.floor((target-now)/(1000*60))%60;
        minutes.innerHTML=minutes1;  //分


        let seconds1=Math.floor((target-now)/1000)%60;
        seconds.innerHTML=seconds1;  //秒

    }
    time();
    setInterval(time,1000);

}

//为你推荐
{
    let recnext = document.querySelector(".tuijian .jiantouRight");
    let recpre = document.querySelector(".tuijian .jiantouLeft");
    let inner=document.querySelector(".goods-inner");
    let recommend=document.querySelectorAll(".recommend");
    let now=0;
    recnext.onclick = function () {
        now++;
        if (now > recommend.length- 1) {
            now = recommend.length - 1;
            return;
        }
        inner.style.marginLeft = now * -1226 + "px";
    };
    recpre.onclick = function () {
        // console.log(now);
        now--;
        if (now < 0) {
            now = 0;
            return;
        }
        inner.style.marginLeft = now * -1226 + "px";
    };

}

//小米闪购
{
    let recnext = document.querySelector(".micontent>.shopping>.jiantouRight");
    let recpre = document.querySelector(".micontent>.shopping>.jiantouLeft");
    let inner=document.querySelector(".flash-content");
    let flash=document.querySelectorAll(".flash-one");
    let now=0;
    recnext.onclick = function () {
        now++;
        if (now > flash.length- 1) {
            now = flash.length - 1;
            return;
        }
        inner.style.marginLeft = now * -978 + "px";
    };
    recpre.onclick = function () {
        // console.log(now);
        now--;
        if (now < 0) {
            now = 0;
            return;
        }
        inner.style.marginLeft = now * -978 + "px";
    };
}
//家电
{
    let navItem=document.querySelectorAll(".jiadianContent1>.shopping>.menu1>a>li");
    let goods=document.querySelectorAll(".jiadianContent1>.jiadian-box>.jiadian");

    navItem.forEach(function(ele,index){
        ele.onmouseenter=function(){
            for(let i=0;i<navItem.length;i++){
                navItem[i].classList.remove("active");
            }
            navItem[index].classList.add("active");
            // ele.classList.remove("active");

            for(let i=0;i<goods.length;i++){
                goods[i].style.display="none";
            }
            goods[index].style.display="block";
        }
    });

}

//智能
{
    let navItem=document.querySelectorAll(".jiadianContent2>.shopping>.menu2>a>li");
    let goods=document.querySelectorAll(".jiadianContent2>.zhineng-box>.jiadian2");

    navItem.forEach(function(ele,index){
        ele.onmouseenter=function(){
            for(let i=0;i<navItem.length;i++){
                navItem[i].classList.remove("active");
            }
            navItem[index].classList.add("active");
            // ele.classList.remove("active");

            for(let i=0;i<goods.length;i++){
                goods[i].style.display="none";
            }
            goods[index].style.display="block";
        }
    });
}

//搭配
{
    let navItem=document.querySelectorAll(".jiadianContent3>.shopping>.menu3>a>li");
    let goods=document.querySelectorAll(".jiadianContent3>.dapei-box>.jiadian3");

    navItem.forEach(function(ele,index){
        ele.onmouseenter=function(){
            for(let i=0;i<navItem.length;i++){
                navItem[i].classList.remove("active");
            }
            navItem[index].classList.add("active");
            // ele.classList.remove("active");

            for(let i=0;i<goods.length;i++){
                goods[i].style.display="none";
            }
            goods[index].style.display="block";
        }
    });
}

//配件
{
    let navItem=document.querySelectorAll(".jiadianContent4>.shopping>.menu4>a>li");
    let goods=document.querySelectorAll(".jiadianContent4>.peijian-box>.jiadian4");

    navItem.forEach(function(ele,index){
        ele.onmouseenter=function(){
            for(let i=0;i<navItem.length;i++){
                navItem[i].classList.remove("active");
            }
            navItem[index].classList.add("active");
            // ele.classList.remove("active");

            for(let i=0;i<goods.length;i++){
                goods[i].style.display="none";
            }
            goods[index].style.display="block";
        }
    });
}

//周边
{
    let navItem=document.querySelectorAll(".jiadianContent5>.shopping>.menu5>a>li");
    let goods=document.querySelectorAll(".jiadianContent5>.zhoubian-box>.jiadian5");

    navItem.forEach(function(ele,index){
        ele.onmouseenter=function(){
            for(let i=0;i<navItem.length;i++){
                navItem[i].classList.remove("active");
            }
            navItem[index].classList.add("active");
            // ele.classList.remove("active");

            for(let i=0;i<goods.length;i++){
                goods[i].style.display="none";
            }
            goods[index].style.display="block";
        }
    });
}