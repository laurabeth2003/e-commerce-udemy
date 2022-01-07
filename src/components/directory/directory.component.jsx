import React from 'react';
import "./directory.styles.scss"
import MenuItem from "../menu-item/menu-item.component"
//use i.ibb.co to upload your own jpgs

class Directory extends React.Component{
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'HATS',
                  imageUrl: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'JACKETS',
                  imageUrl: 'https://images.unsplash.com/photo-1534702718617-c141fb9f99d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'SNEAKERS',
                  imageUrl: 'https://images.unsplash.com/photo-1628558422453-576457df4b0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'MENS',
                  imageUrl: 'https://images.unsplash.com/photo-1598539962077-e4185f37104f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/mens'
                },

                {
                  title: 'WOMENS',
                  imageUrl: 'https://images.unsplash.com/photo-1618375601660-3e6842f5b791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/womens'
                }
                
            ]
        }
    }
    render() {
        return <div className='directory-menu'>
            {this.state.sections.map(({id, ...otherSectionProps}) => (<MenuItem key={id} {...otherSectionProps} />))}
            
        </div>
    }

}

export default Directory 