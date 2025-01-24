import crypto from 'crypto';

const generateConfirmationCode = () => {
    return 'UA' + crypto.randomBytes(8).toString('hex').toUpperCase();
};

export default generateConfirmationCode;