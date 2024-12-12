import { Modal, Box, Button, Typography } from "@mui/material";

const ConfirmModal = ({ isOpen, onClose, onConfirm, message }) => (
  <Modal open={isOpen} onClose={onClose}>
    <Box sx={{ ...modalStyle }}>
      <Typography>{message}</Typography>
      <Box sx={{ mt: 2, display: "flex", justifyContent: "space-around" }}>
        <Button onClick={onConfirm} variant="contained" color="primary">
          Confirm
        </Button>
        <Button onClick={onClose} variant="outlined" color="secondary">
          Cancel
        </Button>
      </Box>
    </Box>
  </Modal>
);

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 10,
  p: 4,
};

export default ConfirmModal;
