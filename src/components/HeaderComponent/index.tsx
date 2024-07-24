import React from 'react';
import { IContentHeaderProps } from '../../Interfaces/Interface';

import * as C from './styles';

const HeaderComponent: React.FC<IContentHeaderProps> = ({
    title,
    linecolor,
    children,
    children2
}) => {
    return (
        <C.Container>
            <C.TitleContainer $lineColor={ linecolor }>
                <h1>{ title }</h1>
            </C.TitleContainer>
            { children2 }
            <C.Controllers>
                { children }
            </C.Controllers>
        </C.Container>
    );
}

export default HeaderComponent;