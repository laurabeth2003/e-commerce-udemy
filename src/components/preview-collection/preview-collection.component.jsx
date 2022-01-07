import React from 'react';
import CollectItem from '../collection-item/collection-item.component'
import '../preview-collection/preview-collection.styles.scss'
const PreviewCollect = ({title, items}) => (
    <div className='preview-collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map(({id, ...otherItemProps}) => (<CollectItem key={id} {...otherItemProps} />
            ))}
        </div>
    
    </div>

)

export default PreviewCollect