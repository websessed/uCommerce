
/* 

v1 
core features:
    -authentication (sign up/login, roles: buyer, seller)
    -product mgmt (
        seller dashboard to add/update/delete products (name, price, images, stock)
        product detail page with images, description, price 
    )
    -cart & checkout (
        add/remove from cart 
        persist cart in redis 
        stripe checkout → handle payments, one-time or subscription
    )
    -orders (
        order creation after payment success 
        buyer can see order history 
        seller can see orders for their products 
    )
    -search & filter (
        search prodcuts by name/description
        filter by category/price range 
    )
    -basic analytics (total sales & number of orders)



add-ons:
    -marketplace escrow 
    -custom multi-seller storefront pages 
    -advanced recommendation engine 
    -ratings & reviews 
    -warehouse stock management 
    -internationalization & multi-currency 
    -ai-generated product descriptions 
    -uBoost (automatic product ads for SM)


why uCommerce over other platforms?
    -instant store creation (under 5 mins)
    -embedded payment flexibility 
    -lower seller fees 
    -hybrid marketplace + storefront 
    -ai seller tools 
    -buyer rewards (uCoin; used for discounts)
    -hyperfast checkout 
    -built-in logistics partnerships

*/