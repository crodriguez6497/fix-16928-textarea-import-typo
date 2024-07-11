import { Injectable } from '@angular/core';
import { BaseStyle } from 'primeng/base';

const theme = ({ dt }) => `
.p-panel {
    border: 1px solid ${dt('panel.border.color')};
    border-radius: ${dt('panel.border.radius')};
    background: ${dt('panel.background')};
    color: ${dt('panel.color')};
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${dt('panel.header.padding')};
    background: ${dt('panel.header.background')};
    color: ${dt('panel.header.color')};
    border-style: solid;
    border-width: ${dt('panel.header.border.width')};
    border-color: ${dt('panel.header.border.color')};
    border-radius: ${dt('panel.header.border.radius')};
}

.p-panel-toggleable .p-panel-header {
    padding: ${dt('panel.toggleable.header.padding')};
}

.p-panel-title {
    line-height: 1;
    font-weight: ${dt('panel.title.font.weight')};
}

.p-panel-content {
    padding: ${dt('panel.content.padding')};
}

.p-panel-footer {
    padding: ${dt('panel.footer.padding')};
}

// For PrimeNG
.p-panel-toggleable.p-panel-expanded > .p-panel-content-container:not(.ng-animating) {
    overflow: visible
}

.p-panel-toggleable .p-panel-content-container {
    overflow: hidden;
}
`;

const classes = {
    root: ({ props }) => [
        'p-panel p-component',
        {
            'p-panel-toggleable': props.toggleable
        }
    ],
    header: 'p-panel-header',
    title: 'p-panel-title',
    headerActions: 'p-panel-header-actions',
    pcToggleButton: 'p-panel-toggle-button',
    contentContainer: 'p-panel-content-container',
    content: 'p-panel-content',
    footer: 'p-panel-footer'
};
@Injectable()
export class PanelStyle extends BaseStyle {
    name = 'panel';

    theme = theme;

    classes = classes;
}
