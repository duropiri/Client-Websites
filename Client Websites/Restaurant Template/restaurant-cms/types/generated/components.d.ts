import type { Schema, Attribute } from '@strapi/strapi';

export interface BodySectionInfoSection extends Schema.Component {
  collectionName: 'components_body_section_info_sections';
  info: {
    displayName: 'Info Section';
  };
  attributes: {
    category: Attribute.String & Attribute.DefaultTo<'tincidunt'>;
    heading: Attribute.String &
      Attribute.DefaultTo<'faucibus et molestie ac feugiat sed lectus'>;
    description: Attribute.Text &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Sem integer vitae justo eget magna fermentum iaculis.'>;
    links: Attribute.String & Attribute.DefaultTo<'tempor, orci, dapibus'>;
    image: Attribute.Media;
  };
}

export interface MarqueeMarquee extends Schema.Component {
  collectionName: 'components_marquee_marquees';
  info: {
    displayName: 'Marquee';
    description: '';
  };
  attributes: {
    images: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'body-section.info-section': BodySectionInfoSection;
      'marquee.marquee': MarqueeMarquee;
    }
  }
}
