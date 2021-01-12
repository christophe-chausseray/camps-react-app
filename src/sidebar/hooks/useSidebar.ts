import React from 'react';
import { SidebarContextValue } from '../context';

const useSidebar = (): SidebarContextValue => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [campingId, setCampingId] = React.useState(null);

  const updateIsExpanded = React.useCallback((isExpanded: boolean): void => {
    setIsExpanded(isExpanded);
  }, []);

  const updateCampingId = React.useCallback((campingId: string): void => {
    setCampingId(campingId);
  }, []);

  return {
    isExpanded,
    updateIsExpanded,
    campingId,
    updateCampingId
  }
}

export { useSidebar }
