import React from 'react';
import ShopData from './shopdata';
import '../../components/preview-collection/preview-collection.component';
import PreviewCollect from '../../components/preview-collection/preview-collection.component';
class ShopPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            collections: ShopData

        }
    }

    render() {
        const {collections} = this.state;
        return (<div className='shop-page'>
            {collections.map(({ id, ...otherCollectionProps}) => (<PreviewCollect key={id} {...otherCollectionProps} />))}
        </div>
        )
    }
}


export default ShopPage