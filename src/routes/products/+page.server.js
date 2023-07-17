// export async function load() {
//     //Got ot the database and get products
//     return {
//         products: [
//             {
//                 id: 1,
//                 name: 'Earthen Bottle',
//                 price: 48.00,
//                 pictureURL: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg'
//             }, {
//                 id: 2,
//                 name: 'Nomad Tumbler',
//                 price: 35.00,
//                 pictureURL: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg'
//             }
//         ]
//     }
//
//
// }

export async function load(event) {
    const { fetch } = event;
    const result = await fetch('/api/products');
    return {
        products: await result.json(),
    }
}