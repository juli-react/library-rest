import React, {useEffect,useState} from 'react';
import {authorService} from "../../service/author.service";
import {Author} from "../../models/models";
import {AuthorListItem} from "./AuthorListItem"
import {AuthorForm} from "./AuthorForm";

export  function  AuthorsListComponent() {
    const [authors, setAuthors] = useState<Author[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [showForm, setShowForm] = useState<boolean>(false);
    const [itemToUpdate, setItemToUpdate] = useState<Author>({name:""});

    useEffect(() => {
        loadAuthors();
    }, [authors]);

    const loadAuthors = async () => {
        try {
            const data = await authorService.getAllAuthors();
            setAuthors(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    function deleteAuthor(id?:number) {
        // TODO
        if (id){
            setAuthors(currentList => {
                return currentList.filter(a => a.id !== id)
            })
        }

    }

    async function onSubmit(author:Author){
        if (author.id){
            const data = await authorService.updateAuthor(author.id,author)
            setAuthors(currentList => {
                return currentList.map(a => a.id === author.id? data:a)
            })
        } else {
            const data = await authorService.createAuthor(author)
            setAuthors(currentList => { currentList.push(data); return currentList;})
        }
        setShowForm(false)
    }
    function showUpdateAuthor(id?:number) {
        // TODO
        if (id){
            const authorToUpdate=authors.find(a=>a.id===id)
            if (authorToUpdate){
                setItemToUpdate(authorToUpdate)
                setShowForm(true)
            }
        }
    }

    return (
        <div>
            <h1>Authors</h1>
            <div style={{padding:"15px"}}>
                {showForm ? <AuthorForm data={itemToUpdate}  onSubmit={onSubmit} onClose={()=> setShowForm(false)} /> : <button className="btn" onClick={ () => setShowForm(true) } > Add author</button>}
            </div>
            {authors.length === 0 && "No Authors"}
            <ul className="list">
                {
                    authors.map(a=> {
                        return(
                            <AuthorListItem id={a.id} title={a.name} updateAuthor={showUpdateAuthor} deleteAuthor={deleteAuthor} key={a.id}/>
                        )
                    })
                }
            </ul>
        </div>
    );
}
