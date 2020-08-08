import React from 'react';
import { action } from '@storybook/addon-actions';
import DatePickerWrapper from 'components/DatePickerWrapper';

export default {
  title: 'DatePickerWrapper',
  component: DatePickerWrapper,
};

export const Default = () => <DatePickerWrapper onChange={action('changed')} value={new Date()} />;
