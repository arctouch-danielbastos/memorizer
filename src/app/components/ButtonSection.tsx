"use client";

import FAB from "ui/FAB";
import { Flex, IconButton } from "@chakra-ui/react";
import Icon from "ui/Icon";

type Props = {
  onClickPeeking: () => void;
  onClickPlay: () => void;
  onClickReset: () => void;
  onClickUndo: () => void;
  progress: number;
};

export default function MemorizerApp({
  onClickPeeking,
  onClickPlay,
  onClickReset,
  onClickUndo,
  progress,
}: Props) {
  const renderPlay = () => <FAB icon="play_arrow" onClick={onClickPlay} />;
  const renderReset = () => <FAB icon="repeat" onClick={onClickReset} />;

  return (
    <Flex py={12} align="center" justify="center" gap={10}>
      <IconButton
        aria-label=""
        icon={<Icon name="skip_previous" />}
        onClick={onClickUndo}
      />
      {progress !== 100 ? renderPlay() : renderReset()}
      <IconButton
        aria-label=""
        icon={<Icon name="remove_red_eye" />}
        onClick={onClickPeeking}
      />
    </Flex>
  );
}
