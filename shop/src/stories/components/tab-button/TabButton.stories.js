import { TabButton } from './TabButton';

export default {
    title: 'Practice/TabButton',
    component: TabButton,
    tags: ['autodocs'],
    argTypes: {
        btn1: { control: 'text' },
        btn2: { control: 'text' },
        btn3: { control: 'text' },
        btnActive: { control: 'radio' },
    },
};

export const Hello = {
    args: {
        btn1: '상세 정보',
        btn2: '리뷰',
        btn3: 'Q&A',
    },
};
