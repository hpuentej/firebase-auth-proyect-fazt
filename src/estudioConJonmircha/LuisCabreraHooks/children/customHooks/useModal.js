import { useState } from 'react'

const useModal = (initialValue = false) => {
  const [isModalOpen, setIsOpenModal] = useState(initialValue)
  
  const openModal = () => {
    setIsOpenModal(!isModalOpen)
  }

  const closeModal = () => {
    setIsOpenModal(false)
  }

  return [isModalOpen, openModal, closeModal]
}

export default useModal