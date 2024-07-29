

export default function DeleteModal({ dismissModal, handleDelete, deleteTitle }) {
    return (
        <div className="modal">
            <div className="modal_card">
                <h3>Are you sure you want to delete <span>{deleteTitle}</span>?</h3>
                <div className="buttons">
                    <button className='close_btn' onClick={dismissModal}>X</button>
                    <button className='delete_btn' onClick={handleDelete}>Delete</button>
                </div>
            </div>
            <div className="filter"></div>
        </div>
    )
}
