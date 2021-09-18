import alfy from 'alfy';
import clipboardy from 'clipboardy';
import transform from './transform.js';

const input = clipboardy.readSync();

const items = [
  {
    title: 'Single -> Double',
    subtitle: 'Transform all single quotes to double quotes',
    arg: transform(input, '\'', '"'),
  },
  {
    title: 'Single, Backtick -> Double',
    subtitle: 'Transform all single quotes, backticks to double quotes',
    arg: transform(transform(input, '\'', '"'), '`', '"')
  },
  {
    title: 'Double -> Single',
    subtitle: 'Transform all double quotes to single quotes',
    arg: transform(input, '"', '\'')
  },
  {
    title: 'Double, Backtick -> Single',
    subtitle: 'Transform all double quotes to single quotes',
    arg: transform(transform(input, '"', '\''), '`', '\'')
  },
  {
    title: 'Single, Double -> Backtick Quotes',
    subtitle: 'Transform all quotes to backticks',
    arg: transform(transform(input, '\'', '`'), '\"', '`')
  },
];

alfy.output(items);

