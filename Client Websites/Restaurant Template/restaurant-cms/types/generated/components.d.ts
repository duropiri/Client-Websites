import type { Schema, Attribute } from '@strapi/strapi';

export interface BodySectionCenteredStyledContent extends Schema.Component {
  collectionName: 'components_body_section_centered_styled_contents';
  info: {
    displayName: 'centeredStyledContent';
    description: '';
  };
  attributes: {
    category: Attribute.String;
    heading: Attribute.Text;
    links: Attribute.JSON;
    image: Attribute.Media;
    description: Attribute.RichText;
    mapEmbed: Attribute.JSON &
      Attribute.CustomField<'plugin::google-maps.location-picker'>;
  };
}

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
    links: Attribute.JSON;
    image: Attribute.Media;
    description: Attribute.RichText;
  };
}

export interface ClientCreativesClientCarouselImages extends Schema.Component {
  collectionName: 'components_client_creatives_client_carousel_images';
  info: {
    displayName: 'Client Carousel Images';
  };
  attributes: {
    clientCarouselImages: Attribute.Media;
  };
}

export interface ClientCreativesClientLogo extends Schema.Component {
  collectionName: 'components_client_creatives_client_logos';
  info: {
    displayName: 'Client Logo';
  };
  attributes: {
    clientLogo: Attribute.Media & Attribute.Required;
  };
}

export interface ClientCreativesClientMapEmbed extends Schema.Component {
  collectionName: 'components_client_creatives_client_map_embeds';
  info: {
    displayName: 'Client Map Embed';
    description: '';
  };
  attributes: {
    googleMaps: Attribute.JSON &
      Attribute.CustomField<'plugin::google-maps.location-picker'>;
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
      'body-section.centered-styled-content': BodySectionCenteredStyledContent;
      'body-section.info-section': BodySectionInfoSection;
      'client-creatives.client-carousel-images': ClientCreativesClientCarouselImages;
      'client-creatives.client-logo': ClientCreativesClientLogo;
      'client-creatives.client-map-embed': ClientCreativesClientMapEmbed;
      'footer-section.footer-links': FooterSectionFooterLinks;
      'marquee.marquee': MarqueeMarquee;
    }
  }
}
