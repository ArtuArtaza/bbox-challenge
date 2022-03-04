import Menu from '../components/Menu/Menu'
import { data } from '../data';
export default {
    title:'Menu/BBoxChallenge',
    component:Menu,

}

const Template = (args) => <Menu {...args}/>

export const Default = Template.bind({});

Default.args = {
    data:data,
    label: 'DefaultData',
}