interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Store Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Store Manager', 'Store Employee'],
  tenantName: 'Supplier',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal information',
    'Read tool information',
    'Read store information',
    'Read supplier information',
  ],
  ownerAbilities: ['Manage user', 'Manage supplier', 'Manage customer', 'Manage store'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/9cea1d46-6446-4682-ad5c-1264931d665a',
};
