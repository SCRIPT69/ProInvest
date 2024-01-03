import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {
    const rootClasses = [cl.myModal];
    let activenessClass = '';
    if (visible) {
        activenessClass = cl.active;
    }

    return (
        /*setVisible(false) - чтобы закрывалось при клике на чёрную область*/
        <div className={[cl.myModal, activenessClass].join(' ')} onClick={() => setVisible(false)}>
            {/*e.stopPropagation() - чтобы не закрывалось при клике на контентную часть*/}
            <div className={[cl.myModalContent, activenessClass].join(' ')} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
export default MyModal;