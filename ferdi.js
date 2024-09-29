// ferdi.js
const fs = require('fs').promises;

async function rewrite(file) {
    try {
        //Teks Ferdi ke dalam file
        await fs.writeFile(file, "Halo ini Ferdi Firdaus Ega Pratama");

        // Baca kembali konten file
        const data = await fs.readFile(file, "utf-8");

        return data;
    } catch (error) {
        console.error("Error occurred in Ferdi rewrite:", error);
        throw error; // Untuk memastikan error diteruskan ke handler
    }
}

module.exports = {
    rewrite
};
