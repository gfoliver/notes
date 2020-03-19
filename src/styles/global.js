import { createGlobalStyle } from 'styled-components';

import RobotoRegular from '../fonts/Roboto-Regular.ttf';
import RobotoBold from '../fonts/Roboto-Bold.ttf';

export default createGlobalStyle`

    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoRegular});
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoBold});
        font-weight: 700;
        font-style: normal;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        width: 100%;
        background: #252525;
        padding: 80px;
        font-family: 'Roboto';

        h1 {
            font-weight: bold;
            color: #fff;
            font-size: 48px;
            margin-bottom: 50px;
        }

        .notes {
            margin-top: 30px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 30px;
        }
    }
`