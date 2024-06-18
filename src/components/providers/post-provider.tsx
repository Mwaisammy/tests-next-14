"use client";

import React, { useEffect, useState } from "react";
import PostDialog from "../post-dialog";

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <div>
      <PostDialog />
    </div>
  );
}

export default ModalProvider;
