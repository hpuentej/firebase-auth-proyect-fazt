import "./Modal.css";

export function Modal({ isModalOpen, closeModal, title, children }) {

  const handleModalDialogClick = (e) => {
    e.stopPropagation()
  }

  return (
    <>
      <div className={`modal ${isModalOpen && "modal-open"}`} onClick={closeModal}>
        <div className="modal__dialog" onClick={handleModalDialogClick}>
          <h1>{title}</h1>
          <button onClick={closeModal}>Close Modal</button>
          {children}
        </div>
      </div>
    </>
  );
}
