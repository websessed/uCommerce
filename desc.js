
/* 

v1 
core features:
    authentication 
    -sign up/login
    -basic roles: buyer, seller 
    -profile management: update email, password, profile image etc 
    -email verification & password reset 
    -social login

    product management 
    -categories & tags
    -inventory alerts
    -product variants: color/size options 
    -thumbnail generartion & img opt
    -seller dashboard to add/update/delete products (name, price, images, stock)
    -product detail page with images, description, price 
    
    cart & checkout 
    -add/remove from cart 
    -persist cart in redis 
    -coupon/discount codes 
    -tax & shipping calculation 
    -stripe/paystack checkout → handle payments, one-time or subscription
    
    orders & transactions 
    -order creation after payment success 
    -buyer & seller order history 
    -refund handling 
    -seller payout tracking: simple summary of pending/paid earnings
    
    search & filter 
    -pagination & sorting 
    -fulltext & fuzzy search 
    -filter by category/price range 
    
    analytics dashboard 
    -seller → ( 
        total sales (daily, weekly, monthly),
        revenue by product/category,
        average order value,
        sales growth (weekly, monthly),
        number of orders (total, pending, completed), 
        orders by staus (pending, shipped, delivered, refunded), 
        top selling products (quantity, refunded), 
        repeat buyers, 
        geography/region stats
        inventory (low stock alerts, stock vs sales trend)
        payments (pending payouts, refunded/cancelled orders)
    )

    -buyer → (
        total orders placed,
        total spent, 
        order status breakdown (delivered, pending, refunded)
        wishlist/favorite stats (most-viewed or saved products)
    )

    -uCommerce admin → (
        total users (buyers vs sellers)
        total products listed
        revenue by day/month/category
        cart abandonment rate (adds-to-cart vs checkout completes)
        conversion rate (visitors → orders)
    )

    advanced add-ons 
    -custom multi-seller storefront pages 
    -advanced recommendation engine 
    -ratings & reviews 
    -uDrive (in-built local delivery system)
    -store template theme

    misc / ux 
    -notifs via toast, push and email 
    -loading & error states
    -responsive pwa 
    


post mvp:
    -multi-language support 
    -marketplace escrow 
    -warehouse mgmt for high-volume sellers 
    -uBoost (automated marketing/ads)
    -logistics partners 
    -BNPL (buy now pay later)

tempting feature? 
    -uCoin (stablecoin for the entire marketplace)



why uCommerce over others (for sellers)?
    -instant store creation (under 30 mins)
    -lower seller fees 
    -hybrid marketplace + storefront 
    -AI & automation, uBoost & uDrive 

why uCommerce over others (for buyers)
    -uCoin (coupons & discounts)
    -personalized recommendations
    -lightning-fast checkout 
    -transparent delivery (estimates, tracking)
    -ratings & review 
    -smooth search & filter 

    uCommerce - you get your own branded store (shopify), instantly, that store is also part of a bigger shared marketplace (amazon)
    lower fees & more independence than Amazon, faster growth than shopify, because you don't start from zero traffic 

    Amazon → marketplace without independence
    Shopify → independence without marketplace 
    uCommerce → independence + marketplace + AI + payments in one 

    value prop: setup your store, add products... we handle the rest. 



core revenue streams    
    -platform fees (% of each marketplace transaction)
    -premium features (uBoost, custom store, full analytics & insights)
    -delivery fees from uDrive 
    -BNPL fees 
    -api access 
    -value added services (warehouse mgmt, logistics)



what can be sold on uCommerce?
    -digital products
    -physical goods 
    -services 

team structure 
    -fullstack, product vision & orchestration (me) ~70%
    -strong backend & db engineer ~20%
    -business/marketing co-founder ~10%



tech stack 
    -frontend → sveltekit, ts, typesense
    -backend → node, node, bullmq, python, git actions & docker 
    -database → postgres, redis 
    -monitoring → sentry & Grafana
    -payment → paystack/flutterwave, mobile options 



merchants goal
    -0-6 months → 20-50 active sellers 
    -6-18 months → 500-1000 active sellers 
    -2-3 years → 10k sellers across multiple regions 

*/

