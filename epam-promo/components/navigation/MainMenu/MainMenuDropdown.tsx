import * as React from 'react';
import cx from 'classnames';
import { Dropdown, MainMenuDropdownProps } from '@epam/uui-components';
import * as css from './MainMenuDropdown.scss';
import { MainMenuButton } from './MainMenuButton';

export class MainMenuDropdown extends React.Component<MainMenuDropdownProps> {
    render() {
        return (
            <Dropdown
                renderTarget={ props => (
                  <MainMenuButton
                    caption={ this.props.caption }
                    { ...props }
                    rawProps={ this.props.rawProps }
                    isLinkActive={ this.props.isLinkActive }
                    isDropdown
                  />
                ) }
                renderBody={ props => (
                    <div className={ cx(css.dropdownBody) }>
                        { React.Children.map(this.props.children, item => {
                            if (!item) return item;
                            return React.createElement(item.type,  {
                                ...item.props,
                                onClick: () => {
                                    item.props.onClick?.();
                                    props.onClose();
                                },
                            });
                        }) }
                    </div>
                ) }
                placement="bottom-start"
            />
        );
    }
}
