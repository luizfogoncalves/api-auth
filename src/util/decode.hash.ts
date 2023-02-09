import * as bcrypt from 'bcrypt';

export const compareHash = async (password, userPassword) => {
    const match = await bcrypt.compare(password, userPassword);
    if (match) return true;
    return false;
}