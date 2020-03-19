import React from 'react';
import Card from '../styles/card';

export default function Note({title, content, color, removeNote}) {
    return(
        <Card color={color}>
            <div className="colorBar"></div>
            <div className="delete" onClick={removeNote}>X</div>
            <h2 className="title">{title}</h2>
            <p className="content">{content.length > 230 ? content.substr(0, 230) + '...' : content}</p>
            <button className="complete" onClick={() => void(0)}>Complete</button>
        </Card>
    )
}