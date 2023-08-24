import React from "react";


const Delivery=()=>{
return(
    <div className="m-20">
        <div className="flex space-x-80 gap-x-80">
        <div>
            <h1 className="text-6xl font-bold font-mono">Best <span className="text-primary">Delivery</span>
            <br/>Catergory</h1>
        </div>
        <div>
            <p>Here Are Some Of Our Best Distributed
                <br/> Catergory,If You Want You Can Order<br/>From Here
            </p>
        </div>
        </div>
        <div className="flex space-x-60 gap-x-40">
        <div>
            <img src="./image/buger.png" className="w-80 flex-initial "></img>
            <p>Chicken Burger</p>
            <a href="order now">Order Now</a>
        </div>
        <div>
            <img src="./image/pizza drip.png" className="w-80 flex-initial"></img>
            <p className="chicken">Chicken Pizza</p>
            <a href="order now" className="w-64">Order Now</a>
        </div>
        <div>
            <img src="./image/fries drip.png" className="w-80 flex-initial"></img>
            <p>French Fries</p>
            <a href="order now">Order Now</a>
        </div>
        </div>
        
    </div>
)
}
export default Delivery 