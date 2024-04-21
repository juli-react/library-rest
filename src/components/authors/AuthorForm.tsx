import { useState } from 'react';
import { Author } from '../../models/models';
interface AuthorFormProps {
    data?: Author;
    onSubmit: (author: Author) => void;
    onClose: () => void;
}
export function AuthorForm({ data, onSubmit, onClose }: AuthorFormProps) {
    const [name, setName] = useState<string>(data?.name || '');

    function handleSubmit(e: any) {
        e.preventDefault();
        const trimmedName = name.trim();
        if (trimmedName !== '') {
            onSubmit({
                name: name,
                id: data?.id,
            });
            setName('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className='new-item-form'>
            <div className='form-row'>
                <label htmlFor='name'>Author Name</label>
                <input
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    type='text'
                    id='name'
                    name='name'
                />
            </div>

            <div className='actions'>
                <button className='btn' type='submit'>
                    {data?.id ? 'Update' : 'Add'}
                </button>

                <button className='btn' type='button' onClick={() => onClose()}>
                    Close
                </button>
            </div>
        </form>
    );
}