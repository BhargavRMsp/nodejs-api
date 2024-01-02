import crypto from 'crypto';

export const random = () => crypto.randomBytes(128).toString('base64');

/**
 * @param {string} salt
 * @param {string} password
 */
export const authentication = (salt, password) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(process.env.SECRET).digest('hex');
}