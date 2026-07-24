const argon2 = require ('argon2');
class PasswordManager {
    constructor() {
        console.log('PasswordManager class constructor called.');
    }
    async getHashPassword(original_password) {
        try {
            const hash = await argon2.hash(original_password);
            //console.log(hash);
            return hash;
        } catch (err) {
            console.error(err);
            return null;
        }
    }
    async comparePassword(plain_text_password, hashed_password) {
        try {
            if (await argon2.verify(hashed_password,plain_text_password)) {
                return true;
            } 
            else 
            {
                return false;
            }
        } catch (err) {
            // internal failure
        }
    }
}
module.exports.PasswordManager = PasswordManager;