import React, { useRef } from 'react'
import Modal, { ModalContent } from '../modal/Modal'

export default function TrailerModal(props) {
    const item = props.item
    const iframeRef = useRef()
    const onClose = () => iframeRef.current.setAttribute('src', '')
    
    return (
        <Modal active={false} id={`modal__${item.id}`}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
            </ModalContent>
        </Modal>
    )
}
