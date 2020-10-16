import React from 'react';
import { BaseSvg, SvgProps } from '@components/icons/_base';

export const ContractCallIcon: SvgProps = props => (
  <BaseSvg {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="6" cy="6" r="2" />
    <circle cx="18" cy="18" r="2" />
    <line x1="6" y1="8" x2="6" y2="16" />
    <path d="M11 6h5a2 2 0 0 1 2 2v8" />
    <polyline points="14 9 11 6 14 3" />
  </BaseSvg>
);
