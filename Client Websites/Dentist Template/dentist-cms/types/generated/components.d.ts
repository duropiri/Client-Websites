import type { Schema, Attribute } from '@strapi/strapi';

export interface HeaderComponentCallsToAction extends Schema.Component {
  collectionName: 'components_header_component_calls_to_actions';
  info: {
    displayName: 'CallsToAction';
    description: '';
  };
  attributes: {
    name: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Watch demo'>;
    href: Attribute.Text & Attribute.DefaultTo<'#'>;
    icon: Attribute.Text &
      Attribute.CustomField<'plugin::heroicons-field.icon-picker'>;
  };
}

export interface HeaderComponentNavigationItem extends Schema.Component {
  collectionName: 'components_header_component_navigation_items';
  info: {
    displayName: 'Navbar';
    description: '';
  };
  attributes: {
    name: Attribute.Text & Attribute.Required & Attribute.DefaultTo<'Home'>;
    description: Attribute.RichText & Attribute.DefaultTo<'Home page'>;
    href: Attribute.Text & Attribute.Required & Attribute.DefaultTo<'#'>;
    flyout: Attribute.Component<'nested.navigation-item', true>;
    icon: Attribute.Text &
      Attribute.CustomField<'plugin::heroicons-field.icon-picker'>;
  };
}

export interface MediaIcon extends Schema.Component {
  collectionName: 'components_media_icons';
  info: {
    displayName: 'Icon';
    description: '';
  };
  attributes: {
    iconName: Attribute.Text & Attribute.DefaultTo<'icon'>;
    iconFile: Attribute.Media;
    heroIcon: Attribute.Text &
      Attribute.CustomField<'plugin::heroicons-field.icon-picker'>;
  };
}

export interface NestedNavigationItem extends Schema.Component {
  collectionName: 'components_nested_navigation_items';
  info: {
    displayName: 'NavigationItem';
    description: '';
  };
  attributes: {
    name: Attribute.Text & Attribute.DefaultTo<'Analytics'>;
    description: Attribute.RichText &
      Attribute.DefaultTo<'Get a better understanding of your traffic'>;
    href: Attribute.Text & Attribute.DefaultTo<'#'>;
    icon: Attribute.Text &
      Attribute.CustomField<'plugin::heroicons-field.icon-picker'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'header-component.calls-to-action': HeaderComponentCallsToAction;
      'header-component.navigation-item': HeaderComponentNavigationItem;
      'media.icon': MediaIcon;
      'nested.navigation-item': NestedNavigationItem;
    }
  }
}
