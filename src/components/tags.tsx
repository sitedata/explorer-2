import * as React from 'react';
import { color, FlexProps } from '@stacks/ui';

import { Badge } from '@components/badge';
import { TransactionType } from '@models/transaction.interface';
import { getTxTypeName } from '@common/transaction-names';
import { getTxTypeIcon } from './transaction-item';

export const transactionTypeColor = {
  [TransactionType.SMART_CONTRACT]: '#0F5257',
  [TransactionType.CONTRACT_CALL]: '#F9A14D',
  [TransactionType.TOKEN_TRANSFER]: 'blue',
  [TransactionType.COINBASE]: '#6014B8',
  [TransactionType.POISON_MICROBLOCK]: '#AAA9DD',
};

export interface TagProps extends FlexProps {
  type: TransactionType;
  onClick?: any;
}

export const Tag = ({ type, ...rest }: TagProps) => {
  const Icon = getTxTypeIcon(type);
  return (
    <Badge
      labelProps={{ display: 'flex', alignItems: 'center' }}
      background={color('bg')}
      color={color('text-body')}
      {...rest}
    >
      <Icon mr="extra-tight" size="16px" />
      {getTxTypeName(type)}
    </Badge>
  );
};
