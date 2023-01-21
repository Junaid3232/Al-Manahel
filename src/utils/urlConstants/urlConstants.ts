export const urlConstants = {
  //Auth Urls
  login: '/api/Auth/login-user',
  logout: '/api/Auth/logout-user',
  getAllSubUser: '/api/Auth/get-all-sub-users',
  getAllSubUserParam: '/api/Auth/get-all-sub-users',
  resetUserPassword: '/api/Auth/reset-user-password',
  updateUser: '/api/Auth/update-user',
  deleteUser: '/api/Auth/delete-user?id=',
  //Refresh Token
  refreshToken: '/api/Auth/update-refresh-token',
  //Shop
  getShopByID: 'api/shop/get-shop-info-by-id?id=',
  //SETUP
  getPlaza: '/api/Setup/get-all-plazas',
  getCities: '/api/Setup/get-all-cities',
  getCompanies: '/api/Setup/get-all-companies',
  getAllCategory: '/api/Setup/get-all-categories',
  updateAddCompanies: '/api/Setup/add-update-company',
  updateAddCategory: '/api/Setup/add-update-category',
  deleteCompany: '/api/Setup/delete-company?id=',
  deleteCategory: '/api/Setup/delete-category?id=',

  //Register
  registerUser: '/api/Auth/register-user',
  registerSubUser: '/api/Auth/register-sub-user',

  //Sale Commission
  getAllSaleCommission: '/api/SaleCommission/get-all-sale-commissions',
  addUpdateSaleCommission: '/api/SaleCommission/add-update-sale-commission',
  deleteCommission: '/api/SaleCommission/delete-sale-commission',

  //Item
  addUpdateItem: '/api/Item/add-update-item',
  getAllItem: '/api/Item/get-all-items',
  deleteItem: '/api/Item/delete-item',
  getItems: '/api/Item/get-items-by-company-id',
  getItemByCategory: '/api/Item/get-items-by-category-id',
  getItemsbyCompAndCatId: '/api/Item/get-items-by-company-and-category-id',

  //Sale
  getAllSale: '/api/Sale/get-all-sales',
  addUpdateSale: '/api/Sale/add-update-sale',

  //Purchase
  getAllPurchase: '/api/Purchase/get-all-purchases',
  addNewPurchase: '/api/Purchase/add-update-purchase',

  //Report
  dailySummary: '/api/DailySummary/get-daily-summary-report',
  purchaseReport: '/api/Report/get-purchase-report-by-date-range',
  purchaseItemReportByRange:
    '/api/Report/get-purchase-item-report-by-date-range',
  saleReport: '/api/Report/get-sale-report-by-date-range',
  saleItemReportByRange: '/api/Report/get-sale-item-report-by-date-range',
  purchaseReportByDate: '/api/Report/get-purchase-report-detail-by-date',
  saleReportByDate: '/api/Report/get-sale-report-detail-by-date',
  reportByItemId: '/api/Report/get-item-stock-report-by-itemId-and-date-range',
  getAllReportItem: '/api/Report/get-all-items',

  //Purchase History
  getAllPurchasesItems: '/api/purchase/get-all-purchases-history',
  getPurchaseItemById: '/api/PurchaseItem/get-purchase-item-history-by-id',
  getPurchaseByItemId: '/api/PurchaseItem/get-purchase-item-history-by-item-id',

  //Sale History
  getAllSalesItems: '/api/sale/get-all-sales-history',
  getSaleItemById: '/api/saleitem/get-sale-item-history-by-id',
  getSaleByItemId: '/api/saleitem/get-sale-item-history-by-item-id',
  //Sale
  addNewSale: '/api/Sale/add-update-sale',

  //Counts
  purchaseCount: '/api/Dashboard/get-weekly-purchase-graph-data',
  SaleCount: '/api/Dashboard/get-weekly-sale-graph-data',

  //Dashborad
  itemsCount: 'api/Dashboard/get-sale-purchase-items-count',
};
