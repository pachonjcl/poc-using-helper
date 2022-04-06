import { Ad, Cart, clone, ContextKey, EventName, initializeSnowplow, User } from "@inner-source/loblaw-snowplow-helper";

const Component = () => {
    let cart: Cart = {
        cart_id: '1',
        cart_status: '',
        assortment_type: ''
    }

    let user: User = {
        pcid_id: '',
        pco_wallet_id: '',
        login_status: '',
        registration_status: ''
    }

    let ad: Ad = {
        campaign_id: 'x'
    }

    let ad2 = clone(ad);

    console.log(JSON.stringify(ad));
    console.log(JSON.stringify(ad2));

    ad.campaign_id = 'y';

    console.log(JSON.stringify(ad));
    console.log(JSON.stringify(ad2));

    return (<div>
        Component
    </div>)
}

export default Component;
