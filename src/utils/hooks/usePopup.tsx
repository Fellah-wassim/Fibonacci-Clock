import { ReactNode, useState } from "react";
import "./usePopup.css";

interface PopupProps {
  children: ReactNode;
  onClose: () => void;
}

function Popup({ children, onClose }: PopupProps) {
  return (
    <div className="popup-container">
      <div>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function usePopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [children, setChildren] = useState<ReactNode>();

  const displayPopup = (children: ReactNode) => {
    setChildren(children);
    setShowPopup(true);
  };
  const hidePopup = () => setShowPopup(false);

  const PopupComponent = () => {
    return showPopup ? <Popup children={children} onClose={hidePopup} /> : null;
  };

  return { displayPopup, PopupComponent };
}

export default usePopup;
