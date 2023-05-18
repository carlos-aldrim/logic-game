import { GameJokenpo, Layout, OptionPlayer, RenderConditional } from "component";
import { useGameJokenpo } from "hooks/useJokenpoGame";
import React from "react";

export const Jokenpo: React.FC = () => {
  const { currentStep, handleNextStep } = useGameJokenpo();

  return (
    <Layout>
      <RenderConditional condition={currentStep === 0}>
        <OptionPlayer disabledSoloMode={false} disabledTeamMode={true} onClickSoloMode={handleNextStep} />
      </RenderConditional>
      <RenderConditional condition={currentStep === 1}>
        <GameJokenpo/>
      </RenderConditional>
    </Layout>
  );
};
