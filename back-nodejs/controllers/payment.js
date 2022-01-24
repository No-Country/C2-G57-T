
const stripe = require('stripe')('sk_test_51KJgkKLUp5Q6apTB5L8WbFPps00FVdOOZIncJHx3X2wARDy521fINm4zFAxI67Jey1VCbyA3ASeR1y6GFK4PA7M600F01bdIln');

const payment = async(req, res) => {
    
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types : ['card'],
            mode: 'payment',
            line_items: req.body.items.map( item => {
                return {
                    price_data: {
                        currency: 'ars',
                        product_data: {
                            name: item.name
                        },
                        unit_amount: item.price * 100  //tiene que estar en centavos
                    },
                    quantity: item.quantity 
                }
            } ) ,
            success_url: `${process.env.CLIENT_URL}/success.html`,
            cancel_url: `${process.env.CLIENT_URL}/cancel.html`

        })
        res.json({ url: session.url })
        
    } catch (e) {
        res.status(500).json({error: e.message})
    }
};

module.exports = {
    payment
}
