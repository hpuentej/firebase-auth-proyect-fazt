import React from "react";
import { Modal } from "./Modal";

export const GalleryModal = (props) => {
  return (
    <Modal {...props} title="newGallery">
      <h1>Imagen 1</h1>
      <h1>Imagen 2</h1>
      <h1>Imagen 3</h1>
    </Modal>
  );
};
