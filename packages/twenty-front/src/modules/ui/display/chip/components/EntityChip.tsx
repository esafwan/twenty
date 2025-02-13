import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { isNonEmptyString } from '@sniptt/guards';
import { IconComponent } from 'twenty-ui';

import { Avatar, AvatarType } from '@/users/components/Avatar';
import { Nullable } from '~/types/Nullable';

import { Chip, ChipVariant } from './Chip';

export type EntityChipProps = {
  linkToEntity?: string;
  entityId: string;
  name: string;
  avatarUrl?: string;
  avatarType?: Nullable<AvatarType>;
  variant?: EntityChipVariant;
  LeftIcon?: IconComponent;
  className?: string;
  maxWidth?: number;
};

export enum EntityChipVariant {
  Regular = 'regular',
  Transparent = 'transparent',
}

export const EntityChip = ({
  linkToEntity,
  entityId,
  name,
  avatarUrl,
  avatarType = 'rounded',
  variant = EntityChipVariant.Regular,
  LeftIcon,
  className,
  maxWidth,
}: EntityChipProps) => {
  const navigate = useNavigate();

  const theme = useTheme();

  const handleLinkClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isNonEmptyString(linkToEntity)) {
      event.preventDefault();
      event.stopPropagation();
      navigate(linkToEntity);
    }
  };

  return (
    <Chip
      label={name}
      variant={
        linkToEntity
          ? variant === EntityChipVariant.Regular
            ? ChipVariant.Highlighted
            : ChipVariant.Regular
          : ChipVariant.Transparent
      }
      leftComponent={
        LeftIcon ? (
          <LeftIcon size={theme.icon.size.md} stroke={theme.icon.stroke.sm} />
        ) : (
          <Avatar
            avatarUrl={avatarUrl}
            entityId={entityId}
            placeholder={name}
            size="sm"
            type={avatarType}
          />
        )
      }
      clickable={!!linkToEntity}
      onClick={handleLinkClick}
      className={className}
      maxWidth={maxWidth}
    />
  );
};
