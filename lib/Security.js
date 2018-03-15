const crypto = require('crypto')

class Security {
    static md5(value) {
        if (!value) {
            return;
        }
        return crypto.createHash('md5').update(value).digest('hex');
    }
    
    static isValidNonce(value, req) {
        return value == this.md5(req.sessionID + req.headers['user-agent'])
    }

    static generateID() {
        // The seconds will show as an hexadecimal value
        let timestamp = (new Date().getTime() / 1000 | 0).toString(16);
        // "5aaa541e"
        let template = '%'.repeat(16);
        // "%%%%%%%%%%%%%%%%"
        return timestamp + template.replace(/[%]/g, () => {
            return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase();
        // "5aaa541e" + "cc4debc9b66bcba7" => "5aaa541ecc4debc9b66bcba7"
    }
}

module.exports = Security;