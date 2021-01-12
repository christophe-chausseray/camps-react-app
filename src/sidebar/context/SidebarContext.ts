import React from 'react';

type SidebarContextValue = {
  isExpanded: boolean,
  updateIsExpanded: (isExpanded: boolean) => void;
  campingId: string|null;
  updateCampingId: (campingId: string) => void;
};

const SIDEBAR_DEFAULT_VALUE = {
  isExpanded: false,
  updateIsExpanded: () => {},
  campingId: null,
  updateCampingId: () => {}
}

const SidebarContext = React.createContext<SidebarContextValue>(SIDEBAR_DEFAULT_VALUE);

export { SidebarContextValue, SidebarContext }
