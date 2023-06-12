import { TabButton } from './TabButton';

export default {
    title: 'Practice/TabButton',
    component: TabButton,
    tags: ['autodocs'],
    argTypes: {
        btn0: { control: 'text' },
        btn1: { control: 'text' },
        btn2: { control: 'text' },
        btnActive: { control: 'radio' },
    },
};

export const Hello = {
    args: {
        btn0: '상세 정보',
        btn1: '리뷰',
        btn2: 'Q&A',
    },
};
