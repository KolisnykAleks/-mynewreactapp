import React from 'react';

import { Card } from './Card.jsx';

export default {
    title: 'Components/Card',
    component: Card,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  };
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template = (args) => <Card {...args} />;
  
  export const Default = Template.bind({});
  // More export const Primary = Template.bind({});on args: https://storybook.js.org/docs/react/writing-stories/args
  Default.args = {
    id: 3,
    imageUrl: "https://i.pinimg.com/originals/76/51/14/765114e37d73239f7526fc869b563085.png",
    name: "sdsdf",
    temperament: "sting",
  };
  
//   export const Secondary = Template.bind({});
//   Secondary.args = {
//     label: 'Card',
//   };
  
//   export const Large = Template.bind({});
//   Large.args = {
//     size: 'large',
//     label: 'Card',
//   };
  
//   export const Small = Template.bind({});
//   Small.args = {
//     size: 'small',
//     label: 'Card',
//   };
  