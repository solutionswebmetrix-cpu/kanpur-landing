import React from 'react';

const SectionHeader = ({
  badge,
  title,
  subtitle,
  className = '',
  badgeClassName = '',
  titleClassName = '',
  subtitleClassName = '',
  titleTag: TitleTag = 'h2'
}) => {
  return (
    <div className={`section-header ${className}`.trim()}>
      {badge && (
        <span className={`section-badge section-tag ${badgeClassName}`.trim()}>{badge}</span>
      )}

      {title && <TitleTag className={`section-title ${titleClassName}`.trim()}>{title}</TitleTag>}

      {subtitle && (
        <p className={`section-subtitle section-desc ${subtitleClassName}`.trim()}>{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
