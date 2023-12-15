// const mobile = document.querySelector(".mobile");
// const push = document.querySelector(".btn");



// const phones = [
//     {
//         brand: 'Samsung',
//         model: 'S20',
//         ram: 8,
//         rom: 256,
//         camera: '20 megapixel',
//         price: 159000,
//     },
//     {
//         brand: 'Xiomi',
//         model: 'note10',
//         ram: 4,
//         rom: 64,
//         camera: '10 megapixel',
//         price: 31999,
//     },
//     {
//         brand: 'Infinix',
//         model: 'z10',
//         ram: 5,
//         rom: 16,
//         camera: '5 megapixel',
//         price: 34999,
//     },
//     {
//         brand: 'Tecno',
//         model: 'spark10',
//         ram: 12,
//         rom: 512,
//         camera: '25 megapixel',
//         price: 39999,
//     },
//     {
//         brand: 'Iphone',
//         model: '14',
//         ram: 4,
//         rom: 1024,
//         camera: '30 megapixel',
//         price: 234999,
//     },
//     {
//         brand: 'Oppo',
//         model: 'F11',
//         ram: 8,
//         rom: 256,
//         camera: '20 megapixel',
//         price: 35999,
//     },
//     {
//         brand: 'Vivo',
//         model: 'y20',
//         ram: 4,
//         rom: 64,
//         camera: '8 megapixel',
//         price: 26999,
//     },
//     {
//         brand: 'Huawei',
//         model: 'P30 Pro',
//         ram: 8,
//         rom: 512,
//         camera: '40 megapixel',
//         price: 26999,
//     },

// ]

// for (let i = 0; i < phones.length; i++) {
//     console.log(phones[i]);
//     mobile.innerHTML += `<div class ="c-div main ">
//     <h2 > ${phones[i].brand}</h2>
//    <p  class = "h4"> <b>Ram: ${phones[i].ram}</p></b>
//    <p  class = "h4"><b> Rom: ${phones[i].rom}</p></b>
//     <p  class = "h4"><b>Camera: ${phones[i].camera}</p></b>
//     <p  class = "h4"><b>Price: ${phones[i].price}</p></b>
// <button onclick = "push(${i})" class="btn">Push</button>
// </div>`
// }



const productCart = [
    { 
        productName: "Product 1", 
        price: 10.99 
    },
    { 
        productName: "Product 2", 
        price: 19.99 
    },
    { 
        productName: "Product 3", 
        price: 8.50 
    },
    { 
        productName: "Product 4", 
        price: 12.00 
    },
    { 
        productName: "Product 5", 
        price: 15.75 
    },
    { 
        productName: "Product 6", 
        price: 6.99 
    },
    { 
        productName: "Product 7", 
        price: 24.50 
    },
    { 
        productName: "Product 8", 
        price: 17.25 
    },
    { 
        productName: "Product 9", 
        price: 11.49 
    },
    { 
        productName: "Product 10", 
        price: 14.99 
    }
];

productCart.map((item) => {
    return item.price + 10
    
})

console.log(productCart);

const arr = [1, 2, 3, 4, 5, 6, 7];

const sum = arr.reduce