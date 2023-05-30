import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MODAL_COMPONENTS_STYLE } from "./modal-components.style";

type ModalProps = {
  buttonText?: any;
  heading?: any;
  description?: any;
  company?: any;
  duration?: any;
  role?: any;
  tasks?: any[];
  technologies?: any[];
  project_name?: any;
};

export default function Modals({
  buttonText,
  heading,
  company,
  duration,
  role,
  tasks,
  technologies,
  project_name,
}: ModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formatTasks = (tasks?: any[]) => {
    return tasks?.map((task, index) => (
      <Typography key={index} id="modal-modal-description" sx={{ mt: 2 }}>
        {task}
      </Typography>
    ));
  };

  return (
    <div>
      <Button onClick={handleOpen}>{buttonText}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={MODAL_COMPONENTS_STYLE.modals_Container}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {heading}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Company Name: {company} Duration: [{duration}]
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Job Duration: {duration}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Company Role: {role}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Project Name: {project_name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Job Tasks
          </Typography>
          {formatTasks(tasks)}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Main Technologies used: {technologies?.join(", ")}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
