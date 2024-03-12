import React from "react";
import MinMax from './MinMax/index'

export default function({onNext, products, onChange, onRemove}) {
    let total = products.reduce((sum, pr) => pr.price * pr.cnt + sum, 0);

    return <div>
        <h1>Cart</h1>
        <hr/>
        <table>
            <tbody>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Cnt</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
                {
                    products.map((prod, index) => (
                        <tr key={prod.id}>
                            <td>{index + 1}</td>
                            <td>{prod.title}</td>
                            <td>{prod.price}</td>
                            <td><MinMax max={prod.rest} current={prod.cnt} onChange={cnt => onChange(prod.id, cnt)} /></td>
                            <td>{ prod.price * prod.cnt }</td>
                            <td>
                                <button type="button" onClick={() => onRemove(prod.id)}>X</button>
                                <button type="button" onClick={() => onChange(prod.id, prod.rest)}>MAX</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <hr/>
        <strong onClick={() => setShowDetails(true)}>Total: {total}</strong>
        <hr/>
        <button type="button" className="btn btn-primary" onClick={onNext}>Move to order</button>
    </div>;
}