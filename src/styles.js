export default {
  overlay: {
    background: "rgba(0, 0, 0, 0.75)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: "auto",
    overflowX: "hidden",
    zIndex: 1000,
    padding: "1.2rem"
  },
  modal: {
    maxWidth: 800,
    position: "relative",
    padding: "1.2rem",
    background: "#ffffff",
    backgroundClip: "padding-box",
    boxShadow: "0 12px 15px 0 rgba(0, 0, 0, 0.25)"
  },
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    border: "none",
    padding: "0.5rem",
    backgroundColor: "transparent",
    display: "flex",
    cursor: "pointer"
  }
};
