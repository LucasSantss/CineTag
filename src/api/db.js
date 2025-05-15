import { neon } from '@neondatabase/serverless';

const API_KEY = 'postgresql://cinetag_owner:npg_s8BtXMTFL6Cu@ep-soft-wave-acowc9wd-pooler.sa-east-1.aws.neon.tech/cinetag?sslmode=require';

const sql = neon(API_KEY);

export const getcinetag = async () => {
    try {
        const result = await sql`SELECT * FROM cinetags`;
        return result;
    } catch (error) {
        console.error('Erro ao buscar cinetags:', error);
        throw error;
    }
};

export const getcinetagById = async (id) => {
    try {
        const result = await sql.query(`SELECT * FROM cinetags WHERE id = ${id}`);
        return result;
    } catch (error) {
        console.error('Erro ao buscar cinetag por ID:', error);
        throw error;
    }
};