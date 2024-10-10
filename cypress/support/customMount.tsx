import {mount, MountOptions} from 'cypress/react18';
import React, {ReactNode} from 'react';
interface ComponentWrapperProps {
    children: ReactNode;
}

const TestWrapper: React.FC<ComponentWrapperProps> = ({children}) => {
    return children;
}

const customMount = (component: React.ReactNode,
    options: MountOptions = {}
): any => {
    return mount(<TestWrapper>{component}</TestWrapper>)
}

export default customMount;