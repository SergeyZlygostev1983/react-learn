import React, {useMemo, useState} from "react";
import MinMax from "./MinMax";
import useWindowSize from "./hooks/useWindowSize";
import Modal from "./Modal";
import BModal from "react-bootstrap/Modal";

export default function() {
    let {width, height} = useWindowSize();

    let [ products, setProducts ] = useState(productsStub());
    let [ showDetails, setShowDetails ] = useState(false);
    let [ showFaq, setShowFaq ] = useState(false);

    let total = products.reduce((sum, pr) => {
        return pr.price * pr.cnt + sum;
    }, 0);

    // let total = useMemo(() => products.reduce((sum, pr) => pr.price * pr.cnt + sum, 0), [products]);

    let setCnt = (id, cnt) => {
        setProducts(
            products.map(prod => prod.id != id ? prod : ({
                ...prod,
                cnt
            }) )
        );
    }

    let removeProduct = (id) => {
        setProducts(products.filter(el => el.id !== id));
    }

    return <div className="test container mt-1">
        <h1>Products list</h1>
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
                            <td><MinMax max={prod.rest} current={prod.cnt} onChange={cnt => setCnt(prod.id, cnt)} /></td>
                            <td>{ prod.price * prod.cnt }</td>
                            <td>
                                <button type="button" onClick={() => removeProduct(prod.id)}>X</button>
                                <button type="button" onClick={() => setCnt(prod.id, prod.rest)}>MAX</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <hr/>
        <strong onClick={() => setShowDetails(true)}>Total: {total}</strong>
        <Modal
            showed={showDetails}
            title={`${products.length} in list, please pay`}
            onClose={() => setShowDetails(false)}
        >
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
                                <td><MinMax max={prod.rest} current={prod.cnt} onChange={cnt => setCnt(prod.id, cnt)} /></td>
                                <td>{ prod.price * prod.cnt }</td>
                                <td>
                                    <button type="button" onClick={() => removeProduct(prod.id)}>X</button>
                                    <button type="button" onClick={() => setCnt(prod.id, prod.rest)}>MAX</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Modal>
        <hr/>
        <footer>
            <strong onClick={() => setShowFaq(true)}>FAQ</strong>
            <BModal show={showFaq} onHide={() => setShowFaq(false)}>
                <BModal.Header>
                    <p>Attention</p>
                </BModal.Header>
                <BModal.Body>
                    <p>Hello Boot</p>
                </BModal.Body>
            </BModal>
        </footer>
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