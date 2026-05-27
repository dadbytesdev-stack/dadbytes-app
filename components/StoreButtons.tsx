interface StoreButtonsProps {
  googlePlayUrl: string;
  appStoreUrl: string;
}

export default function StoreButtons({ googlePlayUrl, appStoreUrl }: StoreButtonsProps) {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      <a
        href={googlePlayUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-db-text text-db-bg px-5 py-3 rounded-xl text-sm font-medium hover:opacity-80 transition-opacity"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.18 23.76c.33.18.7.22 1.06.13L14.84 12 4.24.11C3.88.02 3.51.06 3.18.24 2.48.64 2 1.43 2 2.31v19.38c0 .88.48 1.67 1.18 2.07z"/>
          <path d="M17.82 9.35L5.55 2.27 15.4 12l2.42-2.65z"/>
          <path d="M17.82 14.65 15.4 12l-9.85 9.73 12.27-7.08z"/>
          <path d="M21.4 10.35 18.9 9l-3.5 3 3.5 3 2.5-1.35c.93-.53.93-1.77 0-2.3z"/>
        </svg>
        View on Google Play
      </a>
      <a
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-db-text text-db-bg px-5 py-3 rounded-xl text-sm font-medium hover:opacity-80 transition-opacity"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        View on App Store
      </a>
    </div>
  );
}
