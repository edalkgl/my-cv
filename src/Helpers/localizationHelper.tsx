import { FormattedMessage } from 'react-intl';

export const translate = (
  string: string,
  defaultString: string | null = null
) => {
  return (
    <FormattedMessage id={string} defaultMessage={defaultString || ''}>
      {(text) => <>{text?.[0]}</>}
    </FormattedMessage>
  );
};
