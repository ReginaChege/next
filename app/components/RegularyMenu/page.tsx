import React from "react";


const RegularMenu=()=>{
    
    const image = [
        'image/buggerchilli.jpg',
        'image/pizza.jpg',
        'image/chicken.jpg',
        'image/grilled sandwitch.png',
        'image/tacco.jpg',
        'image/vegetable soup.jpg',
    ];
    const items =[
        'Chicken Burger',
        'Chicken Pizza',
        'Chicken Fry',
        'Grilled Sandwitch',
        'Taco Traifi',
        'Noddles Ramen',
    ];
    const ratings = [5,5,5,5,5,5];
    const amounts = [3.50, 4.20, 5.00, 4.80, 3.63, 6.50];
    return (
        <div className="pt-11 justify-center items-center">
            <div className="space-x-4 gap-5 items-center">
            <div>
                <h1 className="font-bold">Our <span className="text-primary font-bold">Regular</span> Menu</h1>
                <p>These Are Our Regular Menus. You Can</p>
                <p>Order Anything You Like.</p>
            </div>
            <div>
            <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-6">Buy Now</button>
            </div>
            </div>
        <div className="grid grid-cols-1 sm:grid-clos-2 md:grid-cols-3 gap-4">
            {image.map((image, index) => (
                <div key={index} className="flex flex-col">
                   <div className="flex-shrink-0">
                        <img src={image} alt=""
                        className="w-60 h-60 border p-4 border-primary rounded-full "
                         style={{ borderWidth: '5px'}}/>
                    </div>
                    <div className="                                                                                                            ">
                        <div className="flex-grow">
                        <h3 className="mb-3">{items[index]}</h3>
                        <div className="ratings">
                           {/* {Array.from({ length: ratings[index] }).map((_, i) => (
                                <FontAwesomeIcon key={i} icon={faStar} />
                            ))} */}
                        </div>
                        <div>
                            <p>${amounts[index]}</p>
                        </div>
                        <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-6">Buy Now</button>
                    </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};
export default RegularMenu;






