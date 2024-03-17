import React, {useState} from "react";

import Cart from "./Cart";
import Order from "./Order";
import Result from "./Result";

import SettingsContext from "./contexts/settings";

export default function() {
    // settings
    let [settings, setSettings] = useState({ lang: 'ru', theme: 'light' });

    // router parody
    let [page, setPage] = useState('cart');
    let moveToCart = () => setPage('cart');
    let moveToOrder = () => setPage('order');
    let moveToResult = () => setPage('result');

    // products
    let [ products, setProducts ] = useState(productsStub());
    let [ showDetails, setShowDetails ] = useState(false);
    let [ showFaq, setShowFaq ] = useState(false);

    let total = products.reduce((sum, pr) => pr.price * pr.cnt + sum, 0);

    let setProductCnt = (id, cnt) => {
        setProducts(products.map(prod => prod.id != id ? prod : ({ ...prod, cnt })));
    }

    let removeProduct = (id) => {
        setProducts(products.filter(el => el.id !== id));
    }

    // order
    let [orderForm, setOrderForm] = useState([
        { name: 'email', label: 'Email', value: '', valid: false, pattern: /^.+@.+$/ },
        { name: 'phone', label: 'Phone', value: '', valid: false, pattern: /^\d{5,10}.+$/ },
        { name: 'name', label: 'Name', value: '', valid: false, pattern: /^.{2,}$/ },
    ]);

    let orderData = {};
    orderForm.forEach(field => {
        orderData[field.name] = field.value;
    });

    let orderFormUpdate = (name, value) => {
        setOrderForm(orderForm.map(field => {
            if(field.name != name) {
                return field;
            }
            let valid = field.pattern.test(value);
            return { ...field, value, valid };
        }));
    };

    return <SettingsContext.Provider value={settings}>
        <div className="container mt-1">
            { page === 'cart' &&
                <Cart
                    onNext={moveToOrder}
                    products={products}
                    onChange={setProductCnt}
                    onRemove={removeProduct}
                /> }
            { page === 'order' &&
                <Order
                    fields={orderForm}
                    onNext={moveToResult}
                    onPrev={moveToCart}
                    onChange={orderFormUpdate}
                />
            }
            { page === 'result' &&
                <Result
                    products={products}
                    orderData={orderData}
                />
            }

            <hr/>
            <footer>
                <button type="button" onClick={() => setSettings({...settings, lang: 'ru'})}>ru</button>
                <button type="button" onClick={() => setSettings({...settings, lang: 'en'})}>en</button>
            </footer>

        </div>;
    </SettingsContext.Provider>
}

function productsStub() {
    return [
        {
            id: 100,
            title: 'Iphone 200',
            price: 12000,
            rest: 10,
            cnt: 1
        },
        {
            id: 101,
            title: 'Samsung AAZ8',
            price: 22000,
            rest: 5,
            cnt: 1
        },
        {
            id: 103,
            title: 'Nokia 3310',
            price: 5000,
            rest: 2,
            cnt: 1
        },
        {
            id: 105,
            title: 'Huawei ZZ',
            price: 15000,
            rest: 8,
            cnt: 1
        }
    ]
}