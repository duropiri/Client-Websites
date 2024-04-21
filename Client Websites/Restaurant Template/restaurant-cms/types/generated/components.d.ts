import type { Schema, Attribute } from '@strapi/strapi';

export interface BodySectionInfoSection extends Schema.Component {
  collectionName: 'components_body_section_info_sections';
  info: {
    displayName: 'Info Section';
    description: '';
  };
  attributes: {
    category: Attribute.String & Attribute.DefaultTo<'tincidunt'>;
    heading: Attribute.String &
      Attribute.DefaultTo<'faucibus et molestie ac feugiat sed lectus'>;
    links: Attribute.String & Attribute.DefaultTo<'tempor, orci, dapibus'>;
    image: Attribute.Media & Attribute.Required;
    description: Attribute.RichText;
  };
}

export interface FooterSectionFooterLinks extends Schema.Component {
  collectionName: 'components_footer_section_footer_links';
  info: {
    displayName: 'Footer Links';
    description: '';
  };
  attributes: {
    linksCategory: Attribute.String;
    linksList: Attribute.Blocks;
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
      'footer-section.footer-links': FooterSectionFooterLinks;
      'marquee.marquee': MarqueeMarquee;
    }
  }
}
