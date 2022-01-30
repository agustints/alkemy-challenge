import { useDetectClickOutside } from "react-detect-click-outside";
import { ModalContainer, ModalContent } from "./styles";

export default function index({ visible }) {
  return (
    <ModalContainer visible={visible}>
      <ModalContent>
        <h2>Test</h2>
      </ModalContent>
    </ModalContainer>
  );
}
