/**
 * Error class for Buyer API
 * @class BuyerApiError
 * @extends {Error}
 * @param {string} message - Error message
 * @param {number} httpStatus - HTTP status code
 * @param {number} errorCode - Error code
 * @return {BuyerApiError}
 */
class BuyerApiError extends Error {
  /**
	 * Creates an instance of BuyerApiError.
	 * @param {string} message - Error message
	 * @param {number} httpStatus - HTTP status code
	 * @param {number} errorCode - Error code
	 */
  constructor(message, httpStatus, errorCode) {
    super(message);
    this.name = 'UserApiError';
    this.status = httpStatus;
    this.errorCode = errorCode;
  }
}

export { BuyerApiError };
