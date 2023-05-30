export const MODAL_COMPONENTS_STYLE = {
  container: {
    display: "flex" as "flex",
    flexWrap: "wrap" as "wrap",
    justifyContent: "space-between" as "space-between",
    alignItems: "center" as "center",
    marginBottom: "5rem",
    marginTop: "5rem",
  },
  subContainer: {
    borderColor: "#000",
    borderWidth: "2px",
    borderRadius: "50%",
    margin: "5px",
    display: "flex" as "flex",
    flexDirection: "column" as "column",
    alignItems: "center" as "center",
  },
  img: {
    width: "50px",
    height: "50px",
  },
  modals_Container: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
};
