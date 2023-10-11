/* eslint-disable */
import React, { createContext, ReactNode, useContext } from 'react';
import { RequestOptions, RoqClient } from './roq-sdk';

interface RoqClientProviderProps {
  children: ReactNode;
  endpoint?: string;
  baseOptions?: RequestOptions;
}

const RoqClientContext = createContext<RoqClient | undefined>(undefined);

export const RoqClientProvider: React.FC<RoqClientProviderProps> = ({ children, endpoint, baseOptions = {} }) => {
  const roqClient = new RoqClient(endpoint, baseOptions);

  return <RoqClientContext.Provider value={roqClient}>{children}</RoqClientContext.Provider>;
};

export const useRoqClient = () => {
  const roqClient = useContext(RoqClientContext);
  if (!roqClient) {
    throw new Error('useRoqClient must be used within a RoqClientProvider');
  }
  return roqClient;
};
