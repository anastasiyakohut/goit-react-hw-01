import css from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {

    const rowRender = items.map((item) => {
        return (
            <tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
            </tr>  
        );
    });

    return (
        <table className={css.table}>
            <thead className={css.markingList}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>{rowRender}</tbody>

        </table>
    );
}