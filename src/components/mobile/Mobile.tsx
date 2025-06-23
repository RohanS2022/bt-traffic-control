import React, { useState } from "react";
import { Button, Drawer } from "antd";

type Props = {
  open: boolean;
  onClose: () => void;
};

const Mobile: React.FC<Props> = ({ open, onClose }) => {
  return (
    <>
      <Drawer
        title="Mobile View"
        closable={false}
        onClose={onClose}
        open={open}
      ></Drawer>
    </>
  );
};

export default Mobile;
