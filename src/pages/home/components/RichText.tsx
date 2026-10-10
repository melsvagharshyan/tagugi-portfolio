import type { ParseKeys } from 'i18next';
import { Trans } from 'react-i18next';

interface RichTextProps {
  i18nKey: ParseKeys;
  emClassName?: string;
}

export const RichText = ({ i18nKey, emClassName = 'text-wine' }: RichTextProps) => (
  <Trans i18nKey={i18nKey} components={{ em: <em className={emClassName} /> }} />
);
