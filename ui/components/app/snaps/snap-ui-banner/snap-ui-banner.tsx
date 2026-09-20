import React from 'react';
import { BannerAlert, BannerAlertSeverity } from '../../../component-library';

export type SnapUIBannerProps = {
  severity: BannerAlertSeverity | undefined;
  title: string;
};

export const SnapUIBanner = ({
  children,
  severity,
  title,
}: React.PropsWithChildren<SnapUIBannerProps>) => {
  return (
    <BannerAlert
      className="snap-ui-renderer__banner"
      severity={severity}
      title={title}
    >
      {children}
    </BannerAlert>
  );
};
