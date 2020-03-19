import React, { useState } from 'react';
import Modal from '../styles/modal';
import ColorInput from '../styles/colorInput';

export default function AddNote({ dismissModal, pushNote }) {

    const colors = ['#5EFF44', '#68B4EB', '#AC6BFF', '#FDA5FF', '#FFEC44', '#E4E4E4', '#303030'];

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [color, setColor] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (!title.length || ! content.length) {
            alert('Missing fields, check and try again');
            return false;
        }

        pushNote({
            title: title,
            content: content,
            color: color
        });

        dismissModal();
    }

    return(
        <Modal>
            <div className="overlay"></div>
            <div className="content">
                <h2>Add a Note</h2>
                <form onSubmit={handleSubmit}>
                    <div className="inputGroup">
                        <label htmlFor="title">Title</label>
                        <input 
                            type="text" 
                            id="title" 
                            onChange={e => setTitle(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="content">Content</label>
                        <textarea 
                            rows="10" 
                            cols="30" 
                            id="content" 
                            onChange={e => setContent(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inputGroup">
                        <label>Color</label>
                        <div className="colorsWrapper">    
                            {colors && colors.map(c => (
                                <ColorInput key={c} color={c} selected={color === c} onClick={() => setColor(c)} />
                            ))}
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="cancel" type="button" onClick={dismissModal}>Cancel</button>
                        <button className="save" type="submit">Save</button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}