import React from "react";
import PropTypes from "prop-types";
import { AvatarContainer, HealthButton, Badge } from "common";
import { SubH1, Note2 } from "./Typography";
import {
  ClientCardStyled,
  ContainerFlex,
  DividerStyled,
  BoldStyled,
} from "./styles";
import { mainColors, mockMoods } from "utils";

const ClientCard = ({
  id,
  isDecisionMaker,
  avatarId,
  accountId: { healthScore, name: companyName },
  // Account: {
  //   Name: companyName,
  //   LastActivityDate: lastContact
  // },
  onNameClick,
  onBadgeClick,
  name: clientName,
  position,
  lastContact,
  strategy: { items: strategyItems },
}) => {
  if (companyName.length > 18) {
    companyName = companyName.substring(0, 17);
  }
  const score = parseFloat(healthScore);
  const isChamp = score > 4.5;
  const isImpatient = avatarId === "impatientGirl";
  const clientMood = mockMoods[avatarId];
  const renderBadges = strategyItems.map((strategyItem, index) => (
    <Badge key={index} strategy={strategyItem.badgeName} />
  ));

  // Props
  const avatarProps = {
    mood: clientMood,
    mode: "croped",
    isDecisionMaker,
    isChamp,
    isImpatient
  };
  if (onNameClick) {
    avatarProps.onClick = () => onNameClick(id, clientName);
  }
  const noteProps = {
    style: { color: mainColors.grey2 },
  };
  const badgeProps = onBadgeClick
    ? { onClick: () => onBadgeClick(true, id) }
    : {};

  return (
    <ClientCardStyled>
      <AvatarContainer {...avatarProps} />
      <div onClick={() => onNameClick(id)}>
        <SubH1>{clientName}</SubH1>
      </div>
      <Note2>
        {position} at <BoldStyled>{companyName}</BoldStyled>
      </Note2>
      <Note2 {...noteProps}>{lastContact}</Note2>
      <DividerStyled />
      <ContainerFlex>
        <HealthButton healthScore={parseFloat(healthScore)} />
        <div {...badgeProps}>{renderBadges}</div>
      </ContainerFlex>
    </ClientCardStyled>
  );
};

ClientCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  accountId: PropTypes.object.isRequired,
  strategyItems: PropTypes.array,
  onNameClick: PropTypes.func,
  onBadgeClick: PropTypes.func,
};

export default ClientCard;
