import { GalleryModal } from "./components/GalleryModal";
import { Modal } from "./components/Modal";
import useModal from "./customHooks/useModal";

export const LearnChildren = () => {
  const [isLoginModalOpen, openLoginModal, closeLoginModal] = useModal();
  const [isChatModalOpen, openChatModal, closeChatModal] = useModal();
  const [isGalleryModalOpen, openGalleryModal, closeGalleryModal] = useModal();

  return (
    <>
      <div>
        <h1 className="text-3xl mb-3">Childrens</h1>
        <button onClick={openLoginModal} className="mr-2 p-2 bg-slate-300 rounded-md">
          {isLoginModalOpen ? "Close Login Modal" : "Open Login Modal"}
        </button>

        <button onClick={openChatModal} className="mr-2 p-2 bg-slate-300 rounded-md">
          {isChatModalOpen ? "Close Chat Modal" : "Open Chat Modal"}
        </button>

        <button onClick={openGalleryModal} className="p-2 bg-slate-300 rounded-md">
          {isGalleryModalOpen ? "Close Gallery Modal" : "Open Gallery Modal"}
        </button>


        <Modal
          isModalOpen={isLoginModalOpen}
          closeModal={closeLoginModal}
          title={"Login"}
        >
          <form>
            <input type="email" placeholder="hpuentej@uni.pe" />
            <input type="password" placeholder="********" />
          </form>
        </Modal>

        <Modal
          isModalOpen={isChatModalOpen}
          closeModal={closeChatModal}
          title={"Chat"}
        >
          <p>
            {" "}
            Hola!! <b>-Hans</b>
          </p>
          <p>
            {" "}
            Que hace? <b>-Pamela</b>
          </p>
        </Modal>
        <GalleryModal
          isModalOpen={isGalleryModalOpen}
          closeModal={closeGalleryModal}
          // title={"Gallery"}
        />
      </div>
    </>
  );
};
