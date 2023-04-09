import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import FollowersCard from "../FollowersCard/FollowersCard";

const FollowersModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme();
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "white"
          ? theme.colors.white[0]
          : theme.colors.gray[0]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size={320} // size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <FollowersCard location="modal" />
    </Modal>
  );
};

export default FollowersModal;
