import React from 'react';
import Client from '../core/Client';

interface TableProps {
    clients: Client[];
}

const Table: React.FC<TableProps> = ({ clients }) => {
    const renderTableHead = () => {
        return (
            <thead className={'bg-gradient-to-r from-purple-500 to-purple-800 text-grey-200'}>
                <tr>
                    <th className="p-4 text-left">Id</th>
                    <th className="p-4 text-left">Name</th>
                    <th className="p-4 text-left">Age</th>
                    <th className="p-4 text-left">Actions</th>
                </tr>
            </thead>
        )
    }

    const renderTableBody = () => {
        return (
            <tbody>
                {clients?.map((client, index) => (
                    <tr key={client.id} className={index % 2 === 0 ? 'bg-purple-100' : 'bg-purple-300'}>
                        <td className="p-4 text-left">{client.id}</td>
                        <td className="p-4 text-left">{client.name}</td>
                        <td className="p-4 text-left">{client.age}</td>
                        <td className="p-4 text-left">
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        )
    }

    return (
        <table className={'w-full rounded-xl overflow-hidden'}>
            {renderTableHead()}
            {renderTableBody()}
        </table>
    )
}

export default Table;
