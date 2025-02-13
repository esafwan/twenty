import { IconComponent } from 'twenty-ui';

import { EntityChip } from '@/ui/display/chip/components/EntityChip';

import { Filter } from '../types/Filter';

type GenericEntityFilterChipProps = {
  filter: Filter;
  Icon?: IconComponent;
};

export const GenericEntityFilterChip = ({
  filter,
  Icon,
}: GenericEntityFilterChipProps) => (
  <EntityChip
    entityId={filter.value}
    name={filter.displayValue}
    avatarType="rounded"
    avatarUrl={filter.displayAvatarUrl}
    LeftIcon={Icon}
  />
);
