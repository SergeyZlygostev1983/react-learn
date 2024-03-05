import React, {useState} from "react";
import MinMax from "./MinMax";
import {func} from "prop-types";

export default function() {
    let [ products, setProducts ] = useState(productsStub());

    let setCnt = (id, cnt) => {
        setProducts(
            products.map(prod => prod.id != id ? prod : ({
                ...prod,
                cnt
            }) )
        );
    }

    return <div className="test">
        <h1>Products list</h1>
        <table>
            <tbody>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Cnt</th>
                    <th>Total</th>
                </tr>
                {
                    products.map((prod, index) => (
                        <tr key={prod.id}>
                            <td>{index + 1}</td>
                            <td>{prod.title}</td>
                            <td>{prod.price}</td>
                            <td><MinMax max={prod.rest} current={prod.cnt} onChange={cnt => setCnt(prod.id, cnt)} /></td>
                            <td></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>;
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