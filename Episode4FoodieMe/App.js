import React from "react";
import ReactDOM from "react-dom/client";

// Header
//    -Logo
//    -Navitems
// Body 
//    -Search
//    -Res Card 
//    -Card Container 
//    -Restuarant Container
//        -image
//        -name,star rating cuisine, delivery time
// Footer
//    -Copyright
//    -Disclaimer
//    -Address & Name of the Company  


const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img className="logo" src="https://pbs.twimg.com/profile_images/2895050464/e450886d7a7a3b738d2d0443d5410d95_400x400.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Name</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
//we can give style as a js object.
const styleCard = {
    backgroundColor: "#f0f0f0"
}

const resObj = [
	{
		"id": 1,
		"title": "Burger",
		"price": 550,
		"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
		"category": "Veg Food",
		"image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
		"rating": { "rate": 3.9, "count": 120 }
	},
	{
		"id": 2,
		"title": "Pizza",
		"price": 120,
		"description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, lightweight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
		"category": "Veg Food",
		"image": "https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8fDA%3D",
		"rating": { "rate": 4.1, "count": 259 }
	},
	{
		"id": 3,
		"title": "Chicken Masala",
		"price": 300,
		"description": "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm-hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
		"category": "Non-Veg Food",
        "image": "https://media.istockphoto.com/id/673858790/photo/butter-chicken-curry-with-tender-chicken-breast-cream-butter-honey.jpg?s=1024x1024&w=is&k=20&c=o_y1qLvkh8uDdxKQBtKeUbpimK5eqx6OsjZxQrbtr0k=",
		"rating": { "rate": 4.7, "count": 500 }
	},
	{
		"id": 4,
		"title": "Paalak Paneer",
		"price": 200,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
		"category": "Veg Food",
		"image": "https://media.istockphoto.com/id/646332150/photo/palak-paneer.jpg?s=1024x1024&w=is&k=20&c=GE1CkDTR3vlEF5hLssX5EfnS0behJx9QjMrrjXqWap4=",
		"rating": { "rate": 2.1, "count": 430 }
	},
	{
		"id": 5,
		"title": "Momos",
		"price": 200,
		"description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
		"category": "Veg Food",
		"image": "https://media.istockphoto.com/id/1082284630/photo/chicken-momo-served-in-a-wooden-box-top-view.jpg?s=1024x1024&w=is&k=20&c=p47SBg7hohvo3mLUNZqNstfA4GR2mZU3ZKlN_R49QsM=",
		"rating": { "rate": 4.6, "count": 400 }
	},
	{
		"id": 6,
		"title": "Masala dosa",
		"price": 180,
		"description": "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
		"category": "Veg Food",
		"image": "https://media.istockphoto.com/id/1303091718/photo/kerala-vegetarian-foods-dosa-with-curries.jpg?s=1024x1024&w=is&k=20&c=U7ojCquoiJBmAsrv1brZpawpOZe-iVA0Gn0tb01Z-p0=",
		"rating": { "rate": 3.9, "count": 70 }
	}
];

// 20231217160327
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5821195&lng=77.3266991&collection=83645&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null

const RestuarantCard = (props) => {
    const { id, title, category, image, price,rating } = props.product;
    console.log(props);
    return (
        // <div className="res-card" style={styleCard}>
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
             <img className="res-logo" alt="res-card" src={image}></img>
     
            <h3 className="m-5">{title}</h3>
            <h4 className="m-0">{category}</h4>
            <div className="dis-flex m-0">
            <h4 className="m">{rating?.rate}</h4>
            <h4 cllassName="m">{price}</h4>
            </div>
            <button className="btn btn-primary">Buy Now</button>

        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
				{
					resObj.map(product => <RestuarantCard key={product.id} product={product} />)
				}
			</div>
        </div>
    )
}
const Applayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />)