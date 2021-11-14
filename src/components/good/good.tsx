interface GoodProps{


}

export const Good = (props:GoodProps)=>{
    return (
        <div className="good">
             <img src="/assets/images/product/product-image.jpg"></img>
             <div className="good_container">
                 <div className="good_name">
                     <p className="good_title">[brand] good_title</p>
                     <p className="good_short_desc">good short desc</p>
                 </div>
                 <p className="good_price">31,000원</p>
                 <div className="good_info">
                     
                 </div>
             </div>
        </div>
    )
}