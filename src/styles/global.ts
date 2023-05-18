import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

    *{
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
    }

    :root{

        --color-primary: #27ae60;
        --color-primary-50: #93D7AF;
        --color-secundary: #eb5757;

        --color-grey-600: #333333;
        --color-grey-300: #828282;
        --color-grey-100: #e0e0e0;
        --color-grey-50: #999999;
        --color-grey-0: #f5f5f5;

        --color-negative: #e60000;
        --color-warning: #ffcd07;
        --color-sucess: #168821;
        --color-information: #155bcb;

        --size-0: 36px;
        --size-1: 26px;
        --size-2: 22px;
        --size-3: 18px;
        --size-4: 16px;
        --size-5: 14px;
        --size-6: 12px;

        --weight-1: 700;
        --weight-2: 600;
        --weight-3: 500;
        --weight-4: 400;

        --radius-1: 5px;

    }

    body{
        font-family: 'Inter', sans-serif;
        position: relative;
    }

    button{
        cursor: pointer;
    }
`