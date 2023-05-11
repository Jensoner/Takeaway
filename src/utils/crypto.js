import CryptoJS from 'crypto-js';
const key = '1234567890abcdef'; // 加密密钥
const iv = 'fedcba9876543210'; // 初始化向量
//加密函数
export function encryption(plaintext) {
    // 待加密的对象
    // 将对象序列化为字符串
    const plaintextStr = JSON.stringify(plaintext);

    // 使用 AES 加密算法对字符串进行加密
    return CryptoJS.AES.encrypt(plaintextStr, key, { iv: iv }).toString();

}

//解密函数
export function decryption(plaintext) {
    // 使用 AES 解密算法对密文进行解密
    const bytes = CryptoJS.AES.decrypt(plaintext, key, { iv: iv });
    const plaintextDecryptedStr = bytes.toString(CryptoJS.enc.Utf8);

    // 将解密得到的字符串反序列化为对象
    return JSON.parse(plaintextDecryptedStr);
}

// module.exports = { decryption, encryption }
