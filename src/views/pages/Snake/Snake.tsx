import { GameSnake, Layout, OptionPlayer, RenderConditional } from "component";
import { useGameSnake } from "hooks/useGameSnake";
import React from "react";

export const Snake: React.FC = () => {
  const { currentStep, handleNextStep, handleBackStep } = useGameSnake();

  React.useEffect(() => {
    handleBackStep();
  }, []);

  return (
    <Layout>
      <RenderConditional condition={currentStep === 0}>
        <OptionPlayer
          disabledSoloMode={false}
          disabledTeamMode={true}
          onClickSoloMode={handleNextStep}
        />
      </RenderConditional>
      <RenderConditional condition={currentStep === 1}>
        <GameSnake />
      </RenderConditional>
    </Layout>
  );
};
