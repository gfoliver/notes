import React, { useState } from 'react';
import Card from '../styles/card';
import Modal from '../styles/modal';

export default function Note({title, content, color, removeNote}) {
    const [noteModalVisible, setNoteModalVisible] = useState(false);

    function verifyAndRemove() {
        const permission = window.confirm('Do you want to delete this note?');

        if (permission)
            removeNote();
    }

    return(
        <Card color={color}>
            <div className="delete" onClick={verifyAndRemove}>X</div>
            <div className="contentWrapper" onClick={() => setNoteModalVisible(true)}>
                <div className="colorBar"></div>
                <h2 className="title">{title}</h2>
                <p className="content">{content.length > 230 ? content.substr(0, 230) + '...' : content}</p>
            </div>
            <button className="complete" onClick={() => alert('teste')}>Complete</button>
            {noteModalVisible && (    
                <Modal>
                    <div className="overlay"></div>
                    <div className="content noteModal">
                        <div className="colorBar"></div>
                        <button className="delete" onClick={() => setNoteModalVisible(false)}>X</button>
                        <h2>{title}</h2>
                        <p class="fullContent">
                            {content}
                        </p>
                    </div>
                </Modal>
            )}
        </Card>
    )
}