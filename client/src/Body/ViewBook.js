import React from 'react';
import imageBook from '../Image/book.jpg';

function ViewBook({ book }) {
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td><img src={imageBook} width={200} height={200} /></td>
                        <td>
                            <div style={{ padding: "20px" }}>
                                <h1>{book.title}</h1>
                                <h5>{book.description}</h5>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ViewBook
