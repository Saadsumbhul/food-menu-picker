const btnDiv = document.querySelector('#menuBtnsBox')
const menuDiv = document.querySelector('#menu-box')

const menuBtns = ['All', 'Break Fast', 'Lunch', 'Dinner', 'Shakes']
let menuItems = [
    { img: './Assets/nihari.jpeg ', title: 'Nehari', slug: 'Nehari', price: '200', category: 'Lunch', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { img: './Assets/b2.jpg', title: 'chicken-biryani', slug: 'chicken-biryani', price: '200', category: 'Lunch', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.. ' },
    { img: './Assets/chai.jpeg', title: 'Chai Paratha', slug: 'chai-paratha', price: '100', category: 'Break Fast', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { img: './Assets/karahi3.png', title: 'Chicken Karahi', slug: 'chicken-Karahi', price: '500', category: 'Dinner', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
    { img: './Assets/sabzi gosht.jpg', title: 'Sabzi-Gosht', slug: 'Sabzi-Gosht', price: '200', category: 'Lunch', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
    { img: './Assets/zinger6.png', title: 'Zinger Burger', slug: 'zinger-burger', price: '500', category: 'Dinner', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
    { img: './Assets/br1.jpeg', title: 'Bread', slug: 'Bread', price: '80', category: 'Break Fast', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { img: './Assets/bread2.jpeg', title: 'MultiGrain Bread', slug: 'MultiGrain Bread', price: '250', category: 'Break Fast', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
    { img: './Assets/mango.jpeg', title: 'Mango Shakes', slug: 'MAngo Shakes', price: '200', category: 'Shakes', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
    { img: './Assets/banana1.jpeg', title: 'Banana Shakes', slug: 'Banana Shakes', price: '300', category: 'Shakes', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
    { img: './Assets/strawbery.jpeg', title: 'Strawbery Shakes', slug: 'Strawbery Shakes', price: '350', category: 'Shakes', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' }
]






// ForEach for Btns 
menuBtns.forEach((btn) => {
    btnDiv.innerHTML += `<button class="${btn}" onclick="allData('${btn}')">${btn}</button>`
})


function allData(e) {
    menuItems.filter((item) => {
        menuDiv.innerHTML = ''
        if (item.category.includes(e)) {
            return true
        } else if (e == 'All') {
            return true
        }
    }).forEach(result => {
        menuDiv.innerHTML +=
            `<div class="menu-item ${result.slug}">
            <div class="menu-img"><img src="${result.img}" alt=""></div>
            <div class="menu-content">
                <h2>${result.title}</h2>
                <h3>Rs: ${result.price}</h3>
                <h4>${result.category}</h4>
                <p>${result.description}</p>
            </div>
        </div>`
    })
}
allData("All")
