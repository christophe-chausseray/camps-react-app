import { useCallback, useState } from 'react';
import { SidebarContext } from './SidebarContext';

const useSidebar = (): SidebarContext => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [campingId, setCampingId] = useState(null);

  const updateIsExpanded = useCallback((isExpanded: boolean): void => {
    setIsExpanded(isExpanded);
  }, []);

  const updateCampingId = useCallback((campingId: string): void => {
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
