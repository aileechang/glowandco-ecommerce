import crypto from 'crypto';

const generateConfirmationCode = () => {
    return 'UA' + crypto.randomBytes(4).toString('hex').toUpperCase();
};

export default generateConfirmationCode;