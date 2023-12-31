import app from './app.js'

async function main() {
    console.clear();
    await sequelize.sync({ force: false });
    const PORT = process.env.PORT;
    app.listen(PORT);
    logger.info(`Server on port ${PORT}`);
    logger.error('Server on port ');
    logger.debug('Server on port ');
    logger.warn('Server on port ');
    logger.fatal('Server on port ');
}

main();