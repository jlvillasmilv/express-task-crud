import { connect } from 'mongoose';

console.log(process.env.MONGODB_URI);

const urldb = process.env.MONGODB_URI || 'mongodb://localhost/tasks';

(async () => {
    try {
        const db = await connect(urldb);
        console.log('DB connected to', db.connection.name);

    } catch (error) {
        console.error(error);
    }
})();
