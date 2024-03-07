import React from 'react';
import Client from '../core/Client';
import { EditIcon, DeleteIcon } from '@/assets/icons';

interface TableProps {
    clients: Client[];
    selectedClient?: (client: Client) => void;
    deleteClient?: (client: Client) => void;
}

const Table: React.FC<TableProps> = ({ clients, selectedClient, deleteClient }) => {

    const hasActions = selectedClient || deleteClient;

    const renderTableHead = () => {
        return (
            <thead className={'bg-gradient-to-r from-purple-500 to-purple-800 text-grey-200'}>
                <tr>
                    <th className="p-4 text-left">Id</th>
                    <th className="p-4 text-left">Name</th>
                    <th className="p-4 text-left">Age</th>
                    {hasActions && <th className="p-4 text-center">Actions</th>}
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
                        {hasActions && (
                            <td className="p-4 flex justify-center">
                                {selectedClient && (
                                    <button onClick={() => selectedClient?.(client)} className="p-2 m-1 flex justify-center items-center text-green-500 hover:bg-gray-100 rounded-full">
                                        {EditIcon}
                                    </button>
                                )}
                                {deleteClient && (
                                    <button onClick={() => deleteClient?.(client)} className="p-2 ms-1 flex justify-center items-center text-red-500 hover:bg-gray-100 rounded-full">
                                        {DeleteIcon}
                                    </button>
                                )}
                            </td>
                        )}
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
