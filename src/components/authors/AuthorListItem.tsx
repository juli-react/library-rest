import React from 'react';

interface AuthorListItemProps {
    id?: number;
    title: string;
    deleteAuthor: (id?: number) => void;
    updateAuthor: (id?: number) => void;
}

export function AuthorListItem({
                                   id,
                                   title,
                                   deleteAuthor,
                                   updateAuthor,
                               }: AuthorListItemProps) {
    return (
        <li className='item'>
            <p className='title'>{title}</p>
            <div className='btn-wrap'>
                <button onClick={() => updateAuthor(id)} className='btn btn-primary'>
                    Update
                </button>
                <button onClick={() => deleteAuthor(id)} className='btn btn-danger'>
                    Delete
                </button>
            </div>
        </li>
    );
}
