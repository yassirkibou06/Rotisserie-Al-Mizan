const closeBtn = document.querySelector(".fa-bars");
const showBtn = document.querySelector(".fa-xmark");
const menuAll = document.querySelector(".menu-all");

closeBtn.addEventListener("click",function(){
    closeBtn.classList.remove("bars");
    menuAll.classList.toggle("show-nav");
    if(closeBtn.classList.contains("bars") === false) {
        showBtn.classList.toggle("show-btn");
        showBtnall();
    }
});
function showBtnall() {
    showBtn.addEventListener("click",function(){
        menuAll.classList.remove("show-nav");
        showBtn.classList.remove("show-btn");
        closeBtn.classList.add("bars");
    })
}
//////slide////////
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".right-angle");
const prevBtn = document.querySelector(".left-angle");



slides.forEach(function(slide,index) {
  slide.style.left = `${index * 100}%`;
})
let counter = 0;
nextBtn.addEventListener("click",function (){
  counter++;
  carousel();
});
prevBtn.addEventListener("click",function (){
  counter--;
  carousel();
});

function carousel() {
  if(counter === slides.length) {
    counter =0;
  }
  if(counter < 0) {
    counter = slides.length -1;
  }

  slides.forEach(function(slide){
    slide.style.transform = `translateX(-${counter * 100}%)`
  })
}
///////menu item ///////////
const menu = [
  {
    id: 1,
    title: "grilled chicken",
    category: "starters",
    price: 15.99,
    img: "./imges/claudio-schwarz-cgcteFH-azk-unsplash-min.jpg",
    desc: `Lorem, deren, trataro, filede, nerada `,
  },
  {
    id: 2,
    title: "chicken pieces",
    category: "specialty",
    price: 13.99,
    img: "./imges/pexels-alleksana-6107772.jpg",
    desc: `Lorem, deren, trataro, filede, nerada `,
  },
  {
    id: 3,
    title: "ceasar",
    category: "salads",
    price: 6.99,
    img: "./imges/pexels-jer-chung-2116090.jpg",
    desc: `Lorem, deren, trataro, filede, nerada `,
  },
  {
    id: 4,
    title: "greek",
    category: "salads",
    price: 20.99,
    img: "./imges/pexels-polina-tankilevitch-4519053.jpg",
    desc: `Lorem, deren, trataro, filede, nerada  `,
  },
  {
    id: 5,
    title: "chicken sticks",
    category: "specialty",
    price: 22.99,
    img: "./imges/pexels-denys-gromov-4669218.jpg",
    desc: `Lorem, deren, trataro, filede, nerada `,
  },
  {
    id: 6,
    title: "fries",
    category: "starters",
    price: 18.99,
    img: "./imges/pexels-kalz📸🇺🇬-2498440.jpg",
    desc: `Lorem, deren, trataro, filede, nerada `,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
const list = document.querySelectorAll(".filter-btn")
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    //console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4 class="title">${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn ${category === "all" ? "active" : ""}" data-id=${category}>
          ${category}
        </button>`;
      
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      //console.log(e.currentTarget.dataset);
      filterBtns.forEach((el) => {
        el.classList.remove("active")
      })
      e.target.classList.add("active")
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        //console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });

}
////review start 
const slideRev = document.querySelectorAll(".slide-review");
const btnRev = document.querySelectorAll(".btn-rev");
let currentSide = 0;

const manualNav = function(manual) {
  slideRev.forEach((slider) => {
    slider.classList.remove("active-rev");

    btnRev.forEach((btnr) => {
      btnr.classList.remove("active-rev");
  
      
    });

  }); 
  
  slideRev[manual].classList.add("active-rev");
  btnRev[manual].classList.add("active-rev");
}

btnRev.forEach((btnr,i) => {
  btnr.addEventListener("click", () => {
    manualNav(i);
    currentSide = i;
    
  })
})
////end review
//////contact start///////
/*
const nameInpt = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const errorNodes = document.querySelectorAll(".error");
const success = document.querySelector("#success");
function validateForm() {

  clearMessage();
  subInput();

  let errorflag = false;

  if(nameInpt.value.length > 4) {
    errorNodes[0].innerText = "name cannot be blank";
    errorflag=true;
  }
}

function clearMessage() {
  for(let i =0;i < errorNodes.length;i++) {
    errorNodes[i].innerText = "";
  }
}

function subInput() {
  for(let i =0;i < errorNodes.length;i++) {
    errorNodes[i].innerText = "";
  }

}
*/
/////////****scroll links */
const scrollTop = document.querySelector(".top-link");

window.addEventListener("scroll",function(){
  if(this.scrollY >= 1000) {
    scrollTop.classList.add("active-scrol");
  }else {
    scrollTop.classList.remove("active-scrol");
  }
});
scrollTop.addEventListener("click",function(){
  window.scrollTo({
    top:0,
    behavior:"smooth",
  })
})